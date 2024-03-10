/* eslint-disable react/prop-types */
function TodoApp(props) {
  return (
    <div>
      Todo item
      <h2>{props.text}</h2>
    </div>
  );
}

function App() {
  return (
    <>
      <div>
        <h2>ra ra rasputin</h2>
        <TodoApp />
      </div>
    </>
  );
}

export default App;
