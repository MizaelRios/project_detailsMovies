import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";
import { MdLocalMovies } from "react-icons/md";
import { useState } from "react";
import "../Navbar/Navbar.css";

const Navbar = () => {
  
  return (
    <nav id="navbar">
      <h2>
        <Link to="/">        
          <span>Detalhe Filmes</span>
        </Link>
      </h2>
    </nav>
  )
}

export default Navbar;
