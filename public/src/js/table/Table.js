class Table {
    #verticalCells;
    #horizontalCells;
    #table;

    constructor() {
        this.#verticalCells = 8;
        this.#horizontalCells = 8;
        this.#table = [];
    }

    create() {
        for (let x = 0; x < this.#horizontalCells; x++) {
            this.#table[x] = [];
            for (let y = 0; y < this.#verticalCells; y++) {
                const color = (y + x ) % 2 ? 'black' : 'white';
                const cell = {
                    state: 'empty',
                    color,
                    coords: [x,y]
                }

                this.#table[x][y] = cell;
                console.log('Tabla creada')
            }
        }
    }

    setCellState(piece, coords) {
        const x = coords[0];
        const y = coords[1];

        this.#table[x][y].state = piece;
    }

    getCellState(coords) {
        const x = coords[0];
        const y = coords[1];

        return this.#table[x][y];
    }

    getTableState() {
        return this.#table;
    }
}

export default Table;