import React, {useState, useRef} from 'react'
import { useClickAway } from "react-use";

import '../App.css'

import everest_logo from '../public/EverestCM.svg'

import en from '../public/languages/en.png'

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
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" onClick={() => setOpen(!open)}>
                                    <img src={en} alt="language" /> EN
                                </button>
                                {open &&
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item pt" href="/pt/social">PT</a></li>
                                <li><a className="dropdown-item es" href="/es/social">ES</a></li>
                                <li><a className="dropdown-item zh" href="/zh/social">CN</a></li>
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
