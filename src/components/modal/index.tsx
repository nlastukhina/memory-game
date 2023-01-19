import React, { FC } from 'react';
import './styles.css';
import { Button } from '../button';

interface Props {
  title: string;
  content: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

export const Modal: FC<Props> = ({ title, content, onClick }) => {
  return (
    <div className="modal">
      <h3 className="modal-header">{title}</h3>
      <div className="modal-content">{content}</div>
      <Button onClick={onClick}>Cыграть Eще</Button>
    </div>
  );
};
