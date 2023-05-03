import { useEffect, useState } from "react";

export const useSlider = (items, classItems) => {
  const [currentSlideSlider, setCurrentSlideSlider] = useState(0);
  const [fullView, setFullView] = useState(false);
  const [number, setNumber] = useState(1);

  useEffect(() => {
    if (items.length > 0 && classItems) {
      let slideIndex = 1;
      let time = 500000;
      showSlides(slideIndex);
      setNumber(slideIndex);
      function showSlides(n) {
        let slides = document.getElementsByClassName(classItems);
        let i;

        if (n > slides.length) {
          slideIndex = 1;
        }

        if (n < 1) {
          slideIndex = slides.length;
        }

        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }

        if (slides.length > 0) {
          slides[slideIndex - 1].style.display = "block";
        }
      }

      // Next/previous controls
      const plusSlides = (n) => {
        clearInterval(myTimer);
        if (n < 0) {
          showSlides((slideIndex -= 1));
        } else {
          showSlides((slideIndex += 1));
        }
        if (n === -1) {
          myTimer = setInterval(function () {
            plusSlides(n + 2);
          }, time);
        } else {
          myTimer = setInterval(function () {
            plusSlides(n + 1);
          }, time);
        }
        setNumber(slideIndex);
      };

      let myTimer = setInterval(() => {
        plusSlides(1);
        setNumber(slideIndex);
      }, time);

      if (items.length > 0 && classItems) {
        const right = document.querySelector(`.next_${classItems}`);
        right.addEventListener("click", function () {
          plusSlides(+1, false);
        });

        const left = document.querySelector(`.prev_${classItems}`);
        left.addEventListener("click", function () {
          plusSlides(-1, false);
        });
      }

      if (currentSlideSlider > 0) {
        showSlides((slideIndex = currentSlideSlider));
        setNumber(currentSlideSlider);
      }
    }
  }, [items, currentSlideSlider, classItems]);

  return {
    number,
    fullView,
    setCurrentSlideSlider,
    setFullView,
  };
};
