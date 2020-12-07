const moves = {
    '+': (currCoords, destCoords, limit) => {
        const xDif = destCoords[0] - currCoords[0];
        const yDif = destCoords[1] - currCoords[1];
        console.log(xDif + '--' + yDif + '--' + limit);
        if (xDif > 0 && yDif > 0) return currCoords

        if (xDif > limit || yDif > limit) return currCoords;

        return destCoords;
    },

    '*': (currCoords, destCoords, limit) => {
        const xDif = destCoords[0] - currCoords[0];
        const yDif = destCoords[1] - currCoords[1];

        if (xDif > limit || yDif > limit) return currCoords;

        return destCoords;
    },

    '|': (currCoords, destCoords, limit) => {
        const xDif = destCoords[0] - currCoords[0];
        const yDif = destCoords[1] - currCoords[1];

        if (xDif > limit || yDif > limit) return currCoords;

        return destCoords;
    },

    'x': (currCoords, destCoords, limit) => {
        const xDif = destCoords[0] - currCoords[0];
        const yDif = destCoords[1] - currCoords[1];

        if (xDif > limit || yDif > limit) return currCoords;

        return destCoords;
    },

    'L': (currCoords, destCoords, limit) => {
        const xDif = destCoords[0] - currCoords[0];
        const yDif = destCoords[1] - currCoords[1];

        if (xDif > limit || yDif > limit) return currCoords;

        return destCoords;
    }
}

export { moves };