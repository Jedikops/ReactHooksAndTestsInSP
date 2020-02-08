import * as React from "react";
import { createContext, useContext } from "react";
import ICounterContext from "./ICounterContext";

export const CounterContext: React.Context<ICounterContext> = createContext({} as ICounterContext);

export const useStore = (): ICounterContext => useContext(CounterContext);