import React from 'react'
import './SearchBar.scss'

const SearchBar = ({searchTerm, setSearchTerm}) => {

    const updateSearchTerm = (event) => {
        setSearchTerm(event.target.value)
    }
    
    return (
        <input 
        className="searchBar" 
        placeholder="Search by name"
        value={searchTerm}
        onChange={updateSearchTerm}
        />

    )
}


export default SearchBar;