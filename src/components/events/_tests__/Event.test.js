import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment'
import { Event } from '../../index';

import { events } from '../../../fixtures/Events'

const { city, country, location} = events[0].venue
let wrapped = shallow(<Event event={events[0]} />);
describe('Event', () => {

  it('has Event Details Title', () => { 
    expect(wrapped.find('.card-header').at(0).text()).toEqual('Event Details');
  });

  it('has right event title', () => { 
    expect(wrapped.find('span').at(0).text()).toEqual(events[0].title);
  });

  it('has right event location', () => { 
    expect(wrapped.find('span').at(1).text()).toEqual(`${location}, ${city}, ${country}`);
  });

  it('has right event time', () => { 
    expect(wrapped.find('span').at(2).text()).toEqual(moment(events[0].datetime).format("MMMM Do, YYYY"));
  });

});