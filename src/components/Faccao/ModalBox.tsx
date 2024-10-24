import React from 'react';
import './ModalBox.css';
import { CubeFocus } from '@phosphor-icons/react';
import LogoShockHounds from '../../assets/icons/LogoShockHounds';
import ShieldIcon from '../../assets/icons/ShieldIcon';

const ModalBox = () => {

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
                            <div className="box-face-image-char"></div>
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