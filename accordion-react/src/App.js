import { type } from "@testing-library/user-event/dist/type";
import "./index.css";
export default function App() {
  return <Accordion />;
}
const items = [
  {
    name: "What is React",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sunt explicabo fuga quas expedita totam! Quia distinctio enim cum voluptas mollitia optio, eius ipsam consequatur consectetur dolore, necessitatibus, eligendi adipisci.",
    isOpened: false,
    id: Date.now(),
  },
  {
    name: "What is the best programming language to learn",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sunt explicabo fuga quas expedita totam! Quia distinctio enim cum voluptas mollitia optio, eius ipsam consequatur consectetur dolore, necessitatibus, eligendi adipisci.",
    isOpened: false,
    id: Date.now(),
  },
  {
    name: "How to love problem and get more problems",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sunt explicabo fuga quas expedita totam! Quia distinctio enim cum voluptas mollitia optio, eius ipsam consequatur consectetur dolore, necessitatibus, eligendi adipisci.",
    isOpened: false,
    id: Date.now(),
  },
];
{
  /* <h2 className="faq">Frequently Asked Questions FAQ</h2>; */
}
function Accordion() {
  return items.map((item) => (
    <div className="container">
      <div className="container-item active">
        <div className="parent-header">
          <span className="number">01</span>
          <h2 className="child-header">{item.name}</h2>
          <button className="button">+</button>
        </div>

        <p className="container-paragraph">{item.description}</p>
      </div>
    </div>
  ));
}
