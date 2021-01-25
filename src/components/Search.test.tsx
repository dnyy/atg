import { render, fireEvent } from '@testing-library/react';
import Search from './Search';

it('renders correctly', () => {
  const onClick = jest.fn()
  const { queryByTestId, queryByPlaceholderText} = render(<Search onClick={onClick} />);

  expect(queryByTestId('searchButton')).toBeTruthy();
  expect(queryByPlaceholderText('Speltyp')).toBeTruthy();
})

describe('input value', () => {
  it('updates on change', () => {
    const onClick = jest.fn();
    
    const { queryByPlaceholderText } = render(<Search onClick={onClick} />);
    const searchInput = queryByPlaceholderText('Speltyp') as HTMLInputElement;

    const mockTypingEvent = {
      target: {
        value: "V75"
      }
    }

    fireEvent.change((searchInput), mockTypingEvent);

    expect(searchInput.value).toBe("V75");
  });
})

describe('search button', () => {
  const mockTypingEvent = {
    target: {
      value: "V75"
    }
  }
  describe('with search input', () => {
    it('does not trigger search function', () => {
      const onClick = jest.fn()
      const { queryByTestId } = render(<Search onClick={onClick} />);
      
      fireEvent.click(queryByTestId('searchButton'));
      expect(onClick).not.toBeCalled();
    });
  });

  describe('with data in search input', () => {
    it('triggers the onClick search function', () => {
      const onClick = jest.fn();
      const { queryByTestId, queryByPlaceholderText } = render(<Search onClick={onClick} />);
      
      const searchInput = queryByPlaceholderText('Speltyp') as HTMLInputElement;
      fireEvent.change((searchInput), mockTypingEvent);

      fireEvent.click(queryByTestId('searchButton'));
      expect(onClick).toHaveBeenCalled();
    })
  })
  
  
})
