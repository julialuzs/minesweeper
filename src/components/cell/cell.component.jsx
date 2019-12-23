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

    render() {
        return <div></div>
    }
}