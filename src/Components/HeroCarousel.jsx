import React, { useEffect, useState, useRef } from "react";
import "./Styles/style.css";

const HeroCarousel = () => {
  // const [activeIndex, setActiveIndex] = useState(0);
  // const [nextIndex, setNextIndex] = useState(0);
  // const [width, setWidth] = useState(0);
  const carouselImg = useRef();
  const carouselItem = useRef();

  let index = 0;
  let newIndex = 0;
  let width = 0;

  useEffect(() => {
    // width = 0;
    const carouselImg = document.querySelectorAll(".img");
    const carouselItem = document.querySelectorAll(".item");
    let Interval = setInterval(() => {
      width += 1;
      // console.log({ width });
      carouselItem[index].style.setProperty("--item-width", width + "%");
      // console.log("hello");
      if (width === 100) {
        width = 0;
        console.log({ width });
        // carouselItem[index].style.setProperty("--item-width", 0 + "%");
        console.log(carouselItem[index]);
        newIndex = index + 1 >= carouselImg.length ? 0 : index + 1;
        const currentImg = document.querySelector(`[data-index="${index}"]`);
        const nextImg = document.querySelector(`[data-index="${newIndex}"]`);

        currentImg.dataset.status = "before";
        nextImg.dataset.status = "before-active";
        // clearInterval(Interval);

        setTimeout(() => {
          carouselItem[index].style.setProperty("--item-width", 0 + "%");
          nextImg.dataset.status = "active";
          index = newIndex;
          width = 0;
        }, 50);
      }
    }, 40);
    return () => clearInterval(Interval);
  }, []);

  return (
    <div className="carousel--container">
      <div className="carousel--wrapper">
        <div className="carousel--img">
          <div className="carousel--img_item" ref={carouselImg}>
            <div className="img" data-index="0" data-status="active"></div>
            <div className="img" data-index="1" data-status="unknown"></div>
            <div className="img" data-index="2" data-status="unknown"></div>
            <div className="img" data-index="3" data-status="unknown"></div>
            <div className="img" data-index="4" data-status="unknown"></div>
            <div className="img" data-index="5" data-status="unknown"></div>
          </div>
        </div>
        <div className="item--list" ref={carouselItem}>
          <div className="item">Gta V</div>
          <div className="item">Rocket League</div>
          <div className="item">Fortnite</div>
          <div className="item">Sifu</div>
          <div className="item">God of War</div>
          <div className="item">Watch Dogs</div>
        </div>
      </div>
      {/* <button onClick={carouselFunc}>Clicke Me</button> */}
    </div>
  );
};

export default HeroCarousel;
