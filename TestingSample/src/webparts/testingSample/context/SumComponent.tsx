import * as React from "react";
import { useStore } from "./CounterContext";
import ICounterState from "./ICounterContext";
import { CounterActions } from "./CounterActions";


export const SumComponent = (props: { component: number}) => {
    const { state, dispatch }: ICounterState = useStore();

    React.useEffect(() => {
        dispatch({ action: CounterActions.ResetTo, value: 0 });
    }, []);

    return (
        <div>
            <div>
                <button className="firstButton" onClick={() => dispatch({ action: CounterActions.Increment, value: props.component })}>+</button>
                <button className="secondButton" onClick={() => dispatch({ action: CounterActions.Decrement, value: props.component })}>-</button>
                <button className="thirdButton" onClick={() => dispatch({ action: CounterActions.ResetTo, value: 0 })}>Reset</button>
            </div>
        </div>
    );
};