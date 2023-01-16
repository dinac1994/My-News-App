import React from 'react'
import './index.css'
import ArticleMobile from './ArticleMobile.js';

function CategoryNewsMobile(props) {
    return (
        <div className="news-mobile">
            {props.data.map(item =>
                <ArticleMobile
                    imageSource={item.multimedia ? item.multimedia[0].url : item.image}
                    section={item.section}
                    title={item.title}
                    authors={item.byline ? item.byline.substring(3) : item.authors}
                    favourites={props.favourites}
                    setFavourites={props.setFavourites}
                    category={props.category}
                    search={props.search} />
            )}
        </div>
    )
}
export default CategoryNewsMobile;