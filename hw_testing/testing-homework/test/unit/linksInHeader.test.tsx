import React from 'react';
import { it, describe, expect } from '@jest/globals';

import { render, within, getByText, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Application } from '../../src/client/Application'
import { initStore } from '../../src/client/store';
import { ExampleApi, CartApi } from '../../src/client/api';


describe('Ссылки в шапке:', () => {


    it('в шапке отображаются ссылки на страницы магазина, а также ссылка на корзину', () => {
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

        const expectLinks = [
            '/hw/store/',
            '/hw/store/catalog',
            '/hw/store/delivery',
            '/hw/store/contacts',
            '/hw/store/cart',
        ]


        const links = Array.from(container.querySelectorAll('.navbar a'));
        // console.log('links', links);
        expect(links.map(link => link.getAttribute('href'))).toEqual(expectLinks);
    });
    it('название магазина в шапке должно быть ссылкой на главную страницу', () => {
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
        const navbar = container.querySelector('.navbar') as HTMLElement;
        const homeLink = getByText(navbar, 'Example store');
        // console.log('homeLink', homeLink.tagName);
        expect(homeLink.tagName).toEqual('A');
        expect(homeLink.getAttribute('href')).toEqual('/hw/store/');

        // const links = Array.from(container.querySelectorAll('.navbar a'));
        // console.log('links', links);
        // expect(links.map(link => link.getAttribute('href'))).toContain('/hw/store/');

        // expect(links).toBe('/hw/store/');


        // expect(container.textContent).toBe('example');
        screen.logTestingPlaygroundURL();
    });
});
