import React, { useEffect, useRef, useState } from 'react';

const ModalImage3d = ({ style, images }: { style: string; images: string[] }) => {
    const boxRef = useRef<HTMLImageElement>(null);
    const [dist, setDist] = useState<DistProps>({
      finalPosition: 0,
      startX: 0,
      movement: 0,
      sideNow: 0,
    });
    const boxContainerRef = useRef<HTMLDivElement>(null);
  
    function handleStart(event: React.TouchEvent | React.MouseEvent) {
      const startX =
        'touches' in event
          ? event.changedTouches[0].clientX
          : (event as React.MouseEvent).clientX;
      setDist({ ...dist, startX });
      
      // Adiciona os eventos de movimento e término ao document para cobrir toda a área da tela
      if (!(event as React.TouchEvent).touches) {
        document.addEventListener('mousemove', handleMove as EventListener);
        document.addEventListener('mouseup', handleEnd as EventListener);
      }
    }
  
    function handleMove(event: TouchEvent | MouseEvent) {
      const box = boxContainerRef.current?.getBoundingClientRect();
      const pointerPosition =
        'touches' in event
          ? event.changedTouches[0].clientX
          : (event as MouseEvent).clientX;
  
      // Limita o movimento ao tamanho da área da imagem
      if (box && (pointerPosition < box.left || pointerPosition > box.right)) return;
  
      const finalPosition = updatePosition(pointerPosition);
      if(finalPosition)
      moveImage(Math.round(finalPosition));
    }
  
    function moveImage(distX: number) {
      const newIndex = Math.abs(distX) % images.length;
      setDist((prevDist) => ({
        ...prevDist,
        movePosition: distX,
        sideNow: newIndex,
      }));
    }
  
    function updatePosition(clientX: number) {
      const movement = (dist.startX - clientX) * 0.04;
      if(dist.finalPosition)
      return dist.finalPosition - movement;
    }
  
    function handleEnd() {
      document.removeEventListener('mousemove', handleMove as EventListener);
      document.removeEventListener('mouseup', handleEnd as EventListener);
      // Mantém a última posição alcançada
      setDist((prevDist) => ({ ...prevDist, finalPosition: prevDist.movePosition ?? 0 }));
    }
  
    // Limpa eventos ao desmontar
    useEffect(() => {
      return () => {
        document.removeEventListener('mousemove', handleMove as EventListener);
        document.removeEventListener('mouseup', handleEnd as EventListener);
      };
    }, []);
  
    return (
      <div ref={boxContainerRef} className='box-face-image-char-container'>
        {images.map((image, index) => (
          <img
            ref={boxRef}
            key={index}
            src={image}
            style={{ display: dist.sideNow === index ? 'block' : 'none' }}
            className={style}
            onTouchStart={handleStart}
            onTouchMove={(e) => handleMove(e.nativeEvent as TouchEvent)}
            onTouchEnd={handleEnd}
            onMouseDown={handleStart}
          />
        ))}
      </div>
    );
  };
  
  export default ModalImage3d;