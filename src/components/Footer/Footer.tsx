import React from 'react'
import './Footer.css';
import { DiscordLogo, InstagramLogo, XLogo } from '@phosphor-icons/react';

const Footer = () => {
  return (
    <footer>
        <div className="footer-container-logo-container">
            <div className="footer-container-logo"></div>
        </div>
        <div className="footer-container">
            <h3>Informações de Contato</h3>
            <ul>
                <li>Telefone</li>
                <li>Email</li>
            </ul>
        </div>
        <div className="footer-container">
            <h3>Sobre nós</h3>
            <ul>
                <li><a href="">FAQ</a></li>
                <li><a href="">Categorias de Produtos</a></li>
                <li><a href="">Política de Frete e Entrega</a></li>
                <li><a href="">Política de Devolução</a></li>
                <li><a href="">Termos de Uso e Política de Privacidade</a></li>
            </ul>
        </div>
        <div className="footer-container">
            <p>Se os Storm Bringers já dominam a arte de equilibrar ferocidade com estratégia, qual você acha que é o próximo desafio para eles?</p>
        </div>
        <div className="footer-container-descriptions">
            <p>© 2024 Saladir Minis, inc.</p>
            <div className="footer-container-sociais">
                <DiscordLogo size={'2rem'} weight='fill'/>
                <XLogo size={'2rem'} />
                <InstagramLogo size={'2rem'} />
            </div>
        </div>
    </footer>
  )
}

export default Footer;