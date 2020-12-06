const piecesInfo = [
    {
        name: 'queen',
        numPieces: 1,
        originCoords: {
            white: [[0, 3]],
            black: [[7, 3]]
        }
    },
    {
        name: 'king',
        numPieces: 1,
        originCoords: {
            white: [[0, 4]],
            black: [[7, 4]]
        }
    },
    {
        name: 'bishop',
        numPieces: 2,
        originCoords: {
            white: [[0, 2], [0, 5]],
            black: [[7, 2], [7, 5]]
        }
    },
    {
        name: 'knight',
        numPieces: 2,
        originCoords: {
            white: [[0, 1], [0, 6]],
            black: [[7, 1], [7, 6]]
        }
    },
    {
        name: 'castle',
        numPieces: 2,
        originCoords: {
            white: [[0, 0], [0, 7]],
            black: [[7, 0], [7, 7]]
        }
    },
    {
        name: 'pawn',
        numPieces: 8,
        originCoords: {
            white: [[1, 0], [1, 1], [1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [1, 7]],
            black: [[6, 0], [6, 1], [6, 2], [6, 3], [6, 4], [6, 5], [6, 6], [6, 7]]
        }
    }
];

export { piecesInfo };