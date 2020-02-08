import * as React from 'react';
import 'jest';
import { mount, ReactWrapper } from 'enzyme';

import { SumComponent } from '../webparts/testingSample/context/SumComponent';
import { CounterProvider } from '../webparts/testingSample/context/CounterProvider';
import { CounterComponent } from '../webparts/testingSample/context/CounterComponent';


let initialValue = 0;
let component = 1;
let expected = initialValue + component;

let wrapper: ReactWrapper;

beforeEach(() => {
    wrapper = mount(<CounterProvider>
        <CounterComponent />
        <SumComponent component={component} />
    </CounterProvider>);
});

afterEach(() => {
    wrapper.unmount();
});

test('initial test to verify inital count of counter', () => {
    expect(wrapper).toMatchSnapshot();
    //expect(wrapper.find('div.count').text()).toBe((initialValue).toString());
});

test('first button restult check', () => {
    expect(wrapper.find('button.firstButton')).not.toBeNull();
    let button = wrapper.find('button.firstButton').first();
    button.simulate('click');

    expect(wrapper).toMatchSnapshot();
    //expect(wrapper.find('div.count').text()).toBe((expected).toString());
});



