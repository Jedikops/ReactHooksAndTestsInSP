import * as React from 'react';
import 'jest';
import { mount, ReactWrapper } from 'enzyme';

import { MultiplyComponent } from '../webparts/testingSample/context/MultiplyComponent';
import { CounterProvider } from '../webparts/testingSample/context/CounterProvider';
import { CounterComponent } from '../webparts/testingSample/context/CounterComponent';

let initialValue = 1;
let component = 2;
let expectedMultiply = initialValue * component;
let expectedDivide = initialValue / component;

let wrapper: ReactWrapper;

beforeEach(() => {
    wrapper = mount(<CounterProvider>
        <CounterComponent />
        <MultiplyComponent multiplier={component} />
    </CounterProvider>);
});

afterEach(() => {
    wrapper.unmount();
});

test('initial test to verify inital count of counter', () => {

    //  expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('div.count').text()).toBe((initialValue).toString());
});

test('multiply result check', () => {
    expect(wrapper.find('button.firstButton')).not.toBeNull();
    let button = wrapper.find('button.firstButton').first();
    button.simulate('click');

    //expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('div.count').text()).toBe((expectedMultiply).toString());
});

test('divide result check', () => {
    expect(wrapper.find('button.secondButton')).not.toBeNull();
    let button = wrapper.find('button.firstButton').first();
    button.simulate('click');

    //expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('div.count').text()).toBe((expectedDivide).toString());
});



