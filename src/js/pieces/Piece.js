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

    getCurrentCoords() {
        return this.currentCoords;
    }
}

export default Piece;