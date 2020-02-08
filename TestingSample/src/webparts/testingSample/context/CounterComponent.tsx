import * as React from "react";
import { useStore } from "./CounterContext";
import ICounterContext from "./ICounterContext";


export const CounterComponent = () => {
    const { state }: ICounterContext = useStore();

    return (
        <div>
            <div className="count">{state.count}</div>
        </div>
    );
};