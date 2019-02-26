import React from 'react';
import cn from 'classnames';

import { useSlidrState, useSlidrActions } from '../Slider/context';
import styles from './styles.module.css';

interface NavigationButtonProps {
  disabled?: boolean;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ children, className, disabled, onClick }) => {
  const classes = cn(className, styles.button);
  return (
    <button className={classes} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

interface NavigationCross {
  previous: React.ReactNode;
  next: React.ReactNode;
  up: React.ReactNode;
  down: React.ReactNode;
}

const NavigationCross: React.FC<NavigationCross> = ({ next, previous, up, down }) => {
  const state = useSlidrState();
  const dispatch = useSlidrActions();
  const hasPreviousSlide = state.slideIndex !== 0;
  const hasNextSlide = state.slideIndex < state.slideCount - 1;
  return (
    <div className={styles.root}>
      <NavigationButton
        className={styles.previous}
        disabled={!hasPreviousSlide}
        onClick={() => dispatch({ type: 'PREVIOUS_SLIDE' })}
      >
        {previous}
      </NavigationButton>
      <NavigationButton
        className={styles.next}
        disabled={!hasNextSlide}
        onClick={() => dispatch({ type: 'NEXT_SLIDE' })}
      >
        {next}
      </NavigationButton>
      <NavigationButton className={styles.up}>{up}</NavigationButton>
      <NavigationButton className={styles.down}>{down}</NavigationButton>
    </div>
  );
};

export default NavigationCross;
