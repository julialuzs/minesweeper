import { PureComponent } from "react";
import React from 'react';

export class Cell extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isMine: '',
            isFlag: '',
            isRevealed: ''

        }
    }

    getValue() {
        const { cell } = this.state.props;

        if (cell.isMine) {
            return "x";
        }
        if (!cell.isRevealed) {
            return cell.isFlagged ? "f" : null;
        }
        if (cell.neighbour === 0) {
            return null;
        }
        return cell.neighbour;
    }

    render() {
        return <div></div>
    }
}