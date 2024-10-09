import Posts from "./Components/Posts";

function App() {
  return (
    <div className="w-screen min-h-screen flex flex-col justify-center items-center bg-black">
      <h1 className="text-white text-3xl mb-4">My Posts</h1>
      <div className="w-full max-w-4xl px-4">
        <Posts />
      </div>
    </div>
  );
}

export default App;
