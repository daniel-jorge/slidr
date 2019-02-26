import React from 'react';

import { Font } from './EightBitsFont';
import { useTheme } from '../Theme';

interface SvgCharProps {
  color?: string;
  outlineColor?: string;
  shadowColor?: string;
  value: string;
  xOffset?: number;
  yOffset?: number;
}

export const Char: React.FC<SvgCharProps> = ({ value, color, outlineColor, shadowColor, xOffset, yOffset }) => {
  const desc = Font.characters[value.toLowerCase()];
  return (
    <g transform={`translate(${xOffset},${yOffset})`}>
      {/* {React.cloneElement(desc.shadow, { fill: shadowColor || Font.shadowColor })} */}
      {React.cloneElement(desc.outline, { fill: outlineColor || Font.outlineColor })}
      {React.cloneElement(desc.body, { fill: color || desc.color || Font.color })}
    </g>
  );
};
Char.defaultProps = {
  xOffset: 0,
  yOffset: 0,
};

interface SvgIconProps {
  char: string;
  color?: string;
  outlineColor?: string;
  shadowColor?: string;
  size?: string;
}

const SvgIcon: React.FC<SvgIconProps> = ({ color, outlineColor, shadowColor, size, char }) => {
  const desc = Font.characters[char];
  const width = desc.width ? desc.width : Font.width;
  const theme = useTheme();
  return (
    <svg className={theme[`icon_size_${size}`]} viewBox={`0 0 ${width} ${Font.height}`}>
      {/* {React.cloneElement(desc.shadow, { fill: shadowColor || Font.shadowColor })} */}
      {React.cloneElement(desc.outline, { fill: outlineColor || Font.outlineColor })}
      {React.cloneElement(desc.body, { fill: color || desc.color || Font.color })}
    </svg>
  );
};
SvgIcon.defaultProps = {
  size: 'default',
};

export default React.memo(SvgIcon);
