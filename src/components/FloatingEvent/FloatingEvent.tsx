import React, { ReactElement, useState, useEffect, ReactNode, Children, cloneElement } from 'react';
import classes from './styles.module.css';

interface FloatingMessageProps {}

export const FloatingMessage: React.FC<FloatingMessageProps> = ({ children }) => {
  return <span>{children}</span>;
};

type FloatingEvents = { [key: string]: ReactElement };

interface FloatingMessagesProps {
  messages: FloatingEvents;
}

const FloatingMessages: React.FC<FloatingMessagesProps> = ({ messages: messagesProp }) => {
  const [messages, setMessages] = useState<ReactNode[]>([]);
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      console.log('event.char', event);
      if (messagesProp[event.key]) {
        setMessages(state => [...state, cloneElement(messagesProp[event.key], { key: event.key })]);
      }
    };
    document.addEventListener('keydown', handler);
    return () => {
      document.removeEventListener('keydown', handler);
    };
  }, [messages, messagesProp]);
  return <div className={classes.root}>{messages}</div>;
};

export default FloatingMessages;
