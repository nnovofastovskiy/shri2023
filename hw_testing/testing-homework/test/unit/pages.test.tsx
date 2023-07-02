import React from 'react';
import { it, describe, expect } from '@jest/globals';

import { render, within, getByText, screen } from '@testing-library/react';

import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Application } from '../../src/client/Application'
import { initStore } from '../../src/client/store';
import { ExampleApi, CartApi } from '../../src/client/api';
import { data } from './data';

describe('в магазине должны быть страницы:', () => {


    it('главная', () => {
        const basename = data.basename;
        const api = new ExampleApi(basename);
        const cart = new CartApi();
        const store = initStore(api, cart);
        const application = (
            <MemoryRouter initialEntries={[data.pages.home]}>
                <Provider store={store}>
                    <Application />
                </Provider>
            </MemoryRouter>
        );
        const homePage = render(application);
        expect(homePage).toMatchSnapshot();
    });
    it('каталог', () => {
        const basename = data.basename;
        const api = new ExampleApi(basename);
        const cart = new CartApi();
        const store = initStore(api, cart);
        const application = (
            <MemoryRouter initialEntries={[data.pages.catalog]}>
                <Provider store={store}>
                    <Application />
                </Provider>
            </MemoryRouter>
        );
        const homePage = render(application);
        expect(homePage).toMatchSnapshot();
    });
    it('условия доставки', () => {
        const basename = data.basename;
        const api = new ExampleApi(basename);
        const cart = new CartApi();
        const store = initStore(api, cart);
        const application = (
            <MemoryRouter initialEntries={[data.pages.delivery]}>
                <Provider store={store}>
                    <Application />
                </Provider>
            </MemoryRouter>
        );
        const homePage = render(application);
        expect(homePage).toMatchSnapshot();
    });
    it('контакты', () => {
        const basename = data.basename;
        const api = new ExampleApi(basename);
        const cart = new CartApi();
        const store = initStore(api, cart);
        const application = (
            <MemoryRouter initialEntries={[data.pages.contacts]}>
                <Provider store={store}>
                    <Application />
                </Provider>
            </MemoryRouter>
        );
        const homePage = render(application);
        expect(homePage).toMatchSnapshot();
    });
});
