import {
    Provider as ProviderRedux
} from 'react-redux';
import React from 'react';
import {
    ThemeProvider
} from 'styled-components';

// local
import {theme} from '../../config';

export const Provider = ({store, children}) => (
    <ProviderRedux store={store}>
        <ThemeProvider  theme={theme}>
            {children}
        </ThemeProvider>
    </ProviderRedux>
);