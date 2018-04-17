import React from 'react';
import CreateBoard from './CreateBoard';
import {configure, shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import BoardService from '../service/BoardService';
configure({ adapter: new Adapter() });
jest.mock('../service/BoardService');


describe('CreateBoard component', () => {
    it('creates a board when create board button is clicked', () => {
        const subject = shallow(<CreateBoard/>);
        subject.find("#board-name").simulate("change", {target: {value:"Things About Jeremy"}});
        subject.find(".add-board").simulate("click");
        const [mockInstance] = BoardService.mock.instances;
        expect(mockInstance.createBoard).toHaveBeenCalledWith("Things About Jeremy");
    });
});

