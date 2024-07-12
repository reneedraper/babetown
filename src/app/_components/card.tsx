'use client'
import React, { useState } from 'react'
import { useSpring, animated, config } from '@react-spring/web'

export default function ExpandableCard({ title = '', content = <div></div> }) {
    const [isExpanded, setIsExpanded] = useState(false)

    const [styles, api] = useSpring(() => ({
        from: {
            y: 0,
            maxHeight: 0
        }
    }))

    const expandOrCollapse = () => {
        setIsExpanded(!isExpanded)
        api.start({
            from: {
                y: !isExpanded ? -12 : 0,
                maxHeight: isExpanded ? 1000 : 0
            },
            to: {
                y: isExpanded ? -12 : 0,
                maxHeight: !isExpanded ? 1000 : 0
            },
        })
    }

    return (
        <>

            <div className="card">
                <header className="card-header is-shadowless is-clickable" onMouseDown={expandOrCollapse}>
                    <p className="card-header-title mb-0">{title}</p>
                    <button className="card-header-icon" aria-label="more options" >
                        <span className="icon material-symbols-outlined" aria-hidden="true">
                            keyboard_arrow_down
                        </span>
                    </button>
                </header >
                <div className="card-content p-0 m-0" >
                    <animated.div style={{ overflow: "hidden", ...styles }} >
                        {content}
                    </animated.div>
                </div>
            </div >
        </>
    )
}




