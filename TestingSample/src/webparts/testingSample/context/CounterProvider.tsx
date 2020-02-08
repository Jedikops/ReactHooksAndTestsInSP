import * as React from 'react';
//import { CounterReducer } from "./CounterReducers";
import { CounterContext } from "./CounterContext";
import ICounter from "./ICounter";
import { useReducer, Reducer } from 'react';
import { DynamicReducer } from './DynamicReducer';
import ICounterActionInfo from './ICounterActionInfo';

const initialState: ICounter = { count: 0 };

export const CounterProvider = ({ children }) => {
    const [state, dispatch] = useReducer<Reducer<ICounter, ICounterActionInfo>>(DynamicReducer, initialState);
React.useState
    return (<CounterContext.Provider value={{ state, dispatch: dispatch }}>
        {children}
    </CounterContext.Provider >);

};

