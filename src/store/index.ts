import {configureStore, EnhancedStore} from '@reduxjs/toolkit';

import {reducer} from './reducers';

import {StoreInner} from './type';

export const store:EnhancedStore<StoreInner> = configureStore({
    reducer,
    devTools: true,
});
