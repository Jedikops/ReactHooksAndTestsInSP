import * as React from "react";
import { useStore } from "./CounterContext";
import ICounterState from "./ICounterContext";
import { CounterActions } from "./CounterActions";


export const MultiplyComponent = (props: { multiplier: number }) => {
    const { state, dispatch }: ICounterState = useStore();

    React.useEffect(() => {
        dispatch({ action: CounterActions.ResetTo, value: 1 });

    }, []);

    return (
        <div>
            <div>
                <button className="firstButton" onClick={() => dispatch({ action: CounterActions.Multiply, value: props.multiplier })}>*</button>
                <button className="secondButton" onClick={() => dispatch({ action: CounterActions.Divide, value: props.multiplier })}>/</button>
                <button className="thirdButton" onClick={() => dispatch({ action: CounterActions.ResetTo, value: 1 })}>Reset</button>
            </div>
        </div>
    );
};