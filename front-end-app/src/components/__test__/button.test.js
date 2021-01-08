import React from 'react';
import { render, cleanup} from '@testing-library/react';
import Button from './../button/button';
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";


afterEach(cleanup);

describe("Tests for the button component", () => {
    test("passes label correctly", () => {
        const {getByTestId} = render(<BrowserRouter><Button label="test"/></BrowserRouter>);
        expect(getByTestId('button')).toHaveTextContent("test");
    });
    
    test("passes label correctly", () => {
        const {getByTestId} = render(<BrowserRouter><Button label="button text"/></BrowserRouter>);
        expect(getByTestId('button')).toHaveTextContent("button text");
    });
  });