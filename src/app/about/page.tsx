'use client'
import React, { useState } from "react"

export default function AboutMe() {
    const [isOpen, setIsOpen] = useState(false)

    const handleOnClick = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className="box">
            <p className="title is-size-0 is-size-1-mobile">ABOUT ME</p>
            <p className="subtitle is-size-3 is-size-4-mobile has-text-color-dark-gray">I like making silly things</p>
            <p>Hi! I'm Renée Draper. I enjoy creating all sorts of things, from silly websites like this to collages to moth costumes.
                If I'm not spending my time making something, I'm usually lifting weights, roller skating, going on wee walkabouts, or something else active.</p>
            <br></br>
            <p>When it comes to coding, I really enjoy front-end work, which certainly can't come as a surprise. I care about clean code and architecture,
                responsive and accessible designs, and always pushing myself to learn new things.</p>
            <p className="has-text-weight-bold mt-4 p-2 pretty-border-black">"Renée so so good at coding, plus she's just a lovely person to have around" -Robert C. Martin 
            <span className="is-clickable" onClick={handleOnClick}>*</span></p>
            {isOpen ?<p className="is-size-7 mt-4 p-2 ">*Ok, fine he didn't say this...probably.</p> : <span></span>}

        </div>

    )
}