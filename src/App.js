import './App.css';
import { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(count + 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [count]);

  return <h1>I have rendered {count} times </h1>;
}

export default Timer;
