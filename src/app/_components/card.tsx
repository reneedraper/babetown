'use client'
import React, { useState } from 'react'
import { useSpring, animated, config } from '@react-spring/web'

export default function ExpandableCard({ title = '', content = <div></div> }) {
    const [isExpanded, setIsExpanded] = useState(false)

    const [cardStyles, animtateCardHeight] = useSpring(() => ({
        from: {
            maxHeight: isExpanded ? 1000 : 0
        }
    }))

    const [headerStyles, animateHeaderRadius] = useSpring(() => ({
        from: {
            borderBottomLeftRadius: isExpanded ? 0 : 12,
            borderBottomRightRadius: isExpanded ? 0 : 12
        }
    }))

    const expandOrCollapse = () => {
        setIsExpanded(!isExpanded)
        animateHeaderRadius.start({
            to:
            {
                borderBottomLeftRadius: isExpanded ? 12 : 0,
                borderBottomRightRadius: isExpanded ? 12 : 0
            }
        })
        animtateCardHeight.start({
            to: {
                maxHeight: !isExpanded ? 1000 : 0
            }
        })
    }



    return (
        <>
            <div className="card mb-3">
                <animated.header className="card-header is-shadowless is-clickable has-background-danger-light" style={{ ...headerStyles }} onMouseDown={expandOrCollapse}>
                    <p className="card-header-title mb-0">{title}</p>
                    <button className="card-header-icon" aria-label="more options" >
                        <span className="icon material-symbols-outlined" aria-hidden="true">
                            keyboard_arrow_down
                        </span>
                    </button>
                </animated.header >
                <div className="card-content p-0 m-0" >
                    <animated.div style={{ overflow: "hidden", ...cardStyles }} >
                        {content}
                    </animated.div>
                </div>
            </div >
        </>
    )
}




