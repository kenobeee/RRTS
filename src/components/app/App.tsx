import React from 'react';
import {Provider} from 'react-redux';

import BaseStyles from './Base.styled';
import {Home} from '@components/routes';

import {store} from '@store/index';

export const App = () => (
    <>
        <BaseStyles/>
        <Provider store={store}>
            <Home/>
        </Provider>
    </>
);