import { FaFacebook, FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import "../Footer/Footer.css";

const Footer = () => {

  return (
    <footer className="footer">
      <div className="social_list">
        <span>Políticas de privacidade</span>
        <span>Termos e Condições de uso</span>
        <span>Anúncios com base em interesses</span>
      </div>
      
      <div className="social_list">
        <FaFacebook />
        <FaInstagram />
        <AiOutlineMail />
      </div>

      <p>
        <span>Detalhe Filmes</span>
        &copy; 2023
      </p>
    </footer>
  )
}

export default Footer;