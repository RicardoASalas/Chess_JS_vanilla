import { createQueen } from './queen/Queen.js'
import { createKing } from './king/King.js'
import { createBishop } from './bishop/Bishop.js'
import { createKnight } from './knight/Knight.js'
import { createCastle} from './castle/Castle.js'
import { createPawn} from './pawn/Pawn.js'


const createPiece = (name, color, originCoords) => {
    const pieces = {
        queen: createQueen(color, originCoords),
        king: createKing(color, originCoords),
        bishop: createBishop(color, originCoords),
        knight: createKnight(color, originCoords),
        castle: createCastle(color, originCoords),
        pawn: createPawn(color, originCoords),
    }

    return pieces[name];
}


export { createPiece };

