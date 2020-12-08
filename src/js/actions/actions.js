import { createPiece } from '../pieces/index.js'
import { piecesInfo } from '../pieces/info.js'
import { moves } from './moves.js'

const actions = {

    /* creates two set of pieces, white and black */
    createPieces: (color) => {
        const pieces = piecesInfo;
    
        const piecesPack = {};
        const totalPieces = 16;
        
        pieces.map((piece) => {
            const { name, numPieces, originCoords } = piece;
            // clone object originCoords to avoid change original data
            let cloneOriginCoords = JSON.parse(JSON.stringify(originCoords[color]))
           
            if(numPieces > 1) {
                for (let i = 0; i < numPieces; i++) {
                    /* removes initial coords from array as it must be unique 
                    for each piece */
                    const orCoords = cloneOriginCoords.shift();
                    const completeName = name + (i + 1);
                    piecesPack[completeName] = createPiece(name, color, orCoords, completeName);
                }
            } else {
                const orCoords = cloneOriginCoords.shift();
                piecesPack[name] = createPiece(name, color, orCoords, name);
            }
        })
        const numPiecesPack = Object.keys(piecesPack).length;
      
        if (numPiecesPack > totalPieces) {
            return "ERROR: Se han creado mas piezas de las permitidas.";
        }
    
        console.log(`Piezas ${color} creadas`)
    
        return piecesPack;
    },

    /* places pieces on their initial positions */
    setPieces: (table, pieces) => {
        const  { black: blackPieces, white: whitePieces } = pieces;
       
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
    },

    movePiece: (table, piece, move) => {
        const { currCoords, desCoords} = move; 
        const newPosition = moves[piece.moves](currCoords, desCoords, piece.limitCells)
        console.log(newPosition)
        piece.setCurrentCoords(newPosition);
        table.setCellState('empty', currCoords);
        table.setCellState(piece, newPosition);
    }
}

export { actions };