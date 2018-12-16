import React from 'react';
import './anims.css';
import SoftGlow from './SoftGlowEffect';

interface EightBitStarProps {
  color?: string;
  size?: number;
  glowColor?: string;
  timing?: number;
}

const EightBitStar: React.SFC<EightBitStarProps> = ({ color, glowColor, size, timing }) => {
  return (
    <svg width={size} height={size} viewBox="-10 -10 50 50">
      <defs>
        <SoftGlow id="sofGlow" />
      </defs>
      <g filter="url(#sofGlow)" fill={color}>
        <rect x="10" y="0" width="10" height="10" />
        <rect x="0" y="10" width="10" height="10" />
        <rect x="20" y="10" width="10" height="10" />
        <rect x="10" y="20" width="10" height="10" />
      </g>
    </svg>
  );
};

EightBitStar.defaultProps = {
  color: 'rgba(255,255,255,.7)',
  size: 3 * 16,
  glowColor: 'rgba(255,255,255,.5)',
  timing: 16,
};

export default EightBitStar;
