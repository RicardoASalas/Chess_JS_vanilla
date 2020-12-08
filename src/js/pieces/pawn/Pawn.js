import Piece from '../Piece.js';

class Pawn extends Piece {
    #type = 'pawn';
    #limitCells = 2;
    #moves = "|";

    constructor(color, originCoords, numPiece) {
        super()

        this.type = this.#type;
        this.color = color;
        this.limitCells = this.#limitCells;
        this.moves =  this.#moves;
        this.originCoords = originCoords;
        this.currentCoords = originCoords;
        this.numPiece = numPiece;
    }

    setLimitCells(limit) {
        this.limitCells = limit;
    }
}

const createPawn = (pieceColor, orCoords, numPiece) => {
    return new Pawn(pieceColor, orCoords, numPiece);
}

export { createPawn };