import React, { useState } from 'react'

import '../../stylesheets/SearchBar.css'

export const SearchBar = ({artistSearch}) => {
    const [searchTerm, setSearchTerm] = useState('')

    const onSearch = () => {
        artistSearch(searchTerm)
    }
    return (
        <form className="pb-2 mt-5">
           <div className="input-group mb-3">
            <input type="text" value={searchTerm} placeholder="Search here..." onChange={(e) => setSearchTerm(e.target.value)} className="form-control" aria-label="Search Artist" />
            <div className="input-group-append search-icon" onClick={onSearch}>
                <i className="fa fa-search pt-1"></i>
            </div>
            </div>
        </form>
        
    )
}

