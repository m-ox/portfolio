import React from 'react';
import './LoaderDots.scss';
import { useStore } from '../../store/store';

const LoaderDots: React.FC = () => {
  const isMobile = useStore(s => s.isMobile);

  return(
    <div style={{ width: isMobile ? "100%" : "25rem" }} className="loader-dots">
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
};

export default LoaderDots;
