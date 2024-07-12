'use client'
import React from "react"

import Link from 'next/link';
import Card from "../_components/card";
import GetCompliment from "../_components/compliment/compliment-generator";
import { useState } from 'react';


export default function Projects() {


    return (
        <>
            <div className="box has-text-black content">
                <p className="title is-size-0 is-size-1-mobile is-uppercase">Projects</p>
                <p className="subtitle is-size-4 is-size-5-mobile mb-1">
                    Code Snippets
                </p>


                <Card title="Leslie Knope Compliment Generator" content={GetCompliment()}>
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
                            for a year. It\'s still pretty basic, but keep coming back for new updates!`}
                        </span>
                    </li>
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
                        adding more fun animations with React Spring, playing with three.js
                    </li>
                    <li>
                        More accessibility features (large text options, screeen reader friendly)
                    </li>
                </ul>

            </div >

        </>
    )
}