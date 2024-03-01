import {createSlice} from '@reduxjs/toolkit';

import * as reducers from './reducers';
import {IExampleInitialState} from '../../type';

export const initialState:IExampleInitialState = {
    someField: null
};

export const {actions, reducer} = createSlice({
    name: 'authNew',
    initialState,
    reducers,
});
