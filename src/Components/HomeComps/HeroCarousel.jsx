import React from "react";
import "../Styles/style.css";
import useResize from "../../useResize";

const HeroCarousel = () => {
  let size = useResize();
  let index = 0;
  let newIndex = 0;
  let previousIndex = 0;
  let width = 0;
  let Interval = null;

  const handleCarousel = (i) => {
    clearInterval(Interval);
    index = i;
    const carouselImg = document.querySelectorAll(".img");
    const carouselItem = document.querySelectorAll(".item");
    carouselItem.forEach((item) => {
      item.classList.remove("active");
      item.style.setProperty("--item-width", 0 + "%");
    });
    width = 0;
    Interval = setInterval(() => {
      width += 1;
      carouselItem[index].style.setProperty("--item-width", width + "%");
      carouselItem[index].classList.add("active");
      if (width === 100) {
        width = 0;
        clearInterval(Interval);
        newIndex = index + 1 >= carouselImg.length ? 0 : index + 1;
        previousIndex = index - 1 <= 0 ? 0 : index - 1;
        const prevImg = document.querySelector(
          `[data-index="${previousIndex}"]`
        );
        const currentImg = document.querySelector(`[data-index="${index}"]`);
        const nextImg = document.querySelector(`[data-index="${newIndex}"]`);

        prevImg.dataset.status = "unknown";
        currentImg.dataset.status = "before";
        nextImg.dataset.status = "before-active";

        setTimeout(() => {
          carouselItem[index].style.setProperty("--item-width", 0 + "%");
          carouselItem[index].classList.remove("active");
          nextImg.dataset.status = "active";
          index = newIndex;
          width = 0;
          handleCarousel(index);
        }, 50);
      }
    }, 45);
  };

  // useEffect(() => {
  //   // width = 0;
  //   if (size.size >= 1100) {
  //     const timer = setTimeout(() => {
  //       const carouselImg = document.querySelectorAll(".img");
  //       const carouselItem = document.querySelectorAll(".item");
  //       let Interval = setInterval(() => {
  //         width += 1;
  //         carouselItem[index].style.setProperty("--item-width", width + "%");
  //         carouselItem[index].classList.add("active");
  //         if (width === 100) {
  //           width = 0;
  //           newIndex = index + 1 >= carouselImg.length ? 0 : index + 1;
  //           const currentImg = document.querySelector(
  //             `[data-index="${index}"]`
  //           );
  //           const nextImg = document.querySelector(
  //             `[data-index="${newIndex}"]`
  //           );

  //           currentImg.dataset.status = "before";
  //           nextImg.dataset.status = "before-active";

  //           setTimeout(() => {
  //             carouselItem[index].style.setProperty("--item-width", 0 + "%");
  //             carouselItem[index].classList.remove("active");
  //             nextImg.dataset.status = "active";
  //             index = newIndex;
  //             width = 0;
  //           }, 50);
  //         }
  //       }, 45);
  //       window.addEventListener("resize", () => clearInterval(Interval));
  //       window.removeEventListener("resize", () => clearInterval(Interval));
  //       return () => clearInterval(Interval);
  //     }, 3000);
  //     window.addEventListener("resize", () => clearTimeout(timer));
  //     window.removeEventListener("resize", () => clearTimeout(timer));
  //     return () => clearTimeout(timer);
  //   } else {
  //     return;
  //   }
  // }, [size.size]);

  return (
    <div className="carousel--container">
      <div className="carousel--wrapper">
        <div className="carousel--img">
          <div className="carousel--img_item">
            <div className="img" data-index="0" data-status="active"></div>
            <div className="img" data-index="1" data-status="unknown"></div>
            <div className="img" data-index="2" data-status="unknown"></div>
            <div className="img" data-index="3" data-status="unknown"></div>
            <div className="img" data-index="4" data-status="unknown"></div>
            <div className="img" data-index="5" data-status="unknown"></div>
          </div>
        </div>
        <div className="item--list">
          <div className="item" onClick={() => handleCarousel(0)}>
            <img
              src="/imgs/carousel-images/item-images/gtav-item.jpg"
              alt="gta-v"
            />
            <span>gta V</span>
          </div>
          <div className="item" onClick={() => handleCarousel(1)}>
            <img
              src="/imgs/carousel-images/item-images/unbound-item.jpg"
              alt="gta-v"
            />
            <span>nfs unbound</span>
          </div>
          <div className="item" onClick={() => handleCarousel(2)}>
            <img
              src="/imgs/carousel-images/item-images/fortnite-item.jpg"
              alt="fortnite"
            />
            <span>fornite</span>
          </div>
          <div className="item" onClick={() => handleCarousel(3)}>
            <img
              src="/imgs/carousel-images/item-images/sifu-item.jpg"
              alt="sifu"
            />
            <span>sifu</span>
          </div>
          <div className="item" onClick={() => handleCarousel(4)}>
            <img
              src="/imgs/carousel-images/item-images/diablo-item.jpg"
              alt="diablo-3"
            />
            <span>Diablo III</span>
          </div>
          <div className="item" onClick={() => handleCarousel(5)}>
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
