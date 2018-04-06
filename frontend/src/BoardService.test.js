import BoardService from './BoardService';
import * as axios from "axios";
jest.mock('axios');

describe('boardService', function() {

   it('createBoard calls an endpoint with the board name', function() {
       const boardService = new BoardService();
       boardService.createBoard('Things About Jeremy');
       expect(axios.post).toHaveBeenCalledWith("/api/board",{boardName: "Things About Jeremy"});

   });

});