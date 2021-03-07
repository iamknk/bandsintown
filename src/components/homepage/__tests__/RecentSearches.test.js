import React from 'react';
import { shallow } from 'enzyme';
import { RecentSearches } from '../../index';

import { SearchList } from '../../../fixtures/Searches'

let wrapped = shallow(<RecentSearches searches={SearchList} />);
describe('RecentSearches', () => {

  it('renders right amount of chips', () => { 
    expect(wrapped.find('TextChip')).toHaveLength(SearchList.length);
  });
});