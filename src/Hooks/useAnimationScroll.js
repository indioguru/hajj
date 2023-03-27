import { useEffect } from "react";

export const useAnimationScroll = (element, classAnimation) => {
  useEffect(() => {
    const middleScreen = (elemento, clase, heightTotal) => {
      const contenido = document.querySelector(`.${elemento}`);

      if (contenido !== null) {
        const rect = contenido.getBoundingClientRect();



        if (rect.top / 2 <= heightTotal / 2 / 2) {
          contenido.classList.add(clase);
        } else {
          contenido.classList.remove(clase);
        }
      }
    };

    const scrollElement = (itemsClass, classAnimation) => {
      const heightTotal = window.innerHeight;
      let items = document.querySelectorAll(`.${itemsClass}`);
      if (items.length > 1) {
        for (let i = 0; items.length > i; i++) {
          items[i].classList.add(`${itemsClass}_${i + 1}`);
          middleScreen(`${itemsClass}_${i + 1}`, classAnimation, heightTotal);
        }
      } else {
        middleScreen(itemsClass, classAnimation, heightTotal);
      }
    };

    // ANIMATION SCROLL
    window.addEventListener("scroll", function () {
      scrollElement(element, classAnimation);
    });
  }, []);
};
