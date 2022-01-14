import { Link } from "react-router-dom";
import { useRef } from "react";
import Logo from "../assets/images/logo.png";

const Navbar = () => {
  const checkboxRef = useRef();
  const handleCheckbox = () => (checkboxRef.current.checked = false);

  return (
    <header>
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <input type="checkbox" id="active" className="hide" ref={checkboxRef} />
      <label htmlFor="active" className="menu-btn hide">
        <i className="fas fa-bars"></i>
      </label>
      {/* mobile responsive nav menu */}
      <nav className="wrapper hide">
        <ul>
          <li>
            <Link to="/" onClick={handleCheckbox}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/movies" onClick={handleCheckbox}>
              Movies
            </Link>
          </li>
        </ul>
      </nav>
      {/* desktop nav */}
      <ul className="tab show">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
