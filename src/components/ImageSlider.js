import React, { useState, useEffect, useRef } from 'react'
import { SliderData } from './SliderData'

import instagram from '../public/dots/instagram.svg'
import facebook from '../public/dots/facebook.svg'
import twitter from '../public/dots/twitter.svg'
import linkedin from '../public/dots/linkedin.svg'
import youtube from '../public/dots/youtube.svg'

import '../App.css'

export default function ImageSlider({ slides }) {

    const [current, setCurrent] = useState(0)
    const [previous, setPrevious] = useState()

    const mountRef = useRef(false);

    const length = slides.length


    const nextSlide = () => {
        setCurrent(current === length -1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length -1 : current -1)
    }


    useEffect(() => {
        const elem = document.getElementById(document.querySelector('.slide.active').id+'d')
      /*   if(social && !mountRef.current) {
            if(social === 'instagram') social = 0 
            else if(social === 'facebook') social = 1
            else if(social === 'twitter') social = 2
            else if(social === 'linkedin') social = 3
            else if(social === 'youtube') social = 4
            const elem1 = document.getElementById(social + 'd')
            elem1.classList.add('active')
            setCurrent(parseInt(social))
            setPrevious(elem1)
            mountRef.current = true
        } else { */
            
            if(mountRef.current) previous.classList.remove('active')
            mountRef.current = true
            
            if(document.getElementsByClassName('.slide.active'))
            {
                elem.classList.add('active')
                setPrevious(elem)
                
            }

    //}
        
        
    }, [current])
    

    const select = (id) => {
            const elem = document.getElementById(id)
            const slide_id = id.split('d')[0]
            /*const slide = document.getElementById(slide_id) */
    
            if(elem.id !== previous.id) {
                elem.classList.add('active')
                previous.classList.remove('active')
                setCurrent(parseInt(slide_id))
                setPrevious(elem)
            }
    }



    if(!Array.isArray(slides) || slides.length <=0) {
        return null
    }

    return (
    <div id="qwe" className="slider-div">
        <div style={{display:'flex',flexDirection:'column', minWidth:'45%'}}>
        <section className="slider">
            <div className="left arrow" onClick={prevSlide}></div>
            <div className="right arrow" onClick={nextSlide}></div>
            
          {SliderData.map((slide, index) => {
              return (
                  <div className={index === current ? 'slide active' : 'slide'} key={index} id={index}>
                      {index === current && (
                        <img src={slide.image} alt="icon" className="image"/>
                      )}
                    </div>
              )
          })} 
          
        </section>
        <div className="dots">
                    <div id="0d" className="dot" onClick={(e) => select(e.currentTarget.id)}><img src={instagram} alt="" /></div>
                    <div id="1d"className="dot" onClick={(e) => select(e.currentTarget.id)}><img src={facebook} alt=""/></div>
                    <div id="2d"className="dot" onClick={(e) => select(e.currentTarget.id)}><img src={twitter} alt=""/></div>
                    <div id="3d"className="dot" onClick={(e) => select(e.currentTarget.id)}><img src={linkedin} alt=""/></div>
                    <div id="4d"className="dot" onClick={(e) => select(e.currentTarget.id)}><img src={youtube} alt=""/></div>
        </div>
        </div>
        

        {SliderData.map((slide, index) => {
            return (
                <div className={index === current ? 'slide active' : 'slide'} key={index} id={index}>
                <ul >
                    {index === current && slide.info.map((data, indexx) => {
                        return <li key={indexx}>{data}</li>
                    })}
                </ul>
                <div className="ml-2 d-flex ">
                <button className="btn btn-blue" onClick={ () => window.location.href=`${slide.link}`}>{slide.button}</button>
                </div>
                </div>
            )
        })} 
    
    </div>
    )
}
