import { useState } from "react";

export default function App() {
  return <Counter />;
}
function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const [range, setRange] = useState(1);
  const handleDecreaseStep = () => {
    if (step > 1) setStep((step) => step - 1);
  };
  const handleIncreaseStep = () => setStep((step) => step + 1);
  const handleIncreaseCount = () => setCount((count) => count + step);
  const handleDecreaseCount = () => setCount((count) => count - step);
  let dateCount = count;
  let message;
  let estimatedDate = new Date();
  estimatedDate.setDate(estimatedDate.getDate() + dateCount);
  if (dateCount === 0) message = `Today is ${estimatedDate.toDateString()}`;
  else if (dateCount > 0)
    message = `${dateCount} days from today is ${estimatedDate.toDateString()}`;
  else if (dateCount < 0)
    message = `${dateCount * -1} days ago was ${estimatedDate.toDateString()}`;
  // function handleRange(e) {
  //   setRange(e.target.value);
  // }
  return (
    <div className="container">
      <div className="step">
        {/* <input type="range" min={0} max={10} onChange={(e) => handleRange(e)} />
        {range} */}
        <button className="decStep" onClick={handleDecreaseStep}>
          -
        </button>
        <span>Step: {step}</span>
        <button className="incStep" onClick={handleIncreaseStep}>
          +
        </button>
      </div>
      <div className="count">
        <button className="decCount" onClick={handleDecreaseCount}>
          -
        </button>
        <span>Count: {count}</span>
        <button className="incCount" onClick={handleIncreaseCount}>
          +
        </button>
      </div>
      <div className="result">
        <span>{message}</span>
      </div>
    </div>
  );
}
