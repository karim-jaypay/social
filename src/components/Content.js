import React from 'react'
import smoothscroll from 'smoothscroll-polyfill';

import Header from '../components/Header'

import '../App.css';

import EmblaCarousel from './ImageSlider';
import { SliderData } from '../components/SliderData';
import Footer from '../components/Footer';

import { ReactComponent as Bg }  from '../public/Wide.svg'
import { ReactComponent as BgM } from '../public/bg.svg'

export default function Content() {

    smoothscroll.polyfill();

   /*  const SLIDE_COUNT = 5;
    const slides = Array.from(Array(SLIDE_COUNT).keys()); */
    const scroll = () => {

        document.getElementById('qwe').scrollIntoView({ behavior: 'smooth' })
    
    }

    return (
        
        <div className="main-s">
            <Header/>
            <div className="one" >
           {window.innerWidth < 1400 ?
           <BgM className="background" />
           :
               <Bg className="background" />
           }
                <div className="container-one text-center" style={{height:'55%'}}>
                    <div id="title-content" className="title-content h-100">
                <div className="d-flex subtitle-div">
                    <div className="subtitle w-100">Follow Everest across your social channels</div>
                </div>
                <div className="d-flex">
                    <h1 className="w-100">#TradeWith<span style={{color:'#23a5d6',fontWeight:'bold'}}>EverestCM</span></h1>
                    
                </div>
                    <div className="desc">
                    <p className="text">Latest market news, trading tutorials, videos, signals, and more across every popular social media platform!</p>
                    </div>
                    <a className="btn btn-black" onClick={() => scroll()}>Tell Me More</a>
                    
                </div>
                </div>
                 
            </div>
            <div className="bg-white">

                <div id="qwe" className="text-center whatyouget">What you get when you follow Everest on your social platforms</div>

                <div>
                <EmblaCarousel slides={SliderData} />
                </div>

            <Footer/>
            </div>
        
   </div>
    )
}
