import {bindActionCreators, ActionCreatorsMapObject} from '@reduxjs/toolkit';
import {store} from './index';

const {dispatch: d} = store;

export const bindActions = <M extends ActionCreatorsMapObject>(actionCreator:M):M =>
    bindActionCreators(actionCreator, d);
