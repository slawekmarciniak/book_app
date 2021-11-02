import { useRef } from "react";
import TitleIcon from "@mui/icons-material/Title";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";

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
          <TitleIcon
            style={{ color: "#E67E22", border: "1px solid #E67E22" }}
          />{" "}
          <span>Title:</span> {title}
        </li>
        <li>
          <AccountBoxIcon style={{ color: "#E67E22" }} />
          <span>Author:</span> {author}
        </li>
        <li>
          <MenuBookIcon style={{ color: "#E67E22" }} />
          <span>Publishing House:</span> {publishingHouse}
        </li>
        <li>
          <FormatListNumberedIcon style={{ color: "#E67E22" }} />
          <span>Pages:</span> {pages}
        </li>
      </ul>
    </>
  );
};

export default Book;
