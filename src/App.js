import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);

  const changeHandler = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    const words = text.split(" ");

    let wordCount = 0;
    words.forEach((word) => {
      if (word.trim() !== "") {
        wordCount++;
      }
    });
    setWordCount(wordCount);
  }, [text]);
  return (
    <div className="box">
      <h1>Responsive Paragraph Word Counter</h1>
      <textarea
        value={text}
        onChange={changeHandler}
        className="feedback"
        rows="10"
        cols="50"
      ></textarea>
      <p
        style={{
          position: " absolute",
          bottom: 10,
          left: 60,
          color: "gray",
          fontSize: "1.5rem",
        }}
      >
        Word Count: {wordCount}
      </p>
    </div>
  );
}

export default App;
