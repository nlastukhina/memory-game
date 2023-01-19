import React, { FC, useEffect, useState } from 'react';
import './styles.css';
import { Modal } from '../modal';
import { Card } from '../../types';
import { cards } from './data';
import { Counter } from './counter';
import { CardItem } from './card';

export const Playground: FC = () => {
  const [cardsArray, setCardsArray] = useState<Card[]>([]);
  const [openCards, setOpenCards] = useState<Card[]>([]);
  const [newGame, setNewGame] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [gameWin, setGameWin] = useState(false);
  const [countMove, setCountMove] = useState(0);
  const [openedCards, setOpenedCard] = useState(0);
  const [allDisabled, setAllDisabled] = useState(false);
  const moves = 40;
  const cardsTotal = 16;

  const modalTitle = gameWin ? 'Ура, Вы выиграли!' : 'Увы, вы проиграли';
  const modalContent = gameWin ? `это заняло ${countMove} ходов.` : `У Вас кончились ходы`;

  function shuffleArray(array: any) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    array.map((card: Card) => (card.opened = false));

    return array;
  }

  useEffect(() => {
    const shuffledArray = shuffleArray(cards);
    setCardsArray(shuffledArray);
  }, []);

  useEffect(() => {
    if (openCards.length === 2) {
      setAllDisabled(true);
      window.setTimeout(() => {
        if (openCards[0].type === openCards[1].type && openCards[0].id != openCards[1].id) {
          openCards[0].opened = true;
          openCards[1].opened = true;
          setOpenedCard(openedCards + 2);
        }

        setOpenCards([]);
        setCountMove(countMove + 1);
        setAllDisabled(false);
      }, 1000);
    }
  }, [openCards]);

  useEffect(() => {
    if (newGame) {
      const shuffledArray = shuffleArray(cards);
      setOpenCards([]);
      setOpenedCard(0);
      setCardsArray(shuffledArray);
      setCountMove(0);
      setGameFinished(false);
      setGameWin(false);
      setAllDisabled(false);
    }
  }, [newGame]);

  useEffect(() => {
    if (openedCards === cardsTotal) {
      setGameFinished(true);
      setGameWin(true);
    } else if (countMove >= moves) {
      setGameFinished(true);
      setAllDisabled(true);
    }
  }, [countMove, openedCards]);

  const flipCard = (card: Card): void => {
    setOpenCards((prev) => [...prev, card]);
  };

  function checkIsFlipped(card: Card): boolean {
    return openCards.includes(card);
  }

  return (
    <>
      <div className="playground">
        <Counter label="Сделано Ходов" count={countMove} />
        <div className="play-board">
          {cardsArray?.map((card) => {
            return (
              <CardItem
                key={card.id}
                card={card}
                onClick={() => flipCard(card)}
                opened={card.opened}
                flipped={checkIsFlipped(card)}
                disabled={checkIsFlipped(card) || allDisabled}
                fakeCard={gameWin}
              />
            );
          })}
        </div>
        <Counter label="Осталось попыток" count={moves - countMove} />
        {gameFinished && <Modal title={modalTitle} content={modalContent} onClick={() => setNewGame(!newGame)} />}
      </div>
    </>
  );
};
