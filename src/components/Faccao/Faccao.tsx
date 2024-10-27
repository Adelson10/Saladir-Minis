import ModalBox from './ModalBox';
import './Faccao.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';

const Faccao = ({faction, type}: {faction: FactionProps, type: string}) => {
  const [index] = React.useState<number>(0);
  
  return (
    <div className='faccao-container'>
        <ModalBox product={faction.products} index={index} type={type}/>
        <div className="faccao-text-container">
          <h1 className='home-title'>STORM BRINGERS</h1>
          <h2>Assault Intercessors</h2>
          <p className='faccao-text-description'>Os Storm Bringers são um capítulo de Fuzileiros do Espaço Sideral cujas origens e tradições estão profundamente ligadas aos elementos da natureza, em especial às tempestades, das quais derivam seu nome e filosofia de combate. Criados como um dos sucessores dos Selvagens do Espaço Sideral, eles compartilham alguns traços ferozes e guerreiros de seus antecessores, mas com uma abordagem mais estratégica e disciplinada.</p>
          <p className='faccao-text-author'><div className="line-author"></div>Nikkar</p>
          <div className="faccao-products-list">
            <Swiper>
              {faction.products.map(({image, faction, name}) => 
                <SwiperSlide key={name}>
                  <button className={`faccao-product ${type}`}>
                    <div style={{backgroundImage: `url(${image[0]})`}} className="faccao-product-image">
                      <div className="faccao-product-text-container">
                        <h2>{faction}</h2>
                        <h3>{name}</h3>
                      </div>
                    </div>
                  </button>
                </SwiperSlide>
              )}
            </Swiper>
          </div>
        </div>
    </div>
  )
}

export default Faccao;