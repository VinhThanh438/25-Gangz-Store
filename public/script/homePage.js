// Slider show

(() => {
    const sliderImgs = document.querySelectorAll(".slider-img");
    let index = 0;

    const slideShow = () => {
        setTimeout(() => {
            if (index === sliderImgs.length - 1) {
                sliderImgs[index].classList.remove("slider-active");
                index = 0;
                sliderImgs[index].classList.add("slider-active");
            } else {
                sliderImgs[index].classList.remove("slider-active");
                index++;
                sliderImgs[index].classList.add("slider-active");
            }
            slideShow();
        }, 5000);
    };
    slideShow();
})();

// Product items hover

const prItems = document.querySelectorAll(".product-item");
const hoverHTML = "";

prItems.forEach((item) => {
    item.onmouseover = () => {
        item.insertAdjacentElement("afterend", hoverHTML);
    };
    item.onmouseout = () => {
        item.classList.remove("product-carts--hover");
    };
});
// ____________________________________
