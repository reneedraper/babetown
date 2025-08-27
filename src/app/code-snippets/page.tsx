'use client'
import React, { lazy, useEffect, useState } from "react";
import Card from "../_components/expandable-card/expandable-card";

const GetCompliment = lazy(() => import("../_components/compliment/compliment-generator"));
const FlickeringStars = lazy(() => import("../_components/stars/stars"));
const Connect4 = lazy(() => import("../_components/checkers/connect4"));


export default function CodeSnippets() {
    const [activeCard, setActiveCard] = useState<string | null>(null);

    useEffect(() => {
        const hash = window.location.hash.substring(1);
        setActiveCard(hash || null);

        const handleHashChange = () => {
            const newHash = window.location.hash.substring(1);
            setActiveCard(newHash || null);
        };

        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const handleCardClick = (cardId: string) => {
        if (activeCard === cardId) {
            window.location.hash = '';
            setActiveCard(null);
        } else {
            window.location.hash = cardId;
            setActiveCard(cardId);
        }
    };
    return (
        <>
            <div className="has-text-black content">
                <section className='box mb-3'>
                    <h2 className="subtitle is-size-4 is-size-5-mobile mb-1">
                        Code Snippets</h2>
                </section>
                <Card
                    title="Leslie Knope Compliment Generator"
                    content={activeCard === 'compliment' ? <GetCompliment /> : undefined}
                    isExpanded={activeCard === 'compliment'}
                    onToggle={() => handleCardClick('compliment')}
                />
                <Card
                    title="Flickering Stars"
                    content={activeCard === 'stars' ? <FlickeringStars /> : undefined}
                    isExpanded={activeCard === 'stars'}
                    onToggle={() => handleCardClick('stars')}
                />
                <Card
                    title="Connect 4"
                    content={activeCard === 'connect4' ? <Connect4 /> : undefined}
                    isExpanded={activeCard === 'connect4'}
                    onToggle={() => handleCardClick('connect4')}
                />
                {/* <Card title="Leslie Knope Compliment Generator" content={<GetCompliment />} >
                </Card>
                <Card title="Flickering Stars" content={<FlickeringStars />}>
                </Card>
                <Card title="Connect 4" content={<Connect4 />}>
                </Card> */}

                {/* <a aria-roledescription="button" href="https://codesandbox.io/p/sandbox/leslie-knope-compliment-generator-f7mq88?file=%2Fsrc%2FApp.tsx" target="_blank" className="button is-warning mt-3">
                    <span>Crunchatizer/Chompers Code</span>
                    <span className="icon material-symbols-outlined is-size-5">open_in_new</span>
                </a> */}

                {/* <div className='box'>
                    <h2 className="subtitle is-size-4 is-size-5-mobile mb-1 mt-3">
                        Current Projects
                    </h2>
                    <ul>
                        <li>
                            <span>{`This silly lil website. It started from the compliment generator I built years ago using
                            create-react-app because I wanted to play with Cloudflare workers. Then I got laid
                            off a few weeks ago (in May 2024) and spent a couple days making this website to reorient myself with React after working with Angular
                            for a year. I then migrated from create-react-app to next.js and switched from js to typescript. Most of the feautures on this site will be 
                            animation and graphics based. I have a few older projects that I'm refactoring and will add code snippets here as I work on them.`}
                            </span>
                            <ul>
                                <li>
                                    {`Mood-based theme picker`}
                                </li>
                                <li>{`Flickering stars animation with js and css`}</li>
                                <li>{`Pure CSS art`}</li>
                                <li>
                                    {`More fun animations with React Spring, playing with three.js`}
                                </li>
                                <li>
                                    {`More accessibility features (large text options, screen reader friendly)`}
                                </li>
                            </ul>
                        </li>
                        <li>
                            {`I want to play with React Native so I'm working on building a simple reference app for the industry my sister works in.`}
                        </li>
                        <li>
                            {`A gym-buddy finder for the Salt Lake area.`}
                        </li>
                    </ul>
                </div > */}
            </div>
        </>
    )
}