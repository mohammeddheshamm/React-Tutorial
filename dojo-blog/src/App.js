import './App.css';

function App() {
  const title = "App Component";
  const likes = 50;


  return (
    <div className="App">
      <div className='content'>
        <h1>{ title }</h1>
        <p>Liked {likes} likes.</p>

        <p> { 50 } </p>
        <p> { "Light weight baby :D" } </p>
        <p> { Math.random() * 100 } </p>
      </div>
    </div>
  );
}

export default App;
