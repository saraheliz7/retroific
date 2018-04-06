import React from 'react';
import App from './App';
import {configure, shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import BoardService from './BoardService';
configure({ adapter: new Adapter() });
jest.mock('./BoardService');


describe('App component', () => {
    it('creates a board when create board button is clicked', () => {
        const subject = shallow(<App/>);
        subject.find("#board-name").simulate("change", {target: {value:"Things About Jeremy"}});
        subject.find(".add-board").simulate("click");
        const [mockInstance] = BoardService.mock.instances;
        expect(mockInstance.createBoard).toHaveBeenCalledWith("Things About Jeremy");
    });
});

