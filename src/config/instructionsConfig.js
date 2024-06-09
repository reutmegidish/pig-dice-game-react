const instructionsConfig = [
  {
    key: 'ROLL_DICE',
    message: 'Roll the dice at least once on your turn to accumulate points.',
    iconName: 'roll_dice.png',
    order: 1,
  },
  {
    key: 'ROLL_AGAIN',
    message:
      'You can either roll again or click "hold" to save your current points and end your turn.',
    iconName: 'again.png',
    order: 2,
  },
  {
    key: 'DOUBLE_SIXES',
    message:
      'If you roll double sixes (6-6), you forfeit the points accumulated during that turn, and your turn ends.',
    iconName: 'dice.png',
    order: 3,
  },
  {
    key: 'WIN',
    message:
      'The player who reaches the exact points limit wins. Exceeding the points limit results in a loss.',
    iconName: 'win.png',
    order: 4,
  },
]

export default instructionsConfig
