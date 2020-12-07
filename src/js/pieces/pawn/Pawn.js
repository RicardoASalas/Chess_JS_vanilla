import Piece from '../Piece.js';

class Pawn extends Piece {
    #type = 'pawn';
    #limitCells = 2;
    #moves = "|";

    constructor(color, originCoords) {
        super()

        this.type = this.#type;
        this.color = color;
        this.limitCells = this.#limitCells;
        this.moves =  this.#moves;
        this.originCoords = originCoords;
        this.currentCoords = originCoords;
    }

    setLimitCells(limit) {
        this.limitCells = limit;
    }
}

const createPawn = (pieceColor, orCoords) => {
    const {
        type,
        moves,
        limitCells,
        color,
        originCoords,
    } = new Pawn(pieceColor, orCoords);

    return  {
        type,
        moves,
        limitCells,
        color,
        originCoords,
    }
}

export { createPawn };