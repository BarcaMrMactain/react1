import { useEffect, useState } from "react";
import useRequestData from "../../hooks/useRequestData";
import TodoCard from "./TodoCard";
import Loader from "../../components/Loader";

import { FaCheck } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { FaList } from "react-icons/fa6";

const Todos = () => {
  const { makeRequest, isLoading, data, error } = useRequestData();
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    makeRequest( {url: "https://jsonplaceholder.typicode.com/todos" } );
  }, []);

  const filteredTodos = data?.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "notCompleted") return !todo.completed;
    return true;
  });

  {
    isLoading && <Loader />;
  }
  {
    error && <p>Fejl: {error}</p>;
  }

  return (
    <>
      <h1 style={styles.heading}>Velkommen til To dos fra JSONPlaceholder</h1>
      {isLoading && <Loader />} {error && <Error />}
      <div style={{ textAlign: "center" }}>
        <button
          className="inline-block px-4 py-2 mt-5 mb-10 mr-4 font-bold text-white rounded bg-gray-500 hover:bg-gray-700"
          onClick={() => setFilter("all")}
        >
          Vis Alle
        </button>

        <button
          className="inline-block px-4 py-2 mt-5 mb-10 mr-4 font-bold text-white rounded bg-green-500 hover:bg-green-700"
          onClick={() => setFilter("completed")}
        >
          Vis Completed
        </button>

        <button
          className="inline-block px-4 py-2 mt-5 mb-10 mr-4 font-bold text-white rounded bg-red-500 hover:bg-red-700"
          onClick={() => setFilter("notCompleted")}
        >
          Vis Not Completed
        </button>
      </div>
      {/* Todos */}
      <div style={styles.container}>
        {filteredTodos &&
          filteredTodos.map((todo) => <TodoCard key={todo.id} todo={todo} />)}
      </div>
    </>
  );
};

const styles = {
  heading: {
    textAlign: "center",
    marginTop: "1rem",
    fontSize: "2.5rem",
    fontWeight: "bold",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "1rem",

    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "1rem",
  },
};

export default Todos;
