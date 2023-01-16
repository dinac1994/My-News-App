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

const highlightedStyle = {
    borderRadius: "5px",
    backgroundColor: "white",
    color: "#BB1E1E",
    opacity: "1"
}

const Style = {
    color: "#1D1D1B",
    opacity: "0.5"
}

function Categories(props) {
    return (
        <div className="categories">
            <button
                className="category"
                type="button"
                onClick={() => props.setCategory('home')}
                style={props.category === 'home' && props.search === '' ? highlightedStyle : Style}>
                <img src={home} className="icons" />
                <div className="category-text">Home</div>
            </button>
            <button
                className="category"
                type="button"
                onClick={() => props.setCategory('world')}
                style={props.category === 'world' && props.search === '' ? highlightedStyle : Style}>
                <img src={general} className="icons" />
                <div className="category-text">General</div>
            </button>
            <button
                className="category"
                type="button"
                onClick={() => props.setCategory('business')}
                style={props.category === 'business' && props.search === '' ? highlightedStyle : Style}>
                <img src={business} className="icons" />
                <div className="category-text">Business</div>
            </button>
            <button
                className="category"
                type="button"
                onClick={() => props.setCategory('health')}
                style={props.category === 'health' && props.search === '' ? highlightedStyle : Style}>
                <img src={health} className="icons" />
                <div className="category-text">Health</div>
            </button>
            <button
                className="category"
                type="button"
                onClick={() => props.setCategory('science')}
                style={props.category === 'science' && props.search === '' ? highlightedStyle : Style}>
                <img src={science} className="icons" />
                <div className="category-text">Science</div>
            </button>
            <button
                className="category"
                type="button"
                onClick={() => props.setCategory('sports')}
                style={props.category === 'sports' && props.search === '' ? highlightedStyle : Style}>
                <img src={sports} className="icons" />
                <div className="category-text">Sports</div>
            </button>
            <button
                className="category"
                type="button"
                onClick={() => props.setCategory('technology')}
                style={props.category === 'technology' && props.search === '' ? highlightedStyle : Style}>
                <img src={technology} className="icons" />
                <div className="category-text">Technology</div>
            </button>
            <button
                className="category"
                type="button"
                onClick={() => props.setCategory('favourites')}
                style={props.category === 'favourites' && props.search === '' ? highlightedStyle : Style}>
                <img src={favourites} className="icons" />
                <div className="category-text">Favourites</div>
            </button>
        </div>
    )
}

export default Categories;