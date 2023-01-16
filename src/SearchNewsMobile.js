import React from 'react'
import './index.css'
import ArticleMobile from './ArticleMobile';

function SearchNewsMobile(props) {
    return (
        <div className="news-mobile">
            {props.data.map(item =>
                <ArticleMobile
                    imageSource={item.urlToImage ? item.urlToImage : ""}
                    section={""}
                    title={item.title ? item.title : ""}
                    authors={item.author ? item.author : ""} 
                    favourites={props.favourites}
                    setFavourites={props.setFavourites}
                    category={props.category}
                    search={props.search} />
            )}
        </div>
    )
}

export default SearchNewsMobile;