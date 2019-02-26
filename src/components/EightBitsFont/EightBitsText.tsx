import React from 'react';

import { Font } from './EightBitsFont';
import { useTheme } from '../Theme';

interface SvgCharProps {
  color?: string;
  outline?: boolean;
  outlineColor?: string;
  shadow?: boolean;
  shadowColor?: string;
  value: string;
  xOffset?: number;
  yOffset?: number;
}

export const Char: React.FC<SvgCharProps> = ({
  value,
  color,
  outline,
  outlineColor,
  shadow,
  shadowColor,
  xOffset,
  yOffset,
}) => {
  const desc = Font.characters[value.toLowerCase()];
  const isOutlined = typeof outline === 'boolean' ? outline : Font.outline;
  const isShadowed = typeof shadow === 'boolean' ? shadow : Font.shadow;
  return (
    <g transform={`translate(${xOffset},${yOffset})`}>
      {isOutlined &&
        React.cloneElement(desc.outline, {
          fill: outlineColor || Font.outlineColor,
          filter: isShadowed ? 'url(#shadow)' : undefined,
        })}
      {React.cloneElement(desc.body, {
        fill: color || desc.color || Font.color,
      })}
    </g>
  );
};
Char.defaultProps = {
  xOffset: 0,
  yOffset: 0,
};

interface SvgTextProps {
  children: string;
  color?: string;
  outline?: boolean;
  shadow?: boolean;
  size?: string;
  // text: string;s
}
const Text: React.FC<SvgTextProps> = ({ children, color, outline, shadow, size }) => {
  let charArray = [];
  let width = 0;
  for (let i = 0; i < children.length; i++) {
    const char = children.charAt(i).toLowerCase();
    console.log('char', char, char.length);
    const desc = Font.characters[char];
    console.log('desc', desc);
    if (desc) {
      charArray.push(char);
      width += desc.width ? desc.width : Font.width;
      width += desc.spacing ? desc.spacing : Font.spacing;
    }
  }
  let x = 0;
  const hasShadow = typeof shadow === 'boolean' ? shadow : Font.shadow;

  const theme = useTheme();
  return (
    <svg style={{ overflow: 'visible' }} className={theme[`icon_size_${size}`]} viewBox={`0 0 ${width} ${Font.height}`}>
      <defs>
        <filter id="shadow" x="0" y="0" width="200%" height="200%">
          <feOffset result="offOut" in="SourceGraphic" dx={Font.shadowOffsetX} dy={Font.shadowOffsetY} />
          <feBlend in="SourceGraphic" in2="offOut" mode="normal" />
        </filter>
      </defs>
      {charArray.map((c, key) => {
        const desc = Font.characters[c.toLowerCase()];
        const group = (
          <Char key={key} value={c} color={color} xOffset={x} shadow={hasShadow} outline={outline} />
          // <g key={key} transform={`translate(${x},0)`}>
          //   {React.cloneElement(desc.shadow, { fill: Font.shadowColor })}
          //   {React.cloneElement(desc.outline, { fill: Font.outlineColor })}
          //   {React.cloneElement(desc.body, { fill: Font.color })}
          // </g>
        );
        x += desc.width ? desc.width : Font.width;
        x += desc.spacing ? desc.spacing : Font.spacing;
        return group;
      })}
    </svg>
  );
};
Text.defaultProps = {
  size: 'default',
};

export default React.memo(Text);
