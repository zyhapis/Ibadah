import Lottie from 'lottie-web';
import animationData from './Alquran2.json';
import { useEffect } from 'react';

const Alquran = ({ container }) => {
  useEffect(() => {
    const anim = Lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData
    });

    return () => {
      anim.destroy();
    };
  }, [container]);

  return (
    <div ref={container} style={{ width: '500px', height: '300px' }}></div>
  );
};

export default Alquran;
