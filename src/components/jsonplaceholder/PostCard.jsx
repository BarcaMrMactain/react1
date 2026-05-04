const PostCard = ({ post }) => {
  return (
    <div style={styles.card}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "1rem",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    backgroundColor: "black",
  },
};

export default PostCard;