import ICounter from "./ICounter";
import { Dispatch } from "react";
import ICounterActionInfo from "./ICounterActionInfo";

export default interface ICounterContext {
    state: ICounter;
    dispatch: Dispatch<ICounterActionInfo>;
    //dispatch: Dispatch<React.SetStateAction<ICounter>>;
}



