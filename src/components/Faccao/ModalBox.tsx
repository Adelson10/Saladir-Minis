import React, { MouseEventHandler } from 'react';
import './ModalBox.css';
import { CaretLeft, CaretRight, CubeFocus } from '@phosphor-icons/react';
import LogoShockHounds from '../../assets/icons/LogoShockHounds';
import ShieldIcon from '../../assets/icons/ShieldIcon';
import BgModalBox from '../../assets/icons/BgModalBox';
import IconM from '../../assets/icons/IconM';
import IconT from '../../assets/icons/IconT';
import IconSV from '../../assets/icons/IconSV';
import IconW from '../../assets/icons/IconW';
import IconLD from '../../assets/icons/IconLD';
import IconOC from '../../assets/icons/IconOC';
import AvailableAction from './AvailableActions';

const ModalBox = ({image, name, iconCompany, statusPosition, status, tags, AvailableActions }: PropsModalBox) => {
    const imagem3d = React.useRef<HTMLDivElement>(null);
    const Box = React.useRef<HTMLDivElement>(null);
    const [activeImage3d, setActiveImage3d] = React.useState<boolean>(false);
    const [currentClass, SetCurrentClass] = React.useState<string>('');

    const [index, setIndex] = React.useState<number>(0);

    function handleLeft() {
        if(index > 0 ) setIndex(index - 1);
        else setIndex(3);
    }

    function handleRight() {        
        if(index < 3 ) setIndex(index + 1);
        else setIndex(0);
    }

    React.useEffect(() => {
        const showClass = `show-${index}`;
        
        if ( currentClass ) {                            
            Box.current!.classList.remove(currentClass);
        }
        Box.current!.classList.add(showClass);
        SetCurrentClass(showClass);
    }, [index]);

    function handleClick(): void {
       setActiveImage3d((active) => !active);
    }

  return (
    <>
            <div className='modal-box-container'>
                <button className="modal-box-container-button" onClick={handleLeft}><CaretLeft size={'1.2rem'}/></button>
                <div className="box" ref={Box}>
                    <div className="box-face box-face--front"></div>
                    <div className="box-face box-face--back">
                        <div className="box-face-image-char-container">
                            <button className="box-face-image-active-3d" onClick={handleClick} style={{color: activeImage3d ? getComputedStyle(document.documentElement).getPropertyValue('--color-three') : 'white' }}><CubeFocus /></button>
                            <div className="box-face-image-char" ref={imagem3d} style={{backgroundImage: image}}></div>
                            <div className="box-face-char-degrade-container">
                                <div className="box-face-char-status-cotainer">
                                    <div className='box-face-char-title-container'>
                                        <div className="box-face-char-title">
                                            <h4>STORM BRINGER</h4>
                                            <h3>INTERCESSORS</h3>
                                        </div>
                                        <div className="box-face-char-title-icons">
                                            <LogoShockHounds />
                                            <ShieldIcon>+4</ShieldIcon>
                                        </div>
                                    </div>
                                    <div className="box-face-status-container">
                                        <BgModalBox status='M' value='5"'><IconM /></BgModalBox>
                                        <BgModalBox status='T' value='5'><IconT /></BgModalBox>
                                        <BgModalBox status='SV' value='2+'><IconSV /></BgModalBox>
                                        <BgModalBox status='W' value='3'><IconW /></BgModalBox>
                                        <BgModalBox status='LD' value='2+'><IconLD /></BgModalBox>
                                        <BgModalBox status='OC' value='1'><IconOC /></BgModalBox>
                                    </div>
                                    <div className='box-face-status-tags'>
                                        { tags && tags.map((tag) => 
                                            <h5 key={tag}>{tag}</h5>
                                        )}
                                    </div>
                                    <div className="box-face-status-available-actions">
                                        {AvailableActions && AvailableActions.map(({cp, icon, title, type}) => 
                                            <AvailableAction key={title} cp={cp} icon={icon} title={title} type={type} />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box-face box-face--right"></div>
                    <div className="box-face box-face--left"></div>
                    <div className="box-face box-face--top"></div>
                    <div className="box-face box-face--bottom"></div>
                </div>
                <button className="modal-box-container-button" onClick={handleRight}><CaretRight size={'1.2rem'}/></button>
            </div>
    </>
  )
}

export default ModalBox;