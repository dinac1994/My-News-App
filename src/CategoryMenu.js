import React from 'react'
import './index.css'
import exit from './Icons/x.svg'
import search_mobile from './Icons/Search.svg'
import CategoriesMobile from './CategoriesMobile'

function CategoryMenu(props) {
    return (
        <div className="category-menu-page">
            <div className="upper-exit-bar">
                <img src={exit} className="exit" onClick={() => props.setCategoryMenu(false)}/>
            </div>
            <div className="my-news-logo-menu-mobile">
                <div className="my-news-logo-1">My</div>
                <div className="my-news-logo-2">News</div>
            </div>
            <div className="search-news-bar-mobile">
                <img src={search_mobile} className="search-logo-mobile" />
                <input
                    className="input-search-mobile"
                    type="text"
                    placeholder="Search news"
                    onChange={e => props.setCurrentMobileSearch(e.target.value)}
                    onKeyPress={props.searchKeyword} />
            </div>
            <CategoriesMobile
                setCategory={props.setCategory}
                category={props.category}
                search={props.search}
                setCategoryMenu={props.setCategoryMenu}
                setSearch={props.setSearch}
                setNewsStatusMobile={props.setNewsStatusMobile} />
        </div>

    )
}

export default CategoryMenu;