import { useState } from "react";
// import "./App.css";

function App() {
  const [msg, setMsg] = useState("Hola");

  return (
    <div className="App">
      <h1>{msg}</h1>
    </div>
  );
}

export default App;
