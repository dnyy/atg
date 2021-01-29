import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Search from './Search';

describe('input value', () => {
  it('render input field and updates on change', () => {
    render(<Search onClick={jest.fn()} />);
    const inputField = screen.getByRole('textbox');
    expect(inputField).toBeInTheDocument();

    userEvent.type(inputField, 'v75');
    expect(inputField).toHaveValue('v75');
  });
  it('should check that the search button is disabled if input field is empty', () => {
    render(<Search onClick={jest.fn()} />);

    const inputField = screen.getByRole('textbox');
    userEvent.clear(inputField);

    const searchButton = screen.getByRole('button', { name: /sök/i });
    expect(searchButton).toBeDisabled();

    userEvent.type(inputField, 'V75');
    expect(searchButton).toBeEnabled();
  });
  it('should clear and focus on input when user clicks search button', () => {
    render(<Search onClick={jest.fn()} />);

    const inputField = screen.getByRole('textbox');
    userEvent.type(inputField, 'V75');

    const searchButton = screen.getByRole('button', { name: /sök/i });
    userEvent.click(searchButton);
    expect(inputField).toHaveValue('');
    expect(inputField).toHaveFocus();
  });
});
