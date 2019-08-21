import './style.scss';

const NO_OF_COLUMNS = 18;
const NO_OF_ROWS = 5;
const COLUMN_WIDTH = 54;
const ROW_HEIGHT = 44;
const CELL_START_COL = 3;
const CELL_WIDTH = 3;

// Layout

const container = document.querySelector('.container');
container.style.width = `${COLUMN_WIDTH * NO_OF_COLUMNS}px`;

const bg = document.querySelector('.bg');
bg.style[
  'grid-template-columns'
] = `repeat(${NO_OF_COLUMNS}, ${COLUMN_WIDTH}px)`;
new Array(NO_OF_COLUMNS).fill().forEach(() => {
  const col = document.createElement('div');
  col.classList.add('col');
  bg.appendChild(col);
});

const timeline = document.querySelector('.timeline');
timeline.style['grid-template-rows'] = `repeat(${NO_OF_ROWS}, ${ROW_HEIGHT}px)`;

const row = document.querySelector('.row');
row.style[
  'grid-template-columns'
] = `repeat(${NO_OF_COLUMNS}, ${COLUMN_WIDTH}px)`;

const cell = document.querySelector('.cell');
cell.style['grid-column-start'] = CELL_START_COL;
cell.style['grid-column-end'] = CELL_START_COL + CELL_WIDTH;

// Write your code from here
//
