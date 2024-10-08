const STACK_BUTTONS = document.querySelectorAll('#setupDiv .stackBtn');
const TABLE_SIZE_BUTTON = document.getElementById('tableSizeBtn');
const GAME_MODE_BUTTON = document.getElementById('gameModeBtn');

const HAND_BUTTONS_DIV = document.getElementById('handsDiv');

const SPOT_BUTTONS_DIV = document.getElementById('spotDiv');
const SPOT_BUTTONS = document.querySelectorAll('#spotDiv button');

const NORMAL_LEGEND = document.getElementById('normalGame');
const PUSH_LEGEND = document.getElementById('pushGame');

let stackSize = 100, tableSize = 9, gameMode = 'MTT', gameSpot = '';

const PLAYING_CARDS = 'AKQJT98765432'.split('');
const CARDS_SUIT = 'so'.split('');
const STARTING_HANDS = PLAYING_CARDS.map((card1, row) => {
  return PLAYING_CARDS.map((card2, col) => {
    if (row === col) return card1 + card2;
    return row < col ? card1 + card2 + CARDS_SUIT[0] : card2 + card1 + CARDS_SUIT[1];
  });
});

STACK_BUTTONS.forEach(button => {
  button.addEventListener('click', () => {
    STACK_BUTTONS.forEach(button => {
      button.classList.remove('selectedStack');
    });
    button.classList.add('selectedStack');
    stackSize = parseInt(button.innerText.replace(/\D/g, ''), 10);

    if (stackSize === 20) {
      NORMAL_LEGEND.setAttribute('hidden','');
      PUSH_LEGEND.removeAttribute('hidden');
    } else {
      PUSH_LEGEND.setAttribute('hidden','');
      NORMAL_LEGEND.removeAttribute('hidden');
    }
  });
});

TABLE_SIZE_BUTTON.addEventListener('click', () => {
  clearButtonClasses(SPOT_BUTTONS_DIV);
  gameSpot = '';

  tableSize = tableSize !== 6 ? 6 : 9 ;
  TABLE_SIZE_BUTTON.innerText = tableSize + 'H';

  SPOT_BUTTONS.forEach(button => {
    (tableSize === 6 && ['UTG', 'EP', 'MP'].includes(button.innerText)) ? button.setAttribute('hidden', '') : button.removeAttribute('hidden');
  });
});

GAME_MODE_BUTTON.addEventListener('click', () => {
  clearButtonClasses(SPOT_BUTTONS_DIV);
  gameSpot = '';

  gameMode = gameMode !== 'CASH' ? 'CASH' : 'MTT';

  GAME_MODE_BUTTON.innerText = gameMode;
});

STARTING_HANDS.forEach(startingHand => {
  startingHand.forEach(hand => {
    const BUTTON = document.createElement('button');
    BUTTON.textContent = hand;
    BUTTON.id = 'h' + hand;
    HAND_BUTTONS_DIV.appendChild(BUTTON);
  });
});

SPOT_BUTTONS.forEach(positionBtn => {
  positionBtn.setAttribute('draggable', true);
  positionBtn.addEventListener('click', () => {
    clearButtonClasses(SPOT_BUTTONS_DIV);
    positionBtn.classList.add('hero');
    gameSpot = positionBtn.innerText;
    updateHands();
  });
  positionBtn.addEventListener('dragstart', dragStart);
  positionBtn.addEventListener('dragover', dragOver);
  positionBtn.addEventListener('drop', drop);
});

function dragStart(event) {
  clearButtonClasses(SPOT_BUTTONS_DIV);
  event.dataTransfer.effectAllowed = 'move';
  event.dataTransfer.setData('text/plain', event.target.textContent);
  event.target.classList.add('hero');
}

function dragOver(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();

  const DRAGGED_TEXT = event.dataTransfer.getData('text/plain');
  const TARGET_TEXT = event.target.closest('button').innerText;

  clearButtonClasses(SPOT_BUTTONS_DIV);

  SPOT_BUTTONS.forEach(button => {
    button.innerText === DRAGGED_TEXT ? button.classList.add('hero') :
      button.innerText === TARGET_TEXT && DRAGGED_TEXT !== TARGET_TEXT ? button.classList.add('villain') : 
      null;
  });

  gameSpot = DRAGGED_TEXT !== TARGET_TEXT ? DRAGGED_TEXT + ' x ' + TARGET_TEXT : DRAGGED_TEXT;

  updateHands();
}
