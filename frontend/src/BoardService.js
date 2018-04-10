import * as axios from "axios";
const uuidv4 = require('uuid/v4');
export default class BoardService {

    createBoard(name){
        axios.post('http://localhost:8080/api/board', {
            id: uuidv4(),
            boardName: name
        })
    }
}
