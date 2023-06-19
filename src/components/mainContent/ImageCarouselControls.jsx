import React from 'react';
import '../../style/imageCarouselControls.sass';

export const ImageCarouselControls = () => {
  return (
    <nav className="carusel-control">
      <button className="carusel-control__swap-img">
        <span className="carusel-control__arrow"></span>
      </button>
      <div className="carusel-control__queue-wrapper ">
        <span className="carusel-control__queue carusel-control__queue--active"></span>
        <span className="carusel-control__queue"></span>
        <span className="carusel-control__queue"></span>
      </div>
      <button className="carusel-control__swap-img carusel-control__swap-img--next">
        <span className="carusel-control__arrow"></span>
      </button>
    </nav>
  );
};
