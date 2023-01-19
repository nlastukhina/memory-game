import React, { FC } from 'react';
import './styles.css';
import clsx from 'clsx';
import front from '../../../assets/images/front.svg';
import { Card } from '../../../types';

interface Props {
  card: Card;
  opened?: boolean;
  flipped?: boolean;
  disabled?: boolean;
  fakeCard?: boolean;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

export const CardItem: FC<Props> = ({ card, opened, flipped, disabled, fakeCard, onClick }) => {
  return (
    <>
      {opened && <div className={clsx('card card-opened', { 'card-fake': fakeCard })} />}
      {!opened && (
        <div onClick={onClick} className={clsx('card', { 'is-flipped': flipped }, { 'is-disabled': disabled })}>
          <div className="card-inner">
            <div className="card-face card-front-face">
              <img src={front} alt="" />
            </div>
            <div className="card-face card-back-face">
              <img src={card.image} alt="" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
