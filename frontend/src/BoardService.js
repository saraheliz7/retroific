import * as axios from "axios";
export default class BoardService {

    constructor() {
        this._axios = axios;
    }

    createBoard(name){
        this._axios.post('/api/board', {
            boardName: name
        })
    }
}
