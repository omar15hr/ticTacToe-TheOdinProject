const Gameboard = (() => {
  let board = ["", "", "", "", "", "", "", "", "", ""];

  return {
    getBoard: () => board,

    updateCell: (index, marker) => {
      if (board[index] === "") {
        board[index] = marker;
      }
    },

    resetBoard: () => {
      board = ["", "", "", "", "", "", "", "", "", ""];
    },
  }
})

const Player = ((name, symbol) => {
  return {
    name,
    symbol,
  };
})

const player1 = Player("Jugador 1", "X");
const player2 = Player("Jugador 2", "O");


