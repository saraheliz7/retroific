import * as axios from "axios";
export default class BoardService {

    constructor() {
        this._axios = axios;
    }

    createBoard(name){
        this._axios.post('http://localhost:8080/api/board', {
            boardName: name
        })
    }
}
