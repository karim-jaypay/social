import React, {useState, useRef} from 'react'
import { useClickAway } from "react-use";

import '../App.css'

import everest_logo from '../public/Everest_Logo.png'

import en from '../public/en.png'

export default function Header() {

    const [open, setOpen] = useState(false)

    const ref = useRef()

    useClickAway(ref, () => setOpen(false));
    return (
        <header>
            <div className="container-fluid main-header">
            <div className="container">
                    <div className="row col-lg-12 column-section">
                        <div className="w-50 logotype">
                            <a href="/"><img className="header-logo" src={everest_logo} alt="logo"/></a>
                        </div>
                            <div  className="w-50 language">
                                <div ref={ref} className="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" onClick={() => setOpen(!open)}>
                                    <img src={en} /> English
                                </button>
                                {open &&
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item pt" href="/pt/social">Português</a></li>
                                <li><a class="dropdown-item es" href="/es/social">Español</a></li>
                                <li><a class="dropdown-item zh" href="/zh/social">简体中文</a></li>
                                </ul>
                                }
                                </div>
                            </div>
                </div>
            </div>
            </div>
        </header>
    )
}
