import { NavLink } from "react-router-dom";
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
          <NavLink
            className="nav__element"
            activeClassName="active"
            to="/"
            exact
          >
            my books
          </NavLink>
        </div>
        <div>
          <NavLink
            className="nav__element"
            activeClassName="active"
            to="/add_book"
            exact
          >
            add book
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
