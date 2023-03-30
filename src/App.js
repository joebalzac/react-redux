import CreateTweet from "./components/CreateTweet";
import TweetList from "./components/TweetList";

function App() {
  const name = "Big Pun";
  const message = "I am going to be a software engineer";

  // Create Functions
  const sayHelloHandler = (user) => {
    console.log(`Hello there ${user}`)
  }

  return (
    <div className="App">
      <h1>Software Engineer</h1>
      {/* <CreateTweet author="Lloyd Banks" title="The Man and the legend" />
      <TweetList name={name} message={message} /> */}
      <h1>{name}</h1>
      <button onClick={sayHelloHandler('JOEY B')}>Click</button>
    </div>
  );
}

export default App;
