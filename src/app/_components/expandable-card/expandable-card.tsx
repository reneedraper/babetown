'use client'
import React from 'react'
import './expandable-card.scss';

export default function ExpandableCard({ title = '', content = <div></div>, backgroundClass = 'has-background-white', isExpanded = false, onToggle = () => {} }) {


    return (
        <>
            <div className="card mb-3">
                <header className="card-header is-shadowless is-clickable" onClick={onToggle}>
                    <h1 className="card-header-title mb-0">{title}</h1>
                    <button className="card-header-icon" aria-label="expand" >
                        <span className="icon material-symbols-outlined" aria-hidden="true">
                            keyboard_arrow_down
                        </span>
                    </button>
                </header >
                    <div className={`card-content ${isExpanded && 'is-expanded'} animate-card p-0 m-0 ${backgroundClass}`} >
                    {content}
                </div>



            </div >
        </>
    )
}




