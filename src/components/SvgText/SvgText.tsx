import React from 'react';

import Font from './Font';

const charset = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const mapping = () => {
  // const;
};

interface SvgTextProps {
  text: string;
}

const SvgText: React.FC<SvgTextProps> = ({ text }) => {
  //
  let charArray = [];
  for (let i = 0; i < text.length; i++) {
    charArray.push(text.charAt(i));
  }
  return (
    <>
      {charArray.map(letter => {
        const letterIndex = charset.indexOf(letter);
        if (letterIndex === -1) return null;
        const x1 = letterIndex * 100 + 10;
        const y1 = 0;
        const x2 = 90;
        const y2 = 100;
        return <Font viewBox={`${x1} ${y1} ${x2} ${y2}`} />;
      })}
    </>
  );
};

export default SvgText;
