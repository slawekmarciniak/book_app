import { useRef } from "react";

const Book = ({ title, author, publishingHouse, pages }) => {
  const elementRef = useRef(null);

  const addColor = () => {
    elementRef.current.style.backgroundColor = "#ecf0f1";
  };
  const removeColor = () => {
    elementRef.current.style.backgroundColor = "white";
  };
  return (
    <>
      <ul
        ref={elementRef}
        onMouseEnter={() => addColor()}
        onMouseLeave={() => removeColor()}
      >
        <li>
          <span>title:</span> {title}
        </li>
        <li>
          <span>author:</span> {author}
        </li>
        <li>
          <span>publishing House:</span> {publishingHouse}
        </li>
        <li>
          <span>pages:</span> {pages}
        </li>
      </ul>
    </>
  );
};

export default Book;
