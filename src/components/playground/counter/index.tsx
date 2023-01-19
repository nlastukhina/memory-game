import React, { FC } from 'react';
import './styles.css';

interface CounterProps {
  label: string;
  count: number;
}

export const Counter: FC<CounterProps> = ({ label, count }) => {
  return (
    <div className="counter">
      <h3 className="counter-title">{label}</h3>
      <div className="counter-number">{count}</div>
    </div>
  );
};
