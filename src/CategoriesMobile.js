import React from 'react'
import './index.css'
import home from './Icons/Home.svg'
import general from './Icons/News.svg'
import business from './Icons/Business.svg'
import health from './Icons/Health.svg'
import science from './Icons/Science.svg'
import sports from './Icons/Sports.svg'
import technology from './Icons/Technology.svg'
import favourites from './Icons/star.png'

function CategoriesMobile(props) {

    function handleClick(category) {
        props.setCategory(category)
        props.setCategoryMenu(false)
        props.setNewsStatusMobile('Featured')
    }

    return (
        <div className="categories-mobile">
            <button
                className="category-mobile"
                type="button"
                onClick={() => handleClick('home')}>
                <img src={home} className="icons-mobile" />
                <div className="category-mobile-text">Home</div>
            </button>
            <button
                className="category-mobile"
                type="button"
                onClick={() => handleClick('world')}>
                <img src={general} className="icons-mobile" />
                <div className="category-mobile-text">General</div>
            </button>
            <button
                className="category-mobile"
                type="button"
                onClick={() => handleClick('business')}>
                <img src={business} className="icons-mobile" />
                <div className="category-mobile-text">Business</div>
            </button>
            <button
                className="category-mobile"
                type="button"
                onClick={() => handleClick('health')}>
                <img src={health} className="icons-mobile" />
                <div className="category-mobile-text">Health</div>
            </button>
            <button
                className="category-mobile"
                type="button"
                onClick={() => handleClick('science')}>
                <img src={science} className="icons-mobile" />
                <div className="category-mobile-text">Science</div>
            </button>
            <button
                className="category-mobile"
                type="button"
                onClick={() => handleClick('sports')}>
                <img src={sports} className="icons-mobile" />
                <div className="category-mobile-text">Sports</div>
            </button>
            <button
                className="category-mobile"
                type="button"
                onClick={() => handleClick('technology')}>
                <img src={technology} className="icons-mobile" />
                <div className="category-mobile-text">Technology</div>
            </button>
            <button
                className="category-mobile"
                type="button"
                onClick={() => handleClick('favourites')}>
                <img src={favourites} className="icons-mobile" />
                <div className="category-mobile-text">Favourites</div>
            </button>
        </div>
    )
}

export default CategoriesMobile;