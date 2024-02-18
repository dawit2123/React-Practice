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

function Accordion() {
  const [globalIsOpened, globalSetIsOpened] = useState(null);
  const [validateOpened, setValidateOpened] = useState(false);

  return (
    <>
      <h2 className="faq">Frequently Asked Questions FAQ</h2>;
      {items.map((item, index) => (
        <AccordionItem
          item={item}
          index={index}
          key={item.id}
          globalIsOpened={globalIsOpened}
          validateOpened={validateOpened}
          globalSetIsOpened={globalSetIsOpened}
          setValidateOpened={setValidateOpened}
        />
      ))}
      ;
    </>
  );
}
function AccordionItem({
  item,
  index,
  globalIsOpened,
  globalSetIsOpened,
  validateOpened,
  setValidateOpened,
}) {
  const isOpened = globalIsOpened === index && validateOpened;
  function handleIsOpened(item) {
    globalSetIsOpened(index);
    setValidateOpened(!validateOpened);
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
