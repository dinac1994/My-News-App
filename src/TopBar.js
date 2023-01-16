import React from 'react'
import './index.css'

function topBar() {
    return (
        <div className="top-bar">
            <div className="make-homepage">
                Make MyNews your homepage
            </div>
            <div className="discover-trends">
                Every day discover what's trending on the internet!
            </div>
            <div className="buttons">
                <div className="get-button">
                    GET
                </div>
                <div className="no-thanks-button">
                    No, thanks
                </div>
            </div>

        </div>
    )
}

export default topBar;