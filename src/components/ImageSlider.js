import React, { useState, useEffect, useCallback } from "react";

import { useEmblaCarousel } from "embla-carousel/react";

import { PrevButton, NextButton, DotButton } from "./EmblaCarouselButton";

import '../App.css'

import instagram from '../public/dots/instagram.svg'
import facebook from '../public/dots/facebook.svg'
import twitter from '../public/dots/twitter.svg'
import linkedin from '../public/dots/linkedin.svg'
import youtube from '../public/dots/youtube.svg'

const EmblaCarousel = ({ slides }) => {

  const [viewportRef, embla] = useEmblaCarousel({
    skipSnaps: 'false',
    loop: true
    /* dragFree: true, */
   /*  containScroll: "trimSnaps", */
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const images = [instagram, facebook, twitter, linkedin, youtube]


  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [
    embla
  ]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    setScrollSnaps(embla.scrollSnapList());
    onSelect();
  }, [embla, setScrollSnaps, onSelect]);



  return (
      <>
      <div className="embla__div">
          <div className="embla__content" >
    <div className="embla">
      <div className="embla__viewport" ref={viewportRef}>
        <div className="embla__container">
          {slides.map((slides,index) => {
              return (
            <div id={index+1} className="embla__slide" key={index+1}>
              <div className="embla__slide__inner">
                <div className="w-100">
                <img src={slides.image} alt="icon" className="image"/>
                </div>
                
                {/* list with logo on mobile slider*/}
                <div className="embla__list">
                <ul className="list-center">
                  {slides.info.map((data,indexx) => <li key={indexx+1}>{data}</li>)}
                </ul>
                <div className="text-center" style={{marginRight:'5px'}}>
                <a  className="btn btn-blue" href={slides.link} target="_blank" rel="noreferrer">{slides.button}</a>
                <div className="shadow-link mt-1">{slides.shadow}</div>
                </div>
                </div>
              </div>
            </div>
              )}
          )}
        </div>
       
      </div>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </div>
    <div className="embla__dots">
    {scrollSnaps.map((_, index) => (
          <DotButton
            key={index+1}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
            image = {images[index]}
          />
        ))}

    </div>
        </div>

            <div className="w-50">
              {slides.map((item, index) => {
            return (
            <div key={index+1} className={`info ${index === selectedIndex && 'active'}`}>
                <ul>
                    {item.info.map((data, indexx) => <li key={indexx}>{data}</li>)}
                </ul>
                <div style={{marginLeft:'0.5rem'}}>
                <a className="btn btn-blue" href={item.link} target="_blank" rel="noreferrer">{item.button}</a>
                <div className="shadow-link mt-1">{item.shadow}</div>
                </div>
            </div>
            )
                 })}
            </div>
</div>
</>
  );
};

export default EmblaCarousel;