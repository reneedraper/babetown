'use client'
import React from 'react'
import './stars.scss';

export default function FlickeringStars({ numberOfStars = 500 }) {
    const colors = ["white", "#FEFFD7"];
    const timing = ["ease", "ease-in-out", "ease-in", "ease-out"]
    const boxes = Array.from({ length: numberOfStars }, (_, index) => {
        const time = Math.random() * 6 + 1;
        const starBlur = Math.random() - 0.7;
        const starColor = colors[Math.floor(Math.random() * colors.length)];
        const starTiming = timing[Math.floor(Math.random() * timing.length)];
        const heightWidth = `${Math.ceil(Math.random() * 60) + 25}%`;
        const bottom = `${Math.floor((Math.random() * 2 - 1) * 70)}%`;
        const right = `${Math.floor((Math.random() * 2 - 1) * 70)}%`;

        return (
            <div className="cell" key={index}>
                <div className="starWrapper" style={{ height: heightWidth, width: heightWidth, bottom, right }}>
                    <div style={{
                        animation: `animatedStar ${time}s ${starTiming} alternate infinite`,
                        color: starColor,
                        filter: `blur(${starBlur}rem)`,
                        height: heightWidth,
                        width: heightWidth
                    }}>
                        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="50,5 60,40 90,50 60,60 50,95 40,60 10,50 40,40" fill={starColor} />
                        </svg>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div className="grid is-col-min-2 is-gap-0" style={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}>
            {boxes}
        </div>)
}

