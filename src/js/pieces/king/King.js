import Piece from '../Piece.js';

class King extends Piece {
    #type = 'king';
    #limitCells = 1;
    #moves = ["+"];

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

const createKing = (pieceColor, orCoords) => {
    const {
        type,
        moves,
        limitCells,
        color,
        originCoords
    } = new King(pieceColor, orCoords);

    return  {
        type,
        moves,
        limitCells,
        color,
        originCoords,
    }
}

export { createKing };