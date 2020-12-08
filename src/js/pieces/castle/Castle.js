import Piece from '../Piece.js';

class Castle extends Piece {
    #type = 'castle';
    #limitCells = 7;
    #moves = '+';
    
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

const createCastle = (pieceColor, orCoords, numPiece) => {
    return new Castle(pieceColor, orCoords, numPiece);
}

export { createCastle };