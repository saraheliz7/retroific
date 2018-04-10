package com.sarahbeach.retroific;

import com.sarahbeach.retroific.controller.BoardController;
import com.sarahbeach.retroific.model.Board;
import com.sarahbeach.retroific.persistence.BoardRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.*;

@RunWith(MockitoJUnitRunner.class)
public class BoardControllerTest {

    @InjectMocks
    private BoardController boardController;

    @Mock
    private BoardRepository mockBoardRepository;


    @Test
    public void createBoard_createsABoard() {
        Board board = new Board();
        board.setId("00000000-00000000-00000000-00000000");

        boardController.createBoard(board);

        verify(mockBoardRepository).create(board);
    }

}