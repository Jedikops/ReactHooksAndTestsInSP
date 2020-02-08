import * as React from 'react';
import { CounterProvider } from "./CounterProvider";
import { SumComponent } from "./SumComponent";
import { MultiplyComponent } from './MultiplyComponent';
import { CounterComponent } from './CounterComponent';

const App = () => {
    return (
        <CounterProvider>
            <CounterComponent />
            <SumComponent component={1} />
            <MultiplyComponent multiplier={2} />
        </CounterProvider >
    );
};
export default App;
