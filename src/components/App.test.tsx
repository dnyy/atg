import { server, rest } from '../testServer';
import {
  render,
  fireEvent,
  waitFor,
  waitForElementToBeRemoved,
  screen,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  it.only('should make sure input field starts out empty and can take in user input', () => {
    render(<App />);
    screen.debug();
    const inputField = screen.getByRole('textbox');
    expect(inputField).toBeInTheDocument();
    expect(inputField).toHaveValue('');

    userEvent.type(inputField, 'V75');
    expect(inputField).toHaveValue('V75');
  });
  it('renders correctly', () => {
    const { queryByTestId } = render(<App />);
    expect(queryByTestId('wrapper')).toBeTruthy();
  });

  it('handles server error', async () => {
    const mockTypingEvent = {
      target: {
        value: 'Nope',
      },
    };
    server.use(
      rest.get('/products/V75', (req, res, ctx) => {
        return res(ctx.status(404));
      })
    );

    const { queryByPlaceholderText } = render(<App />);
    const searchInput = queryByPlaceholderText('Speltyp') as HTMLInputElement;
    fireEvent.change(searchInput, mockTypingEvent);
    fireEvent.click(screen.getByText('Sök'));
    await waitFor(() => screen.getByRole('alert'));

    expect(screen.getByRole('alert')).toHaveTextContent(
      'Något gick fel, kontrollera speltyp och försök igen'
    );
  });

  it('loads content', async () => {
    const mockTypingEvent = {
      target: {
        value: 'V75',
      },
    };
    const { queryByPlaceholderText } = render(<App />);
    const searchInput = queryByPlaceholderText('Speltyp') as HTMLInputElement;
    fireEvent.change(searchInput, mockTypingEvent);
    fireEvent.click(screen.getByText('Sök'));

    await waitFor(() => screen.getByRole('heading'));
    expect(screen.getByRole('heading')).toHaveTextContent('Hämtar spel');
    await waitForElementToBeRemoved(() => screen.getByRole('heading'));
  });
});
