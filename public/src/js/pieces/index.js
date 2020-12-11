import { createQueen } from './queen/Queen.js'
import { createKing } from './king/King.js'
import { createBishop } from './bishop/Bishop.js'
import { createKnight } from './knight/Knight.js'
import { createCastle} from './castle/Castle.js'
import { createPawn} from './pawn/Pawn.js'


const createPiece = (name, color, originCoords, numPiece) => {
    const pieces = {
        queen: createQueen(color, originCoords, numPiece),
        king: createKing(color, originCoords, numPiece),
        bishop: createBishop(color, originCoords, numPiece),
        knight: createKnight(color, originCoords, numPiece),
        castle: createCastle(color, originCoords, numPiece),
        pawn: createPawn(color, originCoords, numPiece),
    }

    return pieces[name];
}


export { createPiece };

