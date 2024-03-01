import {StoreInner} from '../type';
import {Reducer} from '@reduxjs/toolkit';

import {example} from './example';

type ReducerWrap = {
    [K in keyof StoreInner]:Reducer<StoreInner[K]>
};

export const reducer:ReducerWrap = {
    example
};
