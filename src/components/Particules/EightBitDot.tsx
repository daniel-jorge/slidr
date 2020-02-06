import React from 'react';
import './anims.css';
import SoftGlow from './SoftGlowEffect';

interface EightBitDotProps {
  color?: string;
  size?: number;
  glowColor?: string;
  style?: React.CSSProperties;
}

const EightBitDot: React.SFC<EightBitDotProps> = ({ color, glowColor, size, style }) => {
  return (
    <svg width={size} height={size} viewBox="-10 -10 30 30" style={style}>
      <defs>
        <SoftGlow id="sofGlow" />
      </defs>
      <g filter="url(#sofGlow)" fill={color}>
        <rect x="0" y="0" width="10" height="10" />
      </g>
    </svg>
  );
};

EightBitDot.defaultProps = {
  color: 'rgba(255,255,255,.7)',
  size: 3 * 16,
  glowColor: 'rgba(255,255,255,.5)',
};

export default EightBitDot;
