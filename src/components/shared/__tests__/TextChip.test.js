import React from 'react';
import { shallow } from 'enzyme';
import { TextChip } from '../../index';


let wrapped = shallow(<TextChip text={"Hello"} />);
describe('TextChip', () => {
 
  it('renders the the right text on chip', () => { 
    expect(wrapped.find('.chip').text()).toEqual("Hello");
  });
});