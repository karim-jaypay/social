import React, {useState, useRef} from 'react'
import { useClickAway } from "react-use";

import '../App.css'

import everest_logo from '../public/EverestCM.svg'

import en from '../public/languages/en.png'

export default function Header() {

    const [open, setOpen] = useState(false)

    const langD = ['English','Português','Español','简体中文']

    const langM = ['EN','PT','ES','CN']

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
                                    <img src={en} alt="language" /> {window.innerWidth > 800 ? langD[0] : langM[0]}
                                </button>
                                {open &&
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item pt" href="/pt/social">{window.innerWidth > 800 ? langD[1] : langM[1]}</a></li>
                                <li><a className="dropdown-item es" href="/es/social">{window.innerWidth > 800 ? langD[2] : langM[2]}</a></li>
                                <li><a className="dropdown-item zh" href="/zh/social">{window.innerWidth > 800 ? langD[3] : langM[3]}</a></li>
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
