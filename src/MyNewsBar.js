import React from 'react'
import './index.css'
import search from './Icons/Search.svg'
import { useState } from 'react'

function MyNewsBar(props) {
    const [currentSearch, setCurrentSearch] = useState('')

    function searchKeyword(event) {
        if (event.key === "Enter") {
            props.setSearch(currentSearch)
        }
    }

    return (
        <div className="news-bar">
            <div className="my-news-logo">
                <div className="my-news-logo-1">My</div>
                <div className="my-news-logo-2">News</div>
            </div>
            <div className="search-news-bar">
                <img src={search} className="search-logo" />
                <input
                    className="input-search"
                    type="text"
                    placeholder="Search news"
                    onChange={e => setCurrentSearch(e.target.value)} 
                    onKeyPress={searchKeyword} />
                <button
                    className="search-news-button"
                    type="button"
                    onClick={() => props.setSearch(currentSearch)}>SEARCH</button>
            </div>
        </div>
    )
}

export default MyNewsBar;