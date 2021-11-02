import { Link } from "react-router-dom";

import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__container header__container--logo">
        <img
          className="header__logo"
          src="https://mobf.org/wp-content/uploads/2020/12/my-own-book-favicion.png"
          alt="logo"
        />
      </div>
      <div className="header__container header__container--nav">
        <div className="nav">
          <Link className="nav__element" to="/">
            my books
          </Link>
        </div>
        <div>
          <Link className="nav__element" to="/add_book">
            add book
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
