import { render, screen } from '@testing-library/react';
import SearchBar from '../SearchBar';

describe('Search bar component', () => {
    it('has a placeholder when no value is provided', () => {
        render(<SearchBar/>);
        const placeholderText = screen.queryByPlaceholderText(/search by name/i);
        expect(placeholderText).toBeInTheDocument();
    })

    it('shows the searchTerm when it is provided', () => {
        render(<SearchBar searchTerm={('Test searchTerm')}/>);
        //to check what's being inputted use display value vs. getByText
        const placeholderText = screen.getByDisplayValue(/Test searchTerm/i);
        expect(placeholderText).toBeInTheDocument();
    })
})