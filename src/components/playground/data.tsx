import { Card } from '../../types';
import react from '../../assets/images/react.svg';
import gitlab from '../../assets/images/gitlab.svg';
import js from '../../assets/images/js.svg';
import ngiux from '../../assets/images/ngiux.svg';
import redux from '../../assets/images/redux.svg';
import typescript from '../../assets/images/typescript.svg';
import webpack from '../../assets/images/webpack.svg';
import webstorm from '../../assets/images/webstorm.svg';

export const cards: Card[] = [
  { id: 1, type: 'type1', image: react },
  { id: 2, type: 'type1', image: react },
  { id: 3, type: 'type2', image: gitlab },
  { id: 4, type: 'type2', image: gitlab },
  { id: 5, type: 'type3', image: js },
  { id: 6, type: 'type3', image: js },
  { id: 7, type: 'type4', image: ngiux },
  { id: 8, type: 'type4', image: ngiux },
  { id: 9, type: 'type5', image: redux },
  { id: 10, type: 'type5', image: redux },
  { id: 11, type: 'type6', image: typescript },
  { id: 12, type: 'type6', image: typescript },
  { id: 13, type: 'type7', image: webpack },
  { id: 14, type: 'type7', image: webpack },
  { id: 15, type: 'type8', image: webstorm },
  { id: 16, type: 'type8', image: webstorm },
];
