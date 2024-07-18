
'use client'

import React, { useState } from 'react';

import Link from 'next/link';
import CrunchatizeMeCapn from './_components/crunchatize/crunchatize';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <span className="navbar-item">
                        <Link className="navbar-item" href="/" onClick={() => setIsOpen(false)} >
                            <svg width="200px" viewBox="0 0 145 170" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="71" cy="85" rx="33" ry="82" fill="#ffdc5c" />
                                <g transform="translate(-40, -85) scale(1.1,1.05)">

                                    <circle cx=" 100" cy="90" r="9" fill="#cf900a" />
                                    <circle cx="102" cy="91" r="9" fill="none" stroke="orange" strokeWidth="2px" />

                                    <circle cx="82" cy="102" r="9" fill="#ab832c" />
                                    <circle cx="84" cy="103" r="9" fill="none" stroke="orange" strokeWidth="2px" />
                                    <circle cx="100" cy="110" r="9" fill="#cf900a" />
                                    <circle cx="102" cy="111" r="9" fill="none" stroke="orange" strokeWidth="2px" />
                                    <circle cx="118" cy="102" r="9" fill="#ab832c" />
                                    <circle cx="120" cy="103" r="9" fill="none" stroke="orange" strokeWidth="2px" />

                                    <circle cx="79" cy="122" r="9" fill="#cc7f0c" />
                                    <circle cx="81" cy="123" r="9" fill="none" stroke="orange" strokeWidth="2px" />
                                    <circle cx="100" cy="130" r="9" fill="#cf900a" />
                                    <circle cx="102" cy="131" r="9" fill="none" stroke="orange" strokeWidth="2px" />
                                    <circle cx="121" cy="122" r="9" fill="#cf900a" />
                                    <circle cx="123" cy="123" r="9" fill="none" stroke="orange" strokeWidth="2px" />

                                    <circle cx="78" cy="142" r="9" fill="#ab832c" />
                                    <circle cx="80" cy="143" r="9" fill="none" stroke="orange" strokeWidth="2px" />
                                    <circle cx="100" cy="150" r="9" fill="#ab832c" />
                                    <circle cx="102" cy="151" r="9" fill="none" stroke="orange" strokeWidth="2px" />
                                    <circle cx="122" cy="142" r="9" fill="#cc7f0c" />
                                    <circle cx="124" cy="143" r="9" fill="none" stroke="orange" strokeWidth="2px" />

                                    <circle cx="78" cy="162" r="9" fill="#ab832c" />
                                    <circle cx="80" cy="163" r="9" fill="none" stroke="orange" strokeWidth="2px" />
                                    <circle cx="100" cy="170" r="9" fill="#ab832c" />
                                    <circle cx="102" cy="171" r="9" fill="none" stroke="orange" strokeWidth="2px" />
                                    <circle cx="122" cy="162" r="9" fill="#cf900a" />
                                    <circle cx="124" cy="163" r="9" fill="none" stroke="orange" strokeWidth="2px" />

                                    <circle cx="79" cy="182" r="9" fill="#cf900a" />
                                    <circle cx="81" cy="183" r="9" fill="none" stroke="orange" strokeWidth="2px" />
                                    <circle cx="100" cy="190" r="9" fill="#cf900a" />
                                    <circle cx="102" cy="191" r="9" fill="none" stroke="orange" strokeWidth="2px" />
                                    <circle cx="121" cy="182" r="9" fill="#cf900a" />
                                    <circle cx="123" cy="183" r="9" fill="none" stroke="orange" strokeWidth="2px" />

                                    <circle cx="80" cy="202" r="9" fill="#cf900a" />
                                    <circle cx="82" cy="203" r="9" fill="none" stroke="orange" strokeWidth="2px" />
                                    <circle cx="100" cy="210" r="9" fill="#cf900a" />
                                    <circle cx="102" cy="211" r="9" fill="none" stroke="orange" strokeWidth="2px" />
                                    <circle cx="120" cy="202" r="9" fill="#cf900a" />
                                    <circle cx="122" cy="203" r="9" fill="none" stroke="orange" strokeWidth="2px" />

                                    <circle cx="82" cy="222" r="9" fill="#cf900a" />

                                    <circle cx="100" cy="230" r="9" fill="#cf900a" />
                                    <circle cx="102" cy="231" r="9" fill="none" stroke="orange" strokeWidth="2px" />
                                    <circle cx="118" cy="222" r="9" fill="#cf900a" />

                                    <g transform="scale(2.1,1.1) translate(-15 25) rotate(-3) ">
                                        <path d="M 50,40 C 30,10 70,10 50,150z" fill="#4d7520" transform="translate(-17 53) rotate(-7)" stroke="#2a4709" strokeWidth="1px" />
                                        <path d="M 40 105 C 40 170, 30 170, 50 200z" fill="#759156" stroke="#2a4709" strokeWidth="1px" transform="translate(-2 1) rotate(-1)" />
                                    </g>

                                    <g transform="scale(-2.1,1.1) translate(-112 25) rotate(-3) ">
                                        <path d="M 50,40 C 30,10 70,10 50,150z" fill="#4d7520" transform="translate(-17 53) rotate(-7)" stroke="#2a4709" strokeWidth="1px" />
                                        <path d="M 40 105 C 40 170, 30 170, 50 200z" fill="#759156" stroke="#2a4709" strokeWidth="1px" transform="translate(-2 1) rotate(-1)" />
                                    </g>
                                </g>

                            </svg>
                        </Link>
                    </span>


                    <span role="button" className={isOpen ? "navbar-burger is-active" : "navbar-burger"} aria-label="menu" aria-expanded="false"
                        data-target="navbarBasicExample" onClick={() => setIsOpen(!isOpen)}>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </span>
                </div>


                <div id="navbarBasicExample" className={isOpen ? "navbar-menu is-active" : "navbar-menu"}  >
                    <div className="navbar-start" >
                        <Link className="navbar-item" href="/" onClick={() => setIsOpen(false)} >
                            Home
                        </Link>
                        <Link className="navbar-item" href="/about" onClick={() => setIsOpen(false)} >
                            About
                        </Link>
                        <Link className="navbar-item" href="/projects" onClick={() => setIsOpen(false)} >
                            Projects
                        </Link>

                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <CrunchatizeMeCapn />
                        </div>
                    </div>
                </div>
            </nav>

        </>)
}