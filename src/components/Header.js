import React from 'react'

function Header() {
    return (
        <div className="title-bar">
        <div className="title-bar-text">Github profiles fetcher</div>
        <div className="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close"></button>
        </div>
        </div>
    )
}

export default Header
