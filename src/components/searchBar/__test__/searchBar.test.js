import { render, screen } from '@testing-library/react';
import SearchBar from '../SearchBar';

describe('Search bar component', () => {
    it('has a placeholder when no value is provided', () => {
        render(<SearchBar/>);
        const placeholderText = screen.queryByPlaceholderText(/search by name/i);
        expect(placeholderText).toBeInTheDocument();
    })
})