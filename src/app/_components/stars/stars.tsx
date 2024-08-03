'use client';
import React from 'react';
import './stars.scss';

interface FlickeringStarsProps {
    numberOfStars?: number;
}

export default function FlickeringStars({ numberOfStars = 400 }) {

    const colors: string[] = ["white", "#FEFFD7"];
    const timing: string[] = ["ease", "ease-in-out", "ease-in", "ease-out"];

    const generateStars = (): JSX.Element[] => {
        const boxes: JSX.Element[] = [];
        for (let star = 0; star < numberOfStars; star++) {
            const time = Math.random() * 6 + 1;
            const starBlur = Math.random() - 0.7;
            const starColor = colors[Math.floor(Math.random() * colors.length)];
            const starTiming = timing[Math.floor(Math.random() * timing.length)];
            const heightWidth = `${Math.ceil(Math.random() * 60) + 25}%`;
            const bottom = `${Math.floor((Math.random() * 2 - 1) * 70)}%`;
            const right = `${Math.floor((Math.random() * 2 - 1) * 70)}%`;

            boxes.push(
                <div className="cell" key={star}>
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
        }
        return boxes;
    };

    return (
        <div className="grid is-col-min-2 is-gap-0 dark-sky-background" style={{ overflow: 'hidden' }}>
            {generateStars()}
        </div>
    );
};

