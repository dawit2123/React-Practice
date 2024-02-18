import { type } from "@testing-library/user-event/dist/type";
import "./index.css";
import { useState } from "react";
export default function App() {
  return <Accordion />;
}
const items = [
  {
    name: "What is React",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sunt explicabo fuga quas expedita totam! Quia distinctio enim cum voluptas mollitia optio, eius ipsam consequatur consectetur dolore, necessitatibus, eligendi adipisci.",
    id: Date.now(),
  },
  {
    name: "What is the best programming language to learn",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sunt explicabo fuga quas expedita totam! Quia distinctio enim cum voluptas mollitia optio, eius ipsam consequatur consectetur dolore, necessitatibus, eligendi adipisci.",
    id: Date.now() + 1,
  },
  {
    name: "How to love problem and get more problems",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sunt explicabo fuga quas expedita totam! Quia distinctio enim cum voluptas mollitia optio, eius ipsam consequatur consectetur dolore, necessitatibus, eligendi adipisci.",
    id: Date.now() + 2,
  },
];
{
  /* <h2 className="faq">Frequently Asked Questions FAQ</h2>; */
}
function Accordion() {
  return items.map((item, index) => (
    <AccordionItem item={item} index={index} key={item.id} />
  ));
}
function AccordionItem({ item, index }) {
  const [isOpened, setIsOpened] = useState(false);
  function handleIsOpened(item) {
    console.log("high");
    setIsOpened(!isOpened);
  }
  return (
    <div className="container">
      <div className={`container-item ${isOpened === true ? "active" : ""}`}>
        <div className="parent-header" onClick={() => handleIsOpened(item)}>
          <span className="number">
            {index < 10 ? `0${index + 1}` : `${index + 1}`}
          </span>
          <h2 className="child-header">{item.name}</h2>
          <button className="button">{isOpened === true ? "-" : "+"}</button>
        </div>

        <p className="container-paragraph">
          {isOpened === true ? item.description : ""}
        </p>
      </div>
    </div>
  );
}
