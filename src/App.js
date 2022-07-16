import { useState } from "react";
import "./styles.css";

export default function App() {
  const [data, setdata] = useState(true);
  return (
    <div className="App">
      {data ? <h2>hello</h2> : null}
      <button
        onClick={() => {
          setdata(false);
        }}
      >
        hide
      </button>
      <button
        onClick={() => {
          setdata(true);
        }}
      >
        show
      </button>
      <button
        onClick={() => {
          setdata(!data);
        }}
      >
        toggel(show and hide)
      </button>
    </div>
  );
}
