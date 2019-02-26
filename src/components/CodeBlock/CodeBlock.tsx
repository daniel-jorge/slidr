import React, { FunctionComponent, memo } from 'react';

import classes from './CodeBlock.module.css';

import Lowlight from 'react-lowlight';
import typescript from 'highlight.js/lib/languages/typescript';
import 'highlight.js/styles/atom-one-dark.css';

Lowlight.registerLanguage('typescript', typescript);

interface CodeBlockProps {}

const CodeBlock: FunctionComponent<CodeBlockProps> = memo(({ children }) => {
  return <Lowlight className={classes.root} language="typescript" value={children} />;
});

export default CodeBlock;
