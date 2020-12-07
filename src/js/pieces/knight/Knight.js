import Piece from '../Piece.js';

class Knight extends Piece {
    #type = 'knight';
    #limitCells = 3;
    #moves = 'L';

    constructor(color, originCoords, numPiece) {
        super()

        this.type = this.#type;
        this.color = color;
        this.limitCells = this.#limitCells;
        this.moves =  this.#moves;
        this.originCoords = originCoords;
        this.currentCoords = originCoords;
        this.numPiece = color + numPiece;
    }
}

const createKnight = (pieceColor, orCoords, numPiece) => {
    return new Knight(pieceColor, orCoords, numPiece);
}

export { createKnight };