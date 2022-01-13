const Navbar = () => {
  return (
    <header>
      <a href="index.html">
        <img src="assets/images/logo.png" alt="logo" />
      </a>
      <input type="checkbox" id="active" className="hide" />
      <label htmlFor="active" className="menu-btn hide">
        <i className="fas fa-bars"></i>
      </label>
      {/* mobile responsive nav menu */}
      <nav className="wrapper hide">
        <ul>
          <li>
            <a href="index.html ">Home</a>
          </li>
          <li>
            <a href="assets/movie.html">Movies</a>
          </li>
        </ul>
      </nav>
      {/* desktop nav */}
      <ul className="tab show">
        <li>
          <a href="index.html ">Home</a>
        </li>
        <li>
          <a href="assets/movie.html">Movies</a>
        </li>
      </ul>
    </header>
  );
}

export default Navbar
