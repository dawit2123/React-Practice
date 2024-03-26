import { useState } from "react";
import "./App.css";
export default function App() {
  return (
    <div className="App">
      <h1>Hello ...</h1>
      <QuestionAndAnswers />
    </div>
  );
}
function QuestionAndAnswers() {
  const qNA = [
    { question: "Is javascript awesome ?", answer: "Yes" },
    {
      question: "Is JavaScript one of the low level languages ?",
      answer: "No",
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const handleAnswer = () => {
    setShowAnswer((showAnswer) => !showAnswer);
  };
  return (
    <div>
      <h1>{qNA[currentQuestion].question}</h1>
      <h2>{showAnswer ? qNA.at(currentQuestion).answer : ""}</h2>
      <button className="btn" onClick={handleAnswer}>
        {showAnswer ? "Hide answer" : "Show Answer"}
      </button>
      <button
        className="btn"
        onClick={() =>
          setCurrentQuestion(
            currentQuestion < qNA.length - 1
              ? currentQuestion + 1
              : currentQuestion
          )
        }
      >
        Change question
      </button>
    </div>
  );
}
