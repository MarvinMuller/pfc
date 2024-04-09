function getNotationHands(notation) {
  const NOTATION_HANDS = [];

  if (notation === '') return NOTATION_HANDS;
  if (notation === 'ALL') {
    const FLAT_ST_HANDS = STARTING_HANDS.flat();
    const PREFIXED_ST_HANDS = FLAT_ST_HANDS.map(hand => 'h' + hand);
    return PREFIXED_ST_HANDS;
  }

  notation = notation.replace(/\s/g, '');

  notation.split(',').forEach(hand => {
    const [CARD_1, CARD_2, SUIT] = hand;
    let rank1 = PLAYING_CARDS.indexOf(CARD_1);
    let rank2 = PLAYING_CARDS.indexOf(CARD_2);

    if (SUIT === 'o') [rank1, rank2] = [rank2, rank1];

    const PUSH_HAND = (r1, r2) => NOTATION_HANDS.push('h' + STARTING_HANDS[r1][r2]);

    if (hand.includes('+')) {
      if (SUIT === 's') {
        for (let r = rank2; r > rank1; r--) PUSH_HAND(rank1, r);
      } else if (SUIT === 'o') {
        for (let r = rank1; r > rank2; r--) PUSH_HAND(r, rank2);
      } else {
        for (let r = rank1; r >= 0; r--) PUSH_HAND(r, r);
      }
    } else {
      PUSH_HAND(rank1, rank2);
    }
  });

  return NOTATION_HANDS;
}

function applyClassToHands(classToAdd, notation) {
  const NOTATION_HANDS = getNotationHands(notation);

  NOTATION_HANDS.forEach(id => {
    const button = document.getElementById(id);
    if (button) {
      button.classList.add(classToAdd);
    }
  });
}

function clearButtonClasses(div) {
  const buttons = div.querySelectorAll('button');
  buttons.forEach(button => {
    button.classList = '';
  });
}

function updateHands() {
  clearButtonClasses(HAND_BUTTONS_DIV);

  const [HERO, VILLAIN] = gameSpot.split(' x ');
  const ACTIONS = CHARTS[gameMode][tableSize][stackSize][HERO];

  if (ACTIONS) {
    const OPPONENT = ACTIONS[VILLAIN];

    OPPONENT ?
      Object.entries(OPPONENT).forEach(([ACTION_NAME, HAND_RANGE]) => applyClassToHands(ACTION_NAME, HAND_RANGE)) :
      Object.entries(ACTIONS).forEach(([ACTION_NAME, HAND_RANGE]) => applyClassToHands(ACTION_NAME, HAND_RANGE));
  }
}