import React from 'react'
import './index.css'
import Article from './Article';
import LatestNews from './LatestNews';

function SearchNews(props) {
    return (
        <div className="news">
            <div className="news-upper-block">
                <div className="first-block">
                    {props.data.filter((__, index) => index < 4).map(item =>
                        <Article
                            imageSource={item.urlToImage ? item.urlToImage : item.image}
                            section={""}
                            title={item.title}
                            authors={item.author}
                            favourites={props.favourites}
                            setFavourites={props.setFavourites}
                            category={props.category}
                            search={props.search} />
                    )}
                </div>
                <LatestNews />
            </div>
            <div className="second-block">
                {props.data.filter((__, index) => index >= 4).map(item =>
                    <Article
                        imageSource={item.urlToImage ? item.urlToImage : item.image}
                        section={""}
                        title={item.title}
                        authors={item.author}
                        favourites={props.favourites}
                        setFavourites={props.setFavourites}
                        category={props.category}
                        search={props.search} />
                )}
            </div>
        </div>
    )
}

export default SearchNews;