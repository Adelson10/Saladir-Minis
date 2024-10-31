import { Planet, QuestionMark, Phone } from "@phosphor-icons/react";
import './Header.css';
import LogoAliens from "../../assets/icons/LogoAliens";
import useMedia from "../../Hooks/useMedia";
import React from "react";

const Header = () => {
    const mobile = useMedia(600);
    const [navMobile, setNavMobile] = React.useState<boolean>(false);
    if (mobile) {
        return (
            <header>
                <div className={`header-mobile ${navMobile ? 'close' : ''}`} onClick={() => setNavMobile(navMobile => !navMobile)}></div>
                <div className="logo-loja"></div>
                { navMobile &&
                    <nav>
                        <ul>
                            <li><Planet /> O universo</li>
                            <li><LogoAliens />Facções</li>
                            <li><QuestionMark /> Como Jogar</li>
                            <li><Phone /> Fale Conosco</li>
                        </ul>
                    </nav>
                }
            </header>
        )
    } else {
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
}

export default Header;