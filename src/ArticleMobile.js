import React from 'react'
import './index.css'
import { useEffect } from 'react'
import favourites from './Icons/star.png'

function ArticleMobile(props) {
    const newFavouriteArticle = { image: props.imageSource, section: props.section, title: props.title, authors: props.authors }

    useEffect(() => {
        localStorage.setItem('favourites', JSON.stringify(props.favourites))
    }, [props.favourites])

    function handleClick() {
        const found = props.favourites.filter(item => JSON.stringify(item) === JSON.stringify(newFavouriteArticle))
        if (found.length === 0) {
            props.setFavourites([...props.favourites, newFavouriteArticle])
        }
    }

    return (
        <div className="article-mobile" >
            {props.imageSource && <img src={props.imageSource} className="article-image-mobile" />}
            <div className="article-category-mobile">{props.section !== "technology" ? props.section.toUpperCase() : "TECH"}</div>
            <div className="article-title-mobile">{props.title}</div>
            {(props.category !== "favourites" || (props.search !== "" && props.category === "favourites")) &&
                <button
                    className="favourite-button-mobile"
                    type="button"
                    onClick={() => handleClick()}>
                    <img src={favourites} className="favourite-icon-mobile" />
                </button>
            }
        </div>
    )
}

export default ArticleMobile;