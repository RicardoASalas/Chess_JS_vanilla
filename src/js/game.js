import Table from './table/Table.js'
import { actions } from './actions/actions.js'

const startGame = () => {
    console.log('Empieza el juego');
    const table = new Table();
    const pieces = {}
    table.create();
    const tableState = table.getTableState();
    pieces.white = actions.createPieces('white');
    pieces.black = actions.createPieces('black');
    actions.setPieces(table, pieces);
    localStorage.setItem('table', JSON.stringify(tableState));
    localStorage.setItem('pieces', JSON.stringify(pieces));
    window.renderTable(tableState);
}

export { startGame };