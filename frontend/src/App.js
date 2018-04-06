import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import BoardService from './BoardService';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {boardName: ''};
        this._boardService = new BoardService();
    }
    createBoard() {
        this._boardService.createBoard(this.state.boardName);
    }
    setBoardName(name) {
        this.setState({boardName: name});
    }


  render() {
    return (
        <div className="title-container d-flex h-100 p-3 mx-auto flex-column">
            <header className="title mb-auto">
                <div>
                    <h3 className="title-brand text-left">RETROIFIC</h3>
                </div>
            </header>
            <main role="main" className="inner cover text-center">
                <h1 className="retro-heading">Create a Retro Board</h1>
                <p className="lead">Help your weekly Retro's go smoothly. Just give it a name and you're off!</p>
                <div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-8">
                                <form>
                                    <div className="form-group">
                                        <label className="text-left">Pick a Name</label>
                                        <input type="text" className="form-control" id="board-name" onChange={(event) => this.setBoardName(event.target.value)} placeholder="Your Board Name"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lead">
                    <button className="btn btn-lg btn-secondary add-board" onClick={() => this.createBoard()}>Create Board</button>
                </div>
            </main>
        </div>
    );
  }
}

export default App;
