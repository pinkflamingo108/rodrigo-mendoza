// Slider

const imgContainer = document.querySelector(".img-container");
const nameSlide = document.getElementById("slide");
const circleSelector = document.querySelector(".circle");

let imgArray = [
  "url(/Images/mainImages/RBIG21.jpg) center center/cover no-repeat",
  "url(/Images/mainImages/RBIG15.jpg) center center/cover no-repeat",
  "url(/Images/mainImages/RBIG11.jpg) center center/cover no-repeat",
  "url(/Images/mainImages/RBIG17.jpg) center center/cover no-repeat",
  "url(/Images/mainImages/RBIG22.jpg) center center/cover no-repeat",
  "url(/Images/mainImages/RBIG22.jpg) center center/cover no-repeat",
];

const dotIndex = document.querySelectorAll(".cir");

function slider() {
  let i = 0;
  let j = 0;

  while (j < 1000) {
    setTimeout(() => {
      if (i == imgArray.length - 1) i = 0;

      imgContainer.style.background = imgArray[i];

      let iIndex = i;

      if (iIndex === iIndex) {
        dotIndex[i].style.color = "grey ";
      }

      if (iIndex > 0) {
        dotIndex[i].previousElementSibling.style.color = "#fff";
      }

      if (dotIndex[i] === dotIndex[0]) {
        dotIndex[4].style.color = "#fff";
      }

      i++;
    }, 2000 * j);

    ++j;
  }
}

window.addEventListener("load", slider);
