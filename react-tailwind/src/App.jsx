import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-red-600 text-5xl font-bold text-center">
        Hii this is a react + tailwind project setup
      </h1>
    </>
  );
}

export default App;
