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
    localStorage.setItem('tableState', JSON.stringify(tableState));
    localStorage.setItem('pieces', JSON.stringify(pieces));
    renderTable(tableState);
  



    // const currCoords = whitePieces['king'].getPieceInfo().currentCoords;
    // const piece = whitePieces['king'];
    // const move = {
    //     desCoords: [1, 4],
    //     currCoords,
    // }
    // actions.movePiece(table, piece, move);
    // console.log(piece);
    // console.log(table);
}
    
const renderTable = (tableState) => {
    let image;
    let cells = '';
    let pieceImage;

    for (let i = 7; i >= 0; i--) {
        for (let j = 0; j < 8; j++) {
            const color = tableState[j][i].color;
            let state = tableState[j][i].state;
            const coords = [j, i]
        
            if ( color === 'white') {
                image = "whiteSquare.png";
            } else if (color === 'black') {
                image = "blackSquare.png";
            }

            let width;
            let height;
            let pieceColor;
            let draggable;
            let numPiece;

            if (state.type) {
                pieceColor = state.color;
                numPiece = state.numPiece;
                state = state.type;
                width = 25;
                height = 60;
                pieceImage =`/pieces/${state}${pieceColor}.png`;
                draggable = "true";
            } else {
                width = 65;
                height = 65;
                pieceImage = image;
                draggable = "false";
            }

            const cell = 
            `<span id="${coords}" class="cell dropzone" ondragover="onDragOver(event);" ondrop="onDrop(event);">
                    <img id="${numPiece}" ondragstart="onDragStart(event)"; class="piece draggable" draggable=${draggable} src="src/img/${pieceImage}" alt=${state} width="${width}" height="${height}">
                    <img draggable="false" src="src/img/${image}" alt=${coords} width="65" height="65">
            </span>`;
            cells = cells + cell;
        }
    }

    const htmlCode = 
    `<div class="table">
        ${cells}
    </div>`;
    document.getElementById('chessTable').innerHTML = htmlCode;
}


// const movePiece = (piece, originCoords, currCoords, destCoords) => {
//     const piece = document.querySelector(`.${piece.state.numPiece}`);
//     const cells = querySelectorAll('.dropzone')
// }

export { startGame, renderTable };