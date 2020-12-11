const piecesInfo = [
    {
        name: 'queen',
        numPieces: 1,
        originCoords: {
            white: [[3, 0]],
            black: [[3, 7]]
        }
    },
    {
        name: 'king',
        numPieces: 1,
        originCoords: {
            white: [[4, 0]],
            black: [[4, 7]]
        }
    },
    {
        name: 'bishop',
        numPieces: 2,
        originCoords: {
            white: [[2, 0], [5, 0]],
            black: [[2, 7], [5, 7]]
        }
    },
    {
        name: 'knight',
        numPieces: 2,
        originCoords: {
            white: [[1, 0], [6, 0]],
            black: [[1, 7], [6, 7]]
        }
    },
    {
        name: 'castle',
        numPieces: 2,
        originCoords: {
            white: [[0, 0], [7, 0]],
            black: [[0, 7], [7, 7]]
        }
    },
    {
        name: 'pawn',
        numPieces: 8,
        originCoords: {
            white: [[0, 1], [1, 1], [2, 1], [3, 1], [4, 1], [5, 1], [6, 1], [7, 1]],
            black: [[0, 6], [1, 6], [2, 6], [3, 6], [4, 6], [5, 6], [6, 6], [7, 6]]
        }
    }
];

export { piecesInfo };