'use client'
import React, { useState } from 'react'
import Card from '@/app/components/card'
import { complimentWords } from "./words"

export default function GetCompliment() {
    const [compliment, getKnopeCompliment] = useState('Click here for a well-deserved compliment à la Leslie Knope')

    const handleOnMouseDown = () => () => {
        getKnopeCompliment(generateCompliment())
    }

    return (
        <>
            {/* <div className="is-max-width-500 mx-auto mb-2 pretty-border-black">
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
            </div> */}
            <div className="box is-max-width-500 mx-auto p-2 mb-3 is-clickable" onMouseDown={handleOnMouseDown()}>
                <div className="has-text-black is-size-5 has-text-weight-semibold p-2">
                    <p>Hello, friend! {compliment}.</p>
                </div>
            </div>
            <Card title={'View Code'} content={<iframe src="https://codesandbox.io/embed/f7mq88?view=editor&module=%2Fsrc%2FApp.tsx"
                style={{ height: '500px', width: '100%', border: 0, borderRadius: '4px', overflow: 'scroll' }}
                title="leslie-knope-compliment-generator"
                allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            ></iframe >} />

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


