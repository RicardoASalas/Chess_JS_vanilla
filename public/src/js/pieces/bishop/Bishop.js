import Piece from '../Piece.js';

class Bishop extends Piece {
    #type = 'bishop';
    #limitCells = 7;
    #moves = 'x';
    
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

const createBishop = (pieceColor, orCoords, numPiece) => {
    return new Bishop(pieceColor, orCoords, numPiece);
}

export { createBishop };