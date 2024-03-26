import { useState } from "react";
export default function App() {
  return (
    <div className="App">
      <h1>Hello User</h1>
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
    setShowAnswer(!showAnswer);
  };
  return (
    <div>
      <h1>{qNA[currentQuestion].question}</h1>
      <h2>{showAnswer ? qNA.at(currentQuestion).answer : ""}</h2>
      <button onClick={handleAnswer}>
        {showAnswer ? "Hide answer" : "Show Answer"}
      </button>
      <br />
      <button onClick={() => setCurrentQuestion(currentQuestion + 1)}>
        Change question
      </button>
    </div>
  );
}
