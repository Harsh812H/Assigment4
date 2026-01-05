import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar">
      <h2 className="logo">ReactSite</h2>
      <div className="links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/user">User Info</NavLink>
      </div>
    </nav>
  );
}

export default Header;
