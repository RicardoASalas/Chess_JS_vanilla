class Piece {
    constructor(type, moves, limitCells, color, originCoords) {
        this.type = type;
        this.moves = moves;
        this.limitCells = limitCells;
        this.color = color;
        this.originCoords = originCoords;
        this.currentCoords = originCoords;
    }

    setCurrentCoords(coords) {
        this.currentCoords = coords;
    }

    getPieceInfo() {
        return {
            type: this.type,
            moves: this.moves,
            limitCells: this.limitCells,
            color: this.color,
            originCoords: this.originCoords,
            currentCoords: this.currentCoords,
        }
    }
}

export default Piece;