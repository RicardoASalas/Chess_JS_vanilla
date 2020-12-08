import Piece from '../Piece.js';

class King extends Piece {
    #type = 'king';
    #limitCells = 1;
    #moves = '*';

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
}

const createKing = (pieceColor, orCoords, numPiece) => {
    return new King(pieceColor, orCoords, numPiece);
}

export { createKing };