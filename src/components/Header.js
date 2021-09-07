import React, {useState, useRef} from 'react'
import { Link, useLocation } from 'react-router-dom';
import { useClickAway } from "react-use";

import '../App.css'

import everest_logo from '../public/EverestCM.svg'

import en from '../public/languages/en.png'
import pt from '../public/languages/pt-pt.png'
import es from '../public/languages/es.png'
import zh from '../public/languages/zh.png'

export default function Header() {

    const location = useLocation()

    const [open, setOpen] = useState(false)
    const languages = [
        {id: 0, desktop:'English',mobile:'EN', img: en},
        {id: 1, desktop:'Português',mobile:'PT', img: pt},
        {id: 2, desktop:'Español',mobile:'ES', img: es},
        {id: 3, desktop:'简体中文',mobile:'CN', img: zh}
    ]
    const [defaultLanguage, setDefaultLanguage] = useState(languages.filter(item => item.mobile.toLowerCase() === location.pathname.split('/')[1]).map((item) => item))
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
                                    <img src={defaultLanguage[0].img} alt="language" /> {window.innerWidth > 800 ? defaultLanguage[0].desktop : defaultLanguage[0].mobile}
                                </button>
                                {open &&
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    {languages.filter(item => item.id !== defaultLanguage[0].id).map((item,index) => <li key={item.id}  onClick={() => window.location.reload(false)} ><Link className={`dropdown-item ${item.mobile.toLowerCase()}`} to={`/${item.mobile.toLowerCase()}/social`} onClick={() => setDefaultLanguage([item])}>{window.innerWidth > 800 ? item.desktop : item.mobile}</Link></li>)}
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
