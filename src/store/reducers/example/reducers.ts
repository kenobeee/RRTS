import {
    ActionWithSomeField,
    IExampleInitialState
} from '@store/type';

export const someFieldHandler = (state:IExampleInitialState, action:ActionWithSomeField) => {
    state.someField = action.payload;
};