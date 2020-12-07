import Piece from '../Piece.js';

class Castle extends Piece {
    #type = 'castle';
    #limitCells = 7;
    #moves = '+';
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

const createCastle = (pieceColor, orCoords) => {
    const {
        type,
        moves,
        limitCells,
        color,
        originCoords
    } = new Castle(pieceColor, orCoords);

    return  {
        type,
        moves,
        limitCells,
        color, 
        originCoords
    }
}

export { createCastle };