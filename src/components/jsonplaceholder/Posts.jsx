import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import Loader from "../../components/Loader";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const postsPerPage = 10;
  
  const startIndex = (currentPage - 1) * postsPerPage;
  const selectedPosts = posts.slice(startIndex, startIndex + postsPerPage);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <>
      <div style={styles.container}>
        {selectedPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      <div style={styles.buttons}>
  <button
    className="inline-block px-4 py-2 mt-5 mb-10 font-bold text-white rounded bg-gray-500 hover:bg-gray-700 disabled:opacity-40 disabled:cursor-not-allowed"
    onClick={() => setCurrentPage((prev) => prev - 1)}
    disabled={currentPage === 1}
  >
    ◀️ PREVIOUS
  </button>

  <div style={styles.pageIndicator}>
    SIDE {currentPage} / {totalPages}
  </div>

  <label>
  Vælg antal poster pr. side:
  <select
    value={itemsPerPage}
    onChange={(e) => {
      setCurrentPage(1);
      setItemsPerPage(Number(e.target.value)); 
    }}
  >
    <option value={5}>5</option>
    <option value={10}>10</option>
    <option value={20}>20</option>
    <option value={50}>50</option>
  </select>
</label>

  <button
    className="inline-block px-4 py-2 mt-5 mb-10 font-bold text-white rounded bg-gray-500 hover:bg-gray-700"
    onClick={() => setCurrentPage((prev) => prev + 1)}
    disabled={startIndex + postsPerPage >= posts.length}
  >
    NEXT ▶️
  </button>
</div>
    </>
  );
};

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "1rem",
    padding: "1rem",
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "1.5rem",
    margin: "1rem",
  },
  pageIndicator: {
    minWidth: "100px",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "1.2rem",
},
};

export default Posts;