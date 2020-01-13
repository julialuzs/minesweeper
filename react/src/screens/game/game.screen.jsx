import { Component, Fragment } from "react";
import { Board } from "../../components/board.component";
import React from 'react';

export class GameScreen extends Component {
   constructor() {
      super();

      this.state = {}
   }

   render() {
      return (
         <Fragment>
            <Board rows="40" cols="40"></Board>
         </Fragment>
      )
   }

}