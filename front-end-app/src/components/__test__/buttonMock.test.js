import React from 'react';
import { render, screen} from '@testing-library/react';
import Button from './../button/button';
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import App from './../../App';

jest.mock('./../button/button', () => () => <div>ButtonMock</div>);

describe("Tests for the button component using jest mock", () => {
    test('Should render buttons successfully', () => {
        render(<App />);
        expect(screen.getByText("ButtonMock")).toBeInTheDocument();
      });
    
      test("Should render successfully within a BrowserRouter", () => {
          render(
              <BrowserRouter>
                  <Button />
              </BrowserRouter>);
          expect(screen.getByText("ButtonMock")).toBeInTheDocument();    
      });
  });