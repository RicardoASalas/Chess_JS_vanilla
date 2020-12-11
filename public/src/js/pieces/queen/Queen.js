import Piece from '../Piece.js';

class Queen extends Piece {
    #type = 'queen';
    #limitCells = 7;
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

const createQueen = (pieceColor, orCoords, numPiece) => {
    return new Queen(pieceColor, orCoords, numPiece);
}

export { createQueen };