import * as React from 'react';
import {HTMLAttributes, shallow, ShallowWrapper} from 'enzyme';
import * as enzyme from "enzyme"
import * as Adapter from "enzyme-adapter-react-16"
import Button from './Button';
import reactDom from 'react-dom';

// Setup enzyme's react adapter
enzyme.configure({adapter: new Adapter()})



let control:ShallowWrapper<undefined, undefined>;
let myMock = jest.fn();
let buttonText = "Click Me!";

beforeEach(()=>

    control = shallow(<Button onClick={myMock}>{buttonText}</Button>)

);

describe("Button", () => {
    it("Should render without error", ()=>{
        expect(control.length).toBe(1);
    });

    it("Should render as a single button control", ()=>{
        expect(control.find('button').length).toBe(1);
    });

    it("Should show the passed text", ()=>{
        expect(control.find('button').text().length).toBe(buttonText.length);
    });

    it("Should call a function on click", ()=>{
        control.find('button').simulate('click');
        expect(myMock.mock.calls.length).toBe(1);
    });

    it("Should be clickable more than once", ()=>{
        control.find('button').simulate('click');
        expect(myMock.mock.calls.length).toBe(2);
    });
});