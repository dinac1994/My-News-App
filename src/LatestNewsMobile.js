import React, { useEffect } from 'react'
import './index.css'
import axios from 'axios'
import { useState } from 'react'

function LatestNewsMobile(props) {
    const [latestNews, setLatestNews] = useState([])
    const [offset, setOffset] = useState(0)

    function fetchLatestNews() {
        axios.get(`https://api.nytimes.com/svc/news/v3/content/all/all.json?page=1&api-key=9uNXtH4A2x3UsmjOdxHHlnGyAWeZG7a4&offset=${offset}&length=20`)
            .then(res => {
                setLatestNews([...latestNews, ...res.data.results])
                setOffset(offset + 20)
            }).catch(err => {
                console.log(err)
            })
    };

    useEffect(() => {
        fetchLatestNews()
    }, [])

    function handleClick() {
        fetchLatestNews()
    }

    if (latestNews.length === 0) {
        return <div className="loader"></div>
    }
    return (
        <div className="latest-news-widget-mobile">
            <div className="latest-news-header">
                <div className="circle-container">
                    <div className="larger-circle" />
                    <div className="smaller-circle" />
                </div>
                <div className="latest-news-title">Latest News</div>
            </div>
            <div className="list">
                {latestNews.map(item =>
                    <div className="latest-news-article">
                        <div className="time">{item.published_date.substring(11, 16)}</div>
                        <div className="title">{item.title}</div>
                    </div>
                )}
                <button className="see-older-news-mobile" onClick={() => handleClick()}>See older news!</button>
            </div>
        </div>
    )
}
export default LatestNewsMobile;