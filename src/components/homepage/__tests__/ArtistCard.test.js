import React from 'react';
import { shallow } from 'enzyme';
import { ArtistCard } from '../../index';

import { artistInfo } from '../../../fixtures/Artists'

const {name, image, facebookUrl} = artistInfo
let wrapped = shallow(<ArtistCard name={name} image={image} facebookUrl={facebookUrl} viewEvent={true}  />);
describe('ArtistCard', () => {
 
  it('renders the facebook URL on Artist Card', () => { 
    expect(wrapped.find('a').at(0).props().href).toEqual(facebookUrl);
  });

  it('renders the right image on Artist Card', () => { 
    expect(wrapped.find('img').at(0).props().src).toEqual(image);
  });

  it('renders view event link', () => { 
    expect(wrapped.find('Link').at(0).props().to.pathname).toEqual('/events');
  });
});