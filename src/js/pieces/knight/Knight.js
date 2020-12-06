import Piece from '../Piece.js';

class Knight extends Piece {
    #type = 'knight';
    #limitCells = 3;
    #moves = ["L"];

    constructor(color, originCoords) {
        super()

        this.type = this.#type;
        this.color = color;
        this.limitCells = this.#limitCells;
        this.moves =  this.#moves;
        this.originCoords = originCoords
        this.currentCoords = originCoords;
    }
}

const createKnight = (pieceColor, orCoords) => {
    const {
        type,
        moves,
        limitCells,
        color,
        originCoords
    } = new Knight(pieceColor, orCoords);

    return  {
        type,
        moves,
        limitCells,
        color,
        originCoords
    }
}

export { createKnight };