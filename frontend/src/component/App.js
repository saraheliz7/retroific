import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import CreateBoard from "./CreateBoard";

import {Route} from "react-router-dom";
import Board from "./Board";


export default class App extends Component {

  render() {
    return (
        <div className="title-container d-flex h-100 p-3 mx-auto flex-column">
            <header className="title mb-auto">
                <div>
                    <h3 className="title-brand text-left">RETROIFIC</h3>
                </div>
            </header>
            <Route exact path="/" component={CreateBoard}/>
            <Route path="/board/:id" component={Board}/>
        </div>
    );
  }
}

