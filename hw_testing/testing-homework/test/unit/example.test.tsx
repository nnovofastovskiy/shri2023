import React from 'react';
import { it, describe, expect } from '@jest/globals';

import { render } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Application } from '../../src/client/Application'
import { initStore } from '../../src/client/store';
import { ExampleApi, CartApi } from '../../src/client/api';


// describe('Simple Test Case', () => {
it('В шапке есть ссылка на главную', () => {
    const basename = '/hw/store';
    const api = new ExampleApi(basename);
    const cart = new CartApi();
    const store = initStore(api, cart);
    const application = (
        <BrowserRouter basename={basename}>
            <Provider store={store}>
                <Application />
            </Provider>
        </BrowserRouter>
    );

    const { container } = render(application);

    console.log(container.outerHTML);

    // expect(container.textContent).toBe('example');
});
// });
