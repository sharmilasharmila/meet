import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event />', () => {
    let EventWrapper;
    beforeAll(() => {
        EventWrapper = shallow(<Event event={mockData}/>)
    });

    test('renders the event summary, date, and location', () => {
        expect(EventWrapper.find('.summary')).toHaveLength(1);
        expect(EventWrapper.find('.date')).toHaveLength(1);
        expect(EventWrapper.find('.location')).toHaveLength(1);
    });

    test('render show details button', () => {
        expect(EventWrapper.find('.detailsButton')).toHaveLength(1);
    });

    test('clicking show details button expands the event', () => {
        EventWrapper.find('.detailsButton').simulate('click');
        expect(EventWrapper.find('.expanded')).toHaveLength(1);
    });

    test('clicking the hide details button removes the expanded details', () => {
        EventWrapper.find('.detailsButton').simulate('click');
        expect(EventWrapper.find('.detailsButton').text()).toBe('Show Details');
        EventWrapper.find('.detailsButton').simulate('click');
        expect(EventWrapper.find('.expanded')).toHaveLength(1);
    })

})