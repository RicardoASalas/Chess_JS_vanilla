import Table from './table/Table.js'
import { actions } from './actions/actions.js'

const startGame = () => {
    console.log('Empieza el juego');
    const table = new Table()
    table.create()
    const whitePieces = actions.createPieces('white');
    const blackPieces = actions.createPieces('black');

    actions.setPieces(table, { whitePieces, blackPieces});

    const currCoords = whitePieces['king'].getPieceInfo().currentCoords;
    const piece = whitePieces['king'];

    const move = {
        desCoords: [1, 4],
        currCoords,
    }
    actions.movePiece(table, piece, move);
    console.log(piece);
    console.log(table);
}
    




export { startGame };