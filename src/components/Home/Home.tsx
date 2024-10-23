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
        </div>
    </div>
  )
}

export default Home;