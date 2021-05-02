import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event />', () => {
    let EventWrapper;
    beforeAll(() => {
        EventWrapper = shallow(<Event events={mockData}/>)
    });

    test('render correct event details', () => {
        expect(EventWrapper.find('.eventSummary')).toHaveLength(1);
      });
    
      test('render show event-details', () => {
        EventWrapper.setState({ showhideDetails: true });
        EventWrapper.find('.detailsButton').simulate('click');
      });
    
      test('render hide event-details', () => {
        EventWrapper.setState({ showhideDetails: false });
        EventWrapper.find('.detailsButton').simulate('click');
      });
    });