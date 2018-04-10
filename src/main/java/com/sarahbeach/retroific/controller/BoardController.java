package com.sarahbeach.retroific.controller;

import com.sarahbeach.retroific.model.Board;
import com.sarahbeach.retroific.persistence.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@CrossOrigin(origins = "http://localhost:3000")
public class BoardController {

    @Autowired
    private BoardRepository boardRepository;

    @RequestMapping(value = "/api/board", method = RequestMethod.POST)
    public ResponseEntity<String> createBoard(@RequestBody Board board) {
        System.out.println(board.getBoardName());
        boardRepository.create(board);
        return new ResponseEntity(HttpStatus.OK);
    }
}
