const CreateTweet = ({author,title}) => {
  return (
    <form action="">
      <textarea cols="30" rows="10"></textarea>
      <h1>{title}</h1>
      <h2>{author}</h2>
      <p>{author}</p>
      <button>Submit</button>
    </form>
  );
};

export default CreateTweet;
