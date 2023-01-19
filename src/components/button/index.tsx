import React, { FC } from 'react';
import './styles.css';

interface Props {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

export const Button: FC<Props> = ({ onClick, children }) => {
  return (
    <button type="button" onClick={onClick} className="btn">
      {children}
    </button>
  );
};
