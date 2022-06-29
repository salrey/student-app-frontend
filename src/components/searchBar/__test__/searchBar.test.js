import { render, screen } from '@testing-library/react';
import SearchBar from '../SearchBar';

describe('Search bar component', () => {
    it('has a placeholder set to "Search by name"', () => {
        render(<SearchBar/>);
        const placeholderText = screen.queryByPlaceholderText(/Search by name/i);
        expect(placeholderText).toBeInTheDocument();
    })

    it('shows the searchTerm when it is provided', () => {
        render(<SearchBar searchTerm={('Samuel')}/>);
        //to check what's being inputted use display value vs. getByText
        const placeholderText = screen.getByDisplayValue(/Samuel/i);
        expect(placeholderText).toBeInTheDocument();
        //to check for value of element use .value on the element you're getting above
        expect(placeholderText.value).toEqual("Samuel");
    })
})