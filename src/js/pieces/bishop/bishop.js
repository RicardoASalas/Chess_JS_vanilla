import Piece from '../Piece.js';

class Bishop extends Piece {
    #type = 'bishop';
    #limitCells = 7;
    #moves = ["x"];
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

const createBishop = (pieceColor, orCoords) => {
    const {
        type,
        moves,
        limitCells,
        color,
        originCoords
    } = new Bishop(pieceColor, orCoords);

    return  {
        type,
        moves,
        limitCells,
        color,
        originCoords
    }
}

export { createBishop };