import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

import App from '../App';
import Router from '../router';
import '@testing-library/jest-dom/extend-expect';

jest.mock('../header/Header', () => () => <div>HeaderMock</div>);
jest.mock('../pages/home/Home', () => () => <div>HomeMock</div>);
jest.mock('../pages/facts/Facts', () => () => <div>FactsMock</div>);
jest.mock('../pages/pageNotFound/PageNotFound', () => () => <div>PageNotFoundMock</div>);

describe("Tests for router", () => {
    test("Should render page header and Home on default route", () => {

        render(
        <App />
        );
        
        expect(screen.getByText("HeaderMock")).toBeInTheDocument();
        expect(screen.getByText("HomeMock")).toBeInTheDocument();
      
    });

    test("Should render Facts page on /facts route", () => {

        render(
        <MemoryRouter initialEntries={['/facts']}>
            <Router />
        </MemoryRouter>
        );
        
        expect(screen.getByText("FactsMock")).toBeInTheDocument();
      
    });

    test("Should render PageNotFound on any other route (/invalid)", () => {
        
        render(
        <MemoryRouter initialEntries={['/invalid']}>
            <Router />
        </MemoryRouter>
        );
        
        expect(screen.getByText("PageNotFoundMock")).toBeInTheDocument();
    });

    test("Should render PageNotFound on any other route (/home2)", () => {
        
        render(
        <MemoryRouter initialEntries={['/home2']}>
            <Router />
        </MemoryRouter>
        );
        
        expect(screen.getByText("PageNotFoundMock")).toBeInTheDocument();
    });
});
