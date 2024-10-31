import { Planet, HouseLine, QuestionMark, Phone, User } from "@phosphor-icons/react";
import './Header.css';
import LogoAliens from "../../assets/icons/LogoAliens";

const Header = () => {
  return (
    <header>
        <nav>
            <ul>
                <li><Planet /> O universo</li>
                <li><LogoAliens />Facções</li>
            </ul>
            <div className="header-logo-storie">
                <div className="logo-loja"></div>
            </div>
            <ul>
                <li><QuestionMark /> Como Jogar</li>
                <li><Phone /> Fale Conosco</li>
            </ul>
        </nav>
    </header>
  )
}

export default Header;