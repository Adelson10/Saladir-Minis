import LogoStormBringers from '../../assets/icons/LogoStormBringers';
import LogoWolfDescription from '../../assets/icons/LogoWolfDescription';
import Faccao from '../Faccao/Faccao';
import Header from '../Header/Header';
import StromBringers from '../Mockup/FaccoesMockup';
import Sociais from '../utils/Sociais';
import './Home.css';

const Home = () => {
  return (
    <>
      <div className="home-container">
          <Header />
          <div className="anuncio-container">
              <div className="anuncio-title-container">
                  <h1></h1>
                  <h2>Junte-se ao melhor capitulo desse lado do Warp!</h2>
              </div>
              <div className="anuncio-subtitle-container">
                <h3>Inscreva-se para receber atualizações mais recentes par<br />o primeiro tabletop baseado em warhammer40k do Brasil.</h3>
                <form>
                  <label className='anuncio-subtitle-email-label' htmlFor="email-home"><input type="email" name="email-home" id="email-home" placeholder='Email' /><button className='anuncio-subtitle-email-button'>Inscrição</button></label>
                </form>
              </div>
          </div>
          <Sociais />
      </div>
      <div className="container-description-container">
        <div className="container-description-bg">
          <LogoStormBringers />
        </div>
          <div className='container-description-text'>
            <h1 className='home-title'>o chamado da tempestade</h1>
            <p className='primeiro'>Em um mundo onde os elementos dançam em sinfonia com as forças primordiais da natureza, os Storm Bringers emergem como guardiões e catalisadores de tempestades. Esses indivíduos extraordinários não são apenas manipuladores das forças climáticas; são também os escolhidos de um destino ancestral, com o poder de invocar relâmpagos e desvendar os segredos ocultos nas nuvens.</p>
            <p>As terras que habitam são repletas de mistérios e tradições, onde mitos antigos sussurram sobre a origem dos Storm Bringers e seu papel essencial no equilíbrio do mundo. Entre montanhas majestosas e mares revoltos, eles se confrontam com desafios que testam não apenas sua habilidade de controlar as tempestades, mas também sua coragem e lealdade.</p>
            <p>Neste universo vibrante, cada tempestade traz consigo um novo começo e um fim inesperado. A jornada dos Storm Bringers é marcada por alianças inusitadas, conflitos épicos e a incessante busca por um propósito maior. Ao desbravar os céus e enfrentar os elementos, eles descobrirão que seu verdadeiro poder vai além da manipulação das forças da natureza; está enraizado em sua conexão com o mundo e com aqueles que os rodeiam.</p>
            <p>Prepare-se para embarcar em uma aventura eletrizante, onde cada relâmpago ilumina a escuridão e cada tempestade carrega a promessa de mudanças radicais. O universo dos Storm Bringers está prestes a se revelar, e a tempestade está apenas começando.</p>
            <div className="container-description-border">
              <div className="container-description-border-sides"></div>
              <div className="container-description-border-logo">
                <LogoWolfDescription />
              </div>
              <div className="container-description-border-sides"></div>
            </div>
          </div>
          <Faccao faction={StromBringers} type='good'/>
          <Faccao faction={StromBringers} type='good'/>
      </div>
      
    </>
  )
}

export default Home;