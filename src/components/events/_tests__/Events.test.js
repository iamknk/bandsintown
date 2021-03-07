import React from 'react';
import { shallow } from 'enzyme';
import { Events } from '../../index';

import { artistInfo } from '../../../fixtures/Artists'

const stateObject = { 'state': artistInfo}
let wrapped = shallow(<Events location={ stateObject } />);
describe('Events', () => {

  it('has back link to homepage', () => { 
    expect(wrapped.find('Link').at(0).props().to).toEqual('/');
  });

});