import { Link, NavLink, useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";
import "../Navbar/Navbar.css";
import { useState } from "react";
import logo from "../../assets/logo-home.png"

const Navbar = () => {
  const [click, setclick] = useState(true);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handle = () => {
    setclick(!click);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(search);

    if (!search) return;

    navigate(`/search?q=${search}`);
    setSearch("");
  };

  return (
    <header>
      <div className="container">
        <nav className="navigation">
          <Link to="/">
            <img src={logo} alt="Logo" className="logo" />
          </Link>
          <div className="mobile_menu_icon" onClick={handle}>
            <AiOutlineMenu
              name={click ? 'menu-outline' : 'close-outline'}
            ></AiOutlineMenu>
          </div>
          <ul className={click ? 'nav_menu' : 'nav_menu active'}>
            <li className="nav_list">
              <NavLink to="/about" className="nav_link" onClick={handle}>
                Filmes
              </NavLink>
            </li>
            <li className="nav_list">
              <NavLink to="/portfolio" className="nav_link" onClick={handle}>
                Categoria
              </NavLink>
            </li>
            <li className="nav_list">
              <NavLink to="/contact" className="nav_link" onClick={handle}>
                Contato
              </NavLink>
            </li>
            <li className="nav_list">
              <form id="form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Busque pelo seu filme"
                  onChange={(e) => setSearch(e.target.value)} value={search} />
                <button type="submit"><BiSearchAlt2 id="icon-search" /></button>
              </form>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
