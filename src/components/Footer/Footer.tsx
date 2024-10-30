import React from 'react'
import LogoLoja from '../../assets/icons/LogoLoja';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
        <div className="footer-container">
            <LogoLoja height='100' width='88'/>
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
            <h3>Informações de Contato</h3>
            <p>Se os Storm Bringers já dominam a arte de equilibrar ferocidade com estratégia, qual você acha que é o próximo desafio para eles?</p>
        </div>
    </footer>
  )
}

export default Footer;