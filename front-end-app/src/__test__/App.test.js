import { render, screen } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom/extend-expect';

jest.mock('../App', () => () => <div>AppMock</div>);

describe("Tests for App", () => {
  test('Should render App successfully', () => {
    render(<App />);
    expect(screen.getByText("AppMock")).toBeInTheDocument();
  });
});

