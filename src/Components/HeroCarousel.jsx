import React, { useEffect, useRef } from "react";
import "./Styles/style.css";

const HeroCarousel = () => {
  const carouselImg = useRef();
  const carouselItem = useRef();

  let index = 0;
  let newIndex = 0;
  let width = 0;

  useEffect(() => {
    // width = 0;
    const timer = setTimeout(() => {
      const carouselImg = document.querySelectorAll(".img");
      const carouselItem = document.querySelectorAll(".item");
      let Interval = setInterval(() => {
        width += 1;
        carouselItem[index].style.setProperty("--item-width", width + "%");
        carouselItem[index].classList.add("active");
        if (width === 100) {
          width = 0;
          newIndex = index + 1 >= carouselImg.length ? 0 : index + 1;
          const currentImg = document.querySelector(`[data-index="${index}"]`);
          const nextImg = document.querySelector(`[data-index="${newIndex}"]`);

          currentImg.dataset.status = "before";
          nextImg.dataset.status = "before-active";

          setTimeout(() => {
            carouselItem[index].style.setProperty("--item-width", 0 + "%");
            carouselItem[index].classList.remove("active");
            nextImg.dataset.status = "active";
            index = newIndex;
            width = 0;
            // setWidth(0);
          }, 50);
        }
      }, 50);
      return () => clearInterval(Interval);
    }, 3000);
    return () => clearTimeout(timer);
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
          <div className="item">
            <img
              src="/imgs/carousel-images/item-images/gtav-item.jpg"
              alt="gta-v"
            />
            <span>gta V</span>
          </div>
          <div className="item">
            <img
              src="/imgs/carousel-images/item-images/unbound-item.jpg"
              alt="gta-v"
            />
            <span>nfs unbound</span>
          </div>
          <div className="item">
            <img
              src="/imgs/carousel-images/item-images/fortnite-item.jpg"
              alt="fortnite"
            />
            <span>fornite</span>
          </div>
          <div className="item">
            <img
              src="/imgs/carousel-images/item-images/sifu-item.jpg"
              alt="sifu"
            />
            <span>sifu</span>
          </div>
          <div className="item">
            <img
              src="/imgs/carousel-images/item-images/diablo-item.jpg"
              alt="diablo-3"
            />
            <span>Diablo III</span>
          </div>
          <div className="item">
            <img
              src="/imgs/carousel-images/item-images/cod-3-item.jpg"
              alt=""
            />
            <span>COD - 3 Black Ops</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
