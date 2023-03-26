const Tweet = ({name,message}) => {
  return (
    <div className="tweet">
      <h3>{name}</h3>
      <p>{message}</p>
      <button>Delete</button>
      <button>Like</button>
    </div>
  );
};

export default Tweet;
