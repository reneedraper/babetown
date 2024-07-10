'use client'
import React from "react"

import Link from 'next/link';


export default function Projects() {
    return (
        <>
            <div className="columns">
                <div className="column">
                    <div className="box has-text-black content">
                        <p className="title is-size-0 is-size-1-mobile is-uppercase">Projects</p>
                        <p className="subtitle is-size-4 is-size-5-mobile mb-1">
                            Code Related Things
                        </p>
                        <ul className="mt-1">
                            <li className="li">
                                <Link href="projects/compliment">
                                Leslie Knope Compliment Generator
                                </Link>
                            </li>
                            <li className="li" >
                                <Link href="projects/chomp">Chomper aka Crunchatize Me Cap'n</Link>
                            </li>
                            <li className="li" >
                                <span>This silly lil website. It started from the compliment generator I built years ago using 
                                    create-react-app because I wanted to play with Cloudflare workers. Then I got laid 
                                    off a few weeks ago (in May 2024) and spent a couple days making this website to reorient myself with React after working with Angular
                                    for a year. It's still pretty basic, but keep coming back for new updates!
                                </span>
                            </li>
                        </ul>
                        <p className="subtitle mb-1 mt-3">
                            Coming Soon!
                        </p>
                        <ul>
                            <li>
                                Mood-based theme picker
                            </li>
                            <li>
                                silly pure css things (like a famous painting entirely of css)
                            </li>
                            <li>
                                rewriting this site with next.js (and typescript because I prefer it)
                            </li>
                            <li>
                                adding more fun animations with React Spring
                            </li>
                             <li>
                                More accessibility features (large text options, screeen reader friendly)
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </>
    )
}