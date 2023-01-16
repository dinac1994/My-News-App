import React from 'react'
import './index.css'
import Article from './Article';
import LatestNews from './LatestNews';

function CategoryNews(props) {
    return (
        <div className="news">
            <div className="news-upper-block">
                <div className="first-block">
                    {props.data.filter((__, index) => index < 4).map(item =>
                        <Article
                            imageSource={item.multimedia ? item.multimedia[0].url : item.image}
                            section={item.section}
                            title={item.title}
                            authors={item.byline ? item.byline.substring(3): item.authors}
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
                        imageSource={item.multimedia ? item.multimedia[0].url : item.image}
                        section={item.section}
                        title={item.title}
                        authors={item.byline ? item.byline.substring(3): item.authors}
                        favourites={props.favourites}
                        setFavourites={props.setFavourites}
                        category={props.category}
                        search={props.search} />
                )}
            </div>
        </div>
    )
}
export default CategoryNews;