import React, { useEffect, useState } from 'react';
import './CanvasRevealEffect.css'; // Assuming you have a CSS file for styles

const CanvasRevealEffect = ({ animationSpeed, containerClassName, colors, dotSize }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, animationSpeed);
    return () => clearTimeout(timer);
  }, [animationSpeed]);

  return (
    <div className={containerClassName}>
      {/* Render the effect based on the props */}
      <span 
        className={`dot ${isVisible ? 'fade-in' : ''}`} 
        style={{ width: dotSize, height: dotSize, backgroundColor: colors[0] }} 
      />
    </div>
  );
};

export default CanvasRevealEffect; 