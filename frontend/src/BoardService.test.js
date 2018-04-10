import BoardService from './BoardService';
import * as axios from "axios";
const uuidv4 = require('uuid/v4');
jest.mock('axios');
jest.mock('uuid/v4');

describe('boardService', function() {

   it('createBoard calls an endpoint with the board name', function() {
       uuidv4.mockReturnValueOnce('00000000-00000000-00000000-00000000');

       const boardService = new BoardService();
       boardService.createBoard('Things About Jeremy');

       expect(axios.post).toHaveBeenCalledWith("http://localhost:8080/api/board", {
           id: '00000000-00000000-00000000-00000000',
           boardName: "Things About Jeremy"

       });
   });

});