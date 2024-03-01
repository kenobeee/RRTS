import {PayloadAction as PA} from '@reduxjs/toolkit';

// example

export interface IExampleInitialState {
    someField:any
}

export type ActionWithSomeField = PA<Partial<IExampleInitialState['someField']>>;

// store

export type StoreInner = {
    example:IExampleInitialState
};
