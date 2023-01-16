import React from 'react'
import './index.css'
import { useEffect } from 'react'
import favourites from './Icons/star.png'

function Article(props) {
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
        <div className="article" >
            {props.imageSource && <img src={props.imageSource} className="article-image" />}
            <div className="article-category">{props.section !== "technology" ? props.section.toUpperCase() : "TECH"}</div>
            <div className="article-title">{props.title}</div>
            <div className="article-authors">{props.authors}</div>
            {(props.category !== "favourites" || (props.search !== "" && props.category === "favourites")) &&
                <button
                    className="favourite-button"
                    type="button"
                    onClick={() => handleClick()}>
                    <img src={favourites} className="favourite-icon" />
                </button>
            }
        </div>
    )
}

export default Article;