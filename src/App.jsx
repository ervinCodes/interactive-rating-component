import { useState } from "react";
import Card from './components/Card.jsx';
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Card/>
  );
}

export default App;
