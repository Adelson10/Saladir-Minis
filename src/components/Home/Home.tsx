import Header from '../Header/Header';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
        <Header />
        <div className="anuncio-container">
            <div className="anuncio-title-container">
                <h1>Lançamento em Janeiro de 2025</h1>
                <h2>Junte-se ao melhor capitulo desse lado do Warp!</h2>
            </div>
            <div className="anuncio-subtitle-container">
              <h3>Inscreva-se para receber atualizações mais recentes par<br />o primeiro tabletop baseado em warhammer40k do Brasil.</h3>
              <form>
                <label className='anuncio-subtitle-email-label' htmlFor="email-home"><input type="email" name="email-home" id="email-home" placeholder='Email' /><button className='anuncio-subtitle-email-button'>Inscrição</button></label>
              </form>
            </div>
        </div>
    </div>
  )
}

export default Home;