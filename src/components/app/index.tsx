import React, { FC } from 'react';
import './styles.css';
import { Header } from '../header';
import { Playground } from '../playground';

export const App: FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <Playground />
    </div>
  );
};
