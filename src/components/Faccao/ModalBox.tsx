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

interface distProps {
    finalPosition: number | undefined;
    startX: number;
    movement: number;
    movePosition?: number;
    sideNow: number;
}

const ModalBox = ({image, name, iconCompany, statusPosition, status, tags, AvailableActions }: PropsModalBox) => {
    const imagem3d = React.useRef<HTMLDivElement>(null);
    const Box = React.useRef<HTMLDivElement>(null);
    const BoxContainer = React.useRef<HTMLDivElement>(null);
    const [activeImage3d, setActiveImage3d] = React.useState<boolean>(false);
    const [currentClass, SetCurrentClass] = React.useState<string>('');
    const [dist, setDist] = React.useState<distProps>({finalPosition: 0, startX: 0, movement: 0, sideNow: 0});

    React.useEffect(() => {
        const showClass = `show-${dist.sideNow}`;
        
        if ( currentClass ) {                            
            Box.current!.classList.remove(currentClass);
        }
        Box.current!.classList.add(showClass);
        SetCurrentClass(showClass);
    }, [dist.sideNow]);

    function handleClick(): void {
       setActiveImage3d((active) => !active);
    }

    function handleStart(event: TouchEvent): void {        
       setDist({...dist, startX: event.changedTouches[0].clientX});
    }

    function handleMove(event: TouchEvent): void {
        const box = BoxContainer.current?.getBoundingClientRect();
        if(!box) return;        
        const pointerPosition = event.changedTouches[0].clientX;
        if(pointerPosition < box.left || pointerPosition > box.right) return;
        const movement = (dist.startX - pointerPosition) * 1.6;
        if(dist.finalPosition !== undefined) {
            const finalPosition =  dist.finalPosition - movement;        
            onMoveBox(finalPosition, movement);
        }
    }

    function onMoveBox(distX: number, movement: number) {      
        const rotation = distX * 0.2;

        if((dist.sideNow+1) % 2 == 0) {
            console.log('0');
            
            if( rotation < ((-90*(dist.sideNow+1))+10) ) {
                Box.current!.style.transform = `translateZ(-37px) rotateY(${rotation}deg)`;
            }
        } else {  
            console.log('1');
                   
            if( rotation < ((-90*(dist.sideNow+1))+10) ) {
                Box.current!.style.transform = `translateZ(-140px) rotateY(${rotation}deg)`;
            }    
        }     
        setDist({...dist, movePosition: rotation, movement});
    }

    function handleEnd(event: TouchEvent): void {
        changeBoxEnd();
    }

    function changeBoxEnd() { 
        let index = dist.sideNow;
        if ( dist.movePosition > ((index+1) * -90) && ( index+1 ) % 2 != 0) {
            index++;
            if(index > 0) {                                            
                Box.current!.style.transform = `translateZ(-140px) rotateY(-${index*90}deg)`;
            }
        }
        console.log(index);
        setDist({...dist, finalPosition: dist.movePosition, sideNow: index});
    }    

  return (
    <>
            <div className='modal-box-container'
            onTouchStart={handleStart}
            onTouchMove={handleMove}
            onTouchEnd={handleEnd}
            ref={BoxContainer}>
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
            </div>
    </>
  )
}

export default ModalBox;