import { Reducer } from "react";
import ICounter from "./ICounter";
import ICounterActionInfo from "./ICounterActionInfo";

export const DynamicReducer: Reducer<ICounter, ICounterActionInfo> = (state, actionInfo) : ICounter=>{
    return actionInfo.action(state, actionInfo.value);
}