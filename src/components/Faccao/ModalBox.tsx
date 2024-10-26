import React, { useRef, useState } from 'react';
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
import './ModalBox.css';

interface DistProps {
    finalPosition?: number;
    startX: number;
    movement: number;
    movePosition?: number;
    sideNow: number;
}

const ModalBox = ({ image, tags, AvailableActions }: PropsModalBox) => {
    const imagem3d = useRef<HTMLDivElement>(null);
    const Box = useRef<HTMLDivElement>(null);
    const BoxContainer = useRef<HTMLDivElement>(null);
    const [activeImage3d, setActiveImage3d] = useState(false);
    const [dist, setDist] = useState<DistProps>({ finalPosition: 0, startX: 0, movement: 0, sideNow: 0 });

    const handleClick = () => {
        setActiveImage3d((active) => !active);
    };

    function handleLeft() {
        if(!activeImage3d) {
            let index = dist.sideNow + 1;
            const zTranslate = (index % 2 === 0) ? '-37px' : '-140px';        
            Box.current!.style.transform = `translateZ(${zTranslate}) rotateY(${90*index}deg)`;
            setDist({...dist, sideNow: index});
        }
    }

    function handleRight() {
        if(!activeImage3d) {  
            let index = dist.sideNow - 1;
            const zTranslate = (index % 2 === 0) ? '-37px' : '-140px';        
            Box.current!.style.transform = `translateZ(${zTranslate}) rotateY(${90*index}deg)`;
            setDist({...dist, sideNow: index});
        }
    }

    const handleStart = (event: React.TouchEvent) => {        
        const startX = event.touches[0].clientX;
        setDist((prev) => ({ ...prev, startX }));            
    };

    const handleMove = (event: React.TouchEvent) => {
        if (!activeImage3d) {
            const box = BoxContainer.current?.getBoundingClientRect();
            if (!box) return;
            
            const pointerPosition = event.touches[0].clientX;            
            if (pointerPosition < box.left || pointerPosition > box.right) return;            
            const movement = (dist.startX - pointerPosition) * 1.6;
            if (movement < 0 && dist.sideNow === 0) return;

            if (dist.finalPosition !== undefined) {
                const finalPosition = dist.finalPosition - movement;
                updateBoxRotation(finalPosition, movement);
            }
        }
    };

    const updateBoxRotation = (distX: number, movement: number) => {
        const index = dist.sideNow + 1;
        const rotation = distX * 0.2 + dist.sideNow * -90;
        
        const zTranslate = (index % 2 === 0) ? '-37px' : '-140px';

        if (rotation > -90 * index + 10 && rotation < 0) {
            Box.current!.style.transform = `translateZ(${zTranslate}) rotateY(${rotation}deg)`;
            setDist((prev) => ({ ...prev, movePosition: rotation, movement }));
        }
    };

    const handleEnd = () => {
        if(!activeImage3d) {
            if (dist.movement) {
                    const isNext = dist.movePosition! < 0 ? dist.movement > 0 : dist.movement < 0;
                    changeBoxSide(isNext);
            }
        }
    };    

    const changeBoxSide = (isNext: boolean) => {
        let index = dist.sideNow;
        if (!isNext && index === 0) return;
        if(dist.finalPosition === dist.movePosition) return;
        
        const newSide = isNext ? index + 1 : index - 1;
        const rotation = newSide * -90;
        const zTranslate = (newSide % 2 === 0) ? '-37px' : '-140px';

        Box.current!.style.transform = `translateZ(${zTranslate}) rotateY(${rotation}deg)`;
        setDist((prev) => ({
            ...prev,
            finalPosition: newSide > 0 ? prev.movePosition : 0,
            sideNow: newSide
        }));
    };

    return (
        <div
            className="modal-box-container"
            ref={BoxContainer}
            onTouchStart={handleStart}
            onTouchMove={handleMove}
            onTouchEnd={handleEnd}
        >
            <button style={{visibility: !imagem3d || dist.sideNow == 0 ? 'hidden' : 'visible' }} className='modal-box-container-button left' onClick={handleLeft}><CaretLeft size={'1.2rem'} weight="fill" /></button>
            <div className="box" ref={Box}>
                <div className="box-face box-face--front"></div>
                <div className="box-face box-face--back">
                    <div className="box-face-image-char-container">
                        <button
                            className="box-face-image-active-3d"
                            onClick={handleClick}
                            style={{ color: activeImage3d ? 'var(--color-three)' : 'white' }}
                        >
                            <CubeFocus />
                        </button>
                        <div className="box-face-image-char" ref={imagem3d}></div>
                        <div className="box-face-char-degrade-container">
                            <div className="box-face-char-status-container">
                                <div className="box-face-char-title-container">
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
                                    <BgModalBox status="M" value="5"><IconM /></BgModalBox>
                                    <BgModalBox status="T" value="5"><IconT /></BgModalBox>
                                    <BgModalBox status="SV" value="2+"><IconSV /></BgModalBox>
                                    <BgModalBox status="W" value="3"><IconW /></BgModalBox>
                                    <BgModalBox status="LD" value="2+"><IconLD /></BgModalBox>
                                    <BgModalBox status="OC" value="1"><IconOC /></BgModalBox>
                                </div>
                                <div className="box-face-status-tags">
                                    {tags && tags.map((tag) => <h5 key={tag}>{tag}</h5>)}
                                </div>
                                <div className="box-face-status-available-actions">
                                    {AvailableActions && AvailableActions.map(({ cp, icon, title, type }) => (
                                        <AvailableAction key={title} cp={cp} icon={icon} title={title} type={type} />
                                    ))}
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
            <button style={{visibility: !imagem3d ? 'hidden' : 'visible' }} className='modal-box-container-button right' onClick={handleRight}><CaretRight size={'1.2rem'} weight="fill" /></button>
        </div>
    );
};

export default ModalBox;