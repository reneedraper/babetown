'use client'
import React, { useState } from 'react'
import { useSpring, animated, config } from '@react-spring/web'
import useMeasure from 'react-use-measure'

export default function ExpandableCard({ title = '', content = <div></div>}) {
    const [isExpanded, setIsExpanded] = useState(false)
    const [ref, { bottom }] = useMeasure()
    const calcHeight = window.innerHeight - bottom - 30

    const [styles, api] = useSpring(() => ({
        from: {
            height: 0
        }
    }))

    const expandOrCollapse = () => {
        setIsExpanded(!isExpanded)
        api.start({
            from: {
                height: isExpanded ? calcHeight : 0
            },
            to: {
                height: !isExpanded ? calcHeight : 0
            },
        })

    }

    return (
        <>

            <div className="card">
                <header ref={ref} className="card-header is-shadowless">
                    <p className="card-header-title">{title}</p>
                    <button className="card-header-icon" aria-label="more options" onClick={expandOrCollapse}>
                        <span className="icon material-symbols-outlined " aria-hidden="true">
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




