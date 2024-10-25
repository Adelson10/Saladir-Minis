import React from 'react';
import './ModalBox.css';
import { CubeFocus } from '@phosphor-icons/react';
import LogoShockHounds from '../../assets/icons/LogoShockHounds';
import ShieldIcon from '../../assets/icons/ShieldIcon';
import BgModalBox from '../../assets/icons/BgModalBox';
import IconM from '../../assets/icons/IconM';
import IconT from '../../assets/icons/IconT';
import IconSV from '../../assets/icons/IconSV';
import IconW from '../../assets/icons/IconW';
import IconLD from '../../assets/icons/IconLD';
import IconOC from '../../assets/icons/IconOC';
import AvailableAction from '../../assets/icons/AvailableActions';

interface PropsModalBox {
    image: string;
    name: string;
    faction: string;
    iconCompany: string;
    statusPosition: string;
    status: {
        m: string;
        t: string;
        sv: string;
        w: string;
        ld: string;
        oc: string;
    };
    tags: string[],
    AvailableActions: AvailableActionsProps[]
}

interface AvailableActionsProps {
    cp: string;
    type: string;
    icon: string;
    title: string;
}

const ModalBox = ({image, name, iconCompany, statusPosition, status, tags, AvailableActions }: PropsModalBox) => {

    React.useEffect(() => {
        const box = document.querySelector('.box');
        const radioGroup = document.querySelector('.radio-group');
        let currentClass = '';

        function changeSide() {
            if(radioGroup) {
                const checkedRadio = radioGroup.querySelector<HTMLInputElement>(':checked');
                if(checkedRadio) {
                    const showClass = 'show-' + checkedRadio.value;
                    if(box) {
                        if ( currentClass) {
                            box.classList.remove( currentClass );
                        }
                        box.classList.add( showClass );
                    }
                    currentClass = showClass;
                }
            }
        }
        changeSide();

        radioGroup.addEventListener( 'change', changeSide );
    }, []);
  return (
    <>
            <div className='modal-box-container'>
                <div className="box">
                    <div className="box-face box-face--front"></div>
                    <div className="box-face box-face--back">
                        <div className="box-face-image-char-container">
                            <button className="box-face-image-active-3d"><CubeFocus /></button>
                            <div className="box-face-image-char" style={{backgroundImage: image}}></div>
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
                                            <h5>{tag}</h5>
                                        )}
                                    </div>
                                    <div className="box-face-status-available-actions">
                                        {AvailableActions.map(({cp, icon, title, type}) => 
                                            <AvailableAction cp={cp} icon={icon} title={title} type={type} />
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
            <p className="radio-group">
            <label>
                <input type="radio" name="rotate-cube-side" value="0" /> front
            </label>
            <label>
                <input type="radio" name="rotate-cube-side" value="1" /> right
            </label>
            <label>
                <input type="radio" name="rotate-cube-side" value="2" /> back
            </label>
            <label>
                <input type="radio" name="rotate-cube-side" value="3" /> left
            </label>
            </p>
    </>
  )
}

export default ModalBox;