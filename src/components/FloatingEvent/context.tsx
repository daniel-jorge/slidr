import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';

interface DispatchFloatingEvent {
  (node: ReactNode): void;
}

const FloatingEventDispatchContext = createContext<DispatchFloatingEvent>(() => {});
const FloatingEventStateContext = createContext<ReactNode[]>([]);

export const FloatingEventProvider: React.FC = ({ children }) => {
  const [nodes, setNodes] = useState<ReactNode[]>([]);
  const addNode = useCallback(
    (node: ReactNode) => {
      setNodes(state => [...state, node]);
    },
    [setNodes],
  );
  return (
    <FloatingEventDispatchContext.Provider value={addNode}>
      <FloatingEventStateContext.Provider value={nodes}>{children}</FloatingEventStateContext.Provider>
    </FloatingEventDispatchContext.Provider>
  );
};

export const useFloatingEventState = () => {
  return useContext(FloatingEventStateContext);
};

export const useDispathFloatingEvent = () => {
  return useContext(FloatingEventDispatchContext);
};
