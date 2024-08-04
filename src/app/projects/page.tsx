'use client'
import React from "react";
import Card from "../_components/card";
import GetCompliment from "../_components/compliment/compliment-generator";
import FlickeringStars from "../_components/stars/stars";
import Connect4 from "../_components/checkers/connect4";


export default function Projects() {
    return (
        <>
            <div className="box has-text-black content">
                <p className="title is-size-0 is-size-1-mobile is-uppercase">Projects</p>
                <p className="subtitle is-size-4 is-size-5-mobile mb-1">
                    Code Snippets
                </p>

                <Card title="Leslie Knope Compliment Generator" content={<GetCompliment />}>
                </Card>
                <Card title="Flickering Stars" content={<FlickeringStars />}>
                </Card>
                <Card title="Connect 4" content={<Connect4 />}>
                </Card>

                {/* <a aria-roledescription="button" href="https://codesandbox.io/p/sandbox/leslie-knope-compliment-generator-f7mq88?file=%2Fsrc%2FApp.tsx" target="_blank" className="button is-warning mt-3">
                    <span>Crunchatizer/Chompers Code</span>
                    <span className="icon material-symbols-outlined is-size-5">open_in_new</span>
                </a> */}


                <p className="subtitle is-size-4 is-size-5-mobile mb-1 mt-3">
                    Current Projects
                </p>
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
            </div >

        </>
    )
}