import React, { useEffect, useState } from 'react';
import { Link, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import './App.css'; // Import your CSS file

const ScrollArrows = () => {
  const [showArrows, setShowArrows] = useState(false);

  useEffect(() => {
    Events.scrollEvent.register('begin', function () {
      console.log('begin', arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log('end', arguments);
    });

    scrollSpy.update();

    const handleScroll = () => {
      setShowArrows(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className={`scroll-indicator ${showArrows ? 'visible' : ''}`} onClick={scrollToTop}>
      <div className="arrow-down"></div>
      <div className="arrow-down"></div>
    </div>
  );
};

export default ScrollArrows;