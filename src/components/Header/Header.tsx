import { Planet, HouseLine, QuestionMark, Phone, User } from "@phosphor-icons/react";
import './Header.css';
import LogoAliens from "../../assets/icons/LogoAliens";
import LogoLoja from "../../assets/icons/LogoLoja";

const Header = () => {
  return (
    <header>
        <nav>
            <ul>
                <li><HouseLine /> Inicio</li>
                <li><Planet /> O universo</li>
                <li><LogoAliens />Facções</li>
            </ul>
            <div className="header-logo-storie">
                <LogoLoja />
            </div>
            <ul>
                <li><QuestionMark /> Como Jogar</li>
                <li><Phone /> Fale Conosco</li>
                <li><User /> Login</li>
            </ul>
        </nav>
    </header>
  )
}

export default Header;