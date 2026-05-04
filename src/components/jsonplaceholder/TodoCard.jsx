import { FaCheck } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const TodoCard = ({ todo }) => {
  const isDone = todo.completed;

  return (
    <div
      style={{
        ...styles.card,
        backgroundColor: isDone ? "#1E9C43" : "#BF0000", // grøn / rød baggrund
        color: "#000", // sort tekst
      }}
    >
      <h4>{todo.title}</h4>

      <p>
        {isDone ? <FaCheck/> : <FaX/>}
      </p>
    </div>
  );
};

const styles = {
  card: {
    borderRadius: "10px",
    padding: "1rem",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  },
};

export default TodoCard;