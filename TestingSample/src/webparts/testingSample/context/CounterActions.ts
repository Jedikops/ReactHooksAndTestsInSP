import ICounter from "./ICounter";

export type CounterAction = (state: ICounter, value: number) => ICounter;

export const CounterActions = {
    Increment: (state: ICounter, value: number): ICounter => {
        return { count: state.count + value };
    },

    Decrement: (state: ICounter, value: number): ICounter => {
        return { count: state.count - value };
    },

    Multiply: (state: ICounter, value: number): ICounter => {
        return { count: state.count * value };
    },

    Divide: (state: ICounter, value: number): ICounter => {
        return { count: state.count / value };
    },

    ResetTo: (state: ICounter, value: number): ICounter => {
        return { count: value };
    }
}