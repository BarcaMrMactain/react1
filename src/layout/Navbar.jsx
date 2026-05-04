import { NavLink } from "react-router";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      
      {/* Logo */}
      <div className="flex-1">
        <NavLink to="/" className="btn btn-ghost text-xl">
          React App
        </NavLink>
      </div>

      {/* Menu */}
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">

          {/* Basic */}
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>

          {/* JSONPlaceholder */}
          <li>
            <details>
              <summary>JSONPlaceholder</summary>
              <ul className="bg-base-100 p-2">
                <li><NavLink to="/posts">Posts</NavLink></li>
                <li><NavLink to="/todos">Todos</NavLink></li>
              </ul>
            </details>
          </li>

          {/* SWAPI */}
          <li>
            <details>
              <summary>SWAPI</summary>
              <ul className="bg-base-100 p-2">
                <li><NavLink to="/species">Species</NavLink></li>
                <li><NavLink to="/starships">Starships</NavLink></li>
              </ul>
            </details>
          </li>

          {/* Ghibli */}
          <li>
            <details>
              <summary>Ghibli</summary>
              <ul className="bg-base-100 p-2">
                <li><NavLink to="/films">Films</NavLink></li>
                <li><NavLink to="/people">People</NavLink></li>
              </ul>
            </details>
          </li>

          {/* News */}
          <li>
            <details>
              <summary>News</summary>
              <ul className="bg-base-100 p-2">
                <li><NavLink to="/newseverything">Everything</NavLink></li>
              </ul>
            </details>
          </li>

          {/* Weather */}
          <li>
            <details>
              <summary>Weather</summary>
              <ul className="bg-base-100 p-2">
                <li><NavLink to="/weather1">Weather 1</NavLink></li>
                <li><NavLink to="/weather2">Weather 2</NavLink></li>
              </ul>
            </details>
          </li>

          {/* RapidAPI */}
          <li>
            <details>
              <summary>RapidAPI</summary>
              <ul className="bg-base-100 p-2">
                <li><NavLink to="/hobbies">Hobbies</NavLink></li>
                <li><NavLink to="/facts">Facts</NavLink></li>
                <li><NavLink to="/lovecalc">Love meter</NavLink></li>
                <li><NavLink to="/dog">Dog</NavLink></li>
              </ul>
            </details>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default Navbar;