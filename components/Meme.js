import React from "react"

export default function Meme() {
    return (
        <form className="meme--form">
            <input 
                type="text" 
                className="meme--input-1"
                value="Shut up"
            />
            <input 
                type="text"
                className="meme--input-2"
                value="and take my money"
            />
            <br />
            <button 
                type="button"
                className="meme--button"
            >
                Get a new meme image 🖼
            </button>
        </form>
    )
}