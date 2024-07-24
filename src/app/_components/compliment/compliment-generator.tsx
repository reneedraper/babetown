'use client'
import React, { useState } from 'react'
import Card from '@/app/_components/card'
import { complimentWords } from "./words"

export default function GetCompliment() {
    const [compliment, getKnopeCompliment] = useState('Click here for a well-deserved compliment à la Leslie Knope')

    const handleOnMouseDown = () => () => {
        getKnopeCompliment(generateCompliment())
    }

    return (
        <>
            <div className="columns">
                <div className="column is-half mt-3">
                    <div className="is-max-width-500 mx-auto is-clickable" onMouseDown={handleOnMouseDown()}>
                        <div className="box has-text-centered is-size-5 is-size-6-mobile has-text-weight-semibold mb-2 grid is-align-items-center pretty-border-black" style={{ height: '150px' }} >
                            <p>Hello, friend! {compliment}.</p>
                        </div>
                        <div className="buttons is-centered">
                            <a role="button" className="mx-auto my-3 button is-info" href="https://codesandbox.io/p/sandbox/leslie-knope-compliment-generator-f7mq88?file=%2Fsrc%2FApp.tsx" target="_blank" >
                                <span>View Code Sandbox</span>
                                <span className="icon material-symbols-outlined is-size-5">open_in_new</span>
                            </a>
                        </div>
                    </div>


                </div>
                <div className="column">
                    <div className="is-max-width-500 mx-auto py-2">
                        <figure className="image is-16by9">
                            <iframe
                                title="Leslie Knope GIF"
                                className="has-ratio"
                                width="500"
                                height="250"
                                src="https://giphy.com/embed/tvWi7KBvkTLP2"
                                frameBorder="0"
                            ></iframe>
                        </figure>
                    </div>
                </div>
            </div>
        </>
    )
}

function getRandomElementsFromList(array: string[], count: number) {
    const max = Math.min(count, array.length);
    const selected = new Set();
    while (selected.size < max) {
        const randomIndex = Math.floor(Math.random() * array.length);
        selected.add(array[randomIndex]);
    }
    return Array.from(selected);
}

function getIndefiniteArticle(word: string) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    return vowels.has(word[0].toLowerCase()) ? 'an' : 'a';
}

const generateCompliment = ({ adjectives, nouns } = complimentWords) => {
    const numAdjectives = Math.floor(Math.random() * 3) + 1;
    const selectedAdjectives = getRandomElementsFromList(adjectives, numAdjectives).join(', ');
    const indefiniteArticle = getIndefiniteArticle(selectedAdjectives);
    const selectedNoun = getRandomElementsFromList(nouns, 1)[0];

    return `You are ${indefiniteArticle} ${selectedAdjectives} ${selectedNoun}`;
}


