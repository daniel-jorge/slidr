import React from 'react';

import { Font } from './EightBitsFont';

interface SvgTextProps {
  color?: string;
  size?: string;
  text: string;
}
const Text: React.FC<SvgTextProps> = ({ color, size, text }) => {
  let charArray = [];
  for (let i = 0; i < text.length; i++) {
    charArray.push(text.charAt(i));
  }
  let x = 0;
  return (
    <span>
      {charArray.map(c => {
        // const Comp = Font[c.toLowerCase()];
        x = -10;
        // return Comp ? <Comp size={size} color={color} transform={`translate(${x},0)`} /> : null;
        return null;
      })}
    </span>
  );
};

export default Text;
