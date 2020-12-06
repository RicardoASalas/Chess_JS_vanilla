import Piece from '../Piece.js';

class Queen extends Piece {
    #type = 'queen';
    #limitCells = 7;
    #moves = ['*'];

    constructor(color, originCoords) {
        super()

        this.type = this.#type;
        this.color = color;
        this.limitCells = this.#limitCells;
        this.moves =  this.#moves;
        this.originCoords = originCoords;
        this.currentCoords = originCoords;
    }
}

const createQueen = (pieceColor, orCoords) => {
    const {
        type,
        moves,
        limitCells,
        color,
        originCoords
    } = new Queen(pieceColor, orCoords);

    return  {
        type,
        moves,
        limitCells,
        color,
        originCoords
    }
}

export { createQueen };