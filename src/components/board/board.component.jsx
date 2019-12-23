import React from 'react';
import { PureComponent } from "react";

export class Board extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            grid: '',
            rows: 40,
            cols: 40
        }
    }

    componentDidMount() {
        this.createMatrix();
    }

    createMatrix(rows, cols) {
        let grid = [];
        for (let i = 0; i < rows; i++) {
            grid.push([]);
            for (let j = 0; i < cols; j++) {
                grid[i][j] = {
                    x: i,
                    y: j,
                    isMine: false,
                    neighbour: 0,
                    isRevealed: false,
                    isEmpty: false,
                    isFlagged: false,
                };
            }

        }
        return grid;
    }

    render() {
        return <div></div>
    }
}