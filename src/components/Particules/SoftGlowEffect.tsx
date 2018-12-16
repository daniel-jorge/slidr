import React from 'react';
import './anims.css';

interface SoftGlowProps {
  id: string;
  glowColor?: string;
}

const SoftGlow: React.SFC<SoftGlowProps> = ({ id, glowColor }) => {
  return (
    <filter id={id} height="300%" width="300%" x="-75%" y="-75%">
      <feMorphology operator="dilate" radius="2" in="SourceAlpha" result="thicken" />
      <feGaussianBlur in="thicken" stdDeviation="3" result="blurred" />
      <feFlood floodColor={glowColor} result="glowColor" />
      <feComposite in="glowColor" in2="blurred" operator="in" result="softGlow_colored" />
      <feMerge>
        <feMergeNode in="softGlow_colored" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  );
};

SoftGlow.defaultProps = {
  glowColor: 'rgba(255,255,255,.7)',
};

export default SoftGlow;
