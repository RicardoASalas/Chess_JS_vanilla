import { createPiece } from './pieces/index.js'
import Table from './Table.js'
import { piecesInfo } from './pieces/info.js'

const startGame = () => {
    console.log('Empieza el juego');
    const table = new Table()
    table.create()
    const whitePieces = _createPieces('white');
    const blackPieces = _createPieces('black');

    _setPieces(table, { whitePieces, blackPieces});
}

const _setPieces = (table, pieces) => {
    const  { blackPieces, whitePieces } = pieces;
   
    for (const property in blackPieces) {
        const coords = blackPieces[property]['originCoords'];
        const piece = blackPieces[property];
        table.setCellState(piece, coords)
    }

    for (const property in whitePieces) {
        const coords = whitePieces[property]['originCoords'];
        const piece = whitePieces[property];
        table.setCellState(piece, coords)
    }

    console.log(table.getTableState());
}

const _createPieces = (color) => {
    const pieces = piecesInfo;

    const piecesPack = {};
    const totalPieces = 16;

    pieces.map((piece) => {
        const { name, numPieces, originCoords } = piece;

        if(numPieces > 1) {
            for (let i = 0; i < numPieces; i++) {
                const orCoords = originCoords[color].shift();
                piecesPack[name + (i + 1)] = createPiece(name, color, orCoords);
            }
        } else {
            const orCoords = originCoords[color].shift();
            piecesPack[name] = createPiece(name, color, orCoords);
        }
    })
    const numPiecesPack = Object.keys(piecesPack).length;
  
    if (numPiecesPack > totalPieces) {
        return "ERROR: Se han creado mas piezas de las permitidas.";
    }

    console.log(`Piezas ${color} creadas`)

    return piecesPack;
}


export { startGame };