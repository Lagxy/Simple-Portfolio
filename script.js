const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

function handleNavbarVisibility() {
  if (window.innerWidth > 768) {
    menu.classList.add("hidden");
    hamburger.classList.add("hidden");
  }
}

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hidden");
  menu.classList.toggle("hidden");
});

window.addEventListener("resize", handleNavbarVisibility);
handleNavbarVisibility();

//typewriter by https://codepen.io/Danielgroen/pen/VeRPOq
document.addEventListener("DOMContentLoaded", function (event) {
  // array with texts to type in typewriter
  let dataText = ["Welcome!", "Selamat Datang!", "Bienvenido!", "Yōkoso!"];

  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // check if text isn't finished yet
    if (i < text.length) {
      // add next character to h1
      document.querySelector("#welcome").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback);
      }, 120);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == "function") {
      // call callback after timeout
      setTimeout(fnCallback, 1000);
    }
  }
  // start a typewriter animation for a text in the dataText array
  function StartTextAnimation(i) {
    if (typeof dataText[i] == "undefined") {
      setTimeout(function () {
        StartTextAnimation(0);
      }, 5000);
    }
    // check if dataText[i] exists
    try {
      if (i < dataText[i].length) {
        // text exists! start typewriter animation
        typeWriter(dataText[i], 0, function () {
          // after callback (and whole text has been animated), start next text
          StartTextAnimation(i + 1);
        });
      }
    } catch (err) {
      // do nothing
    }
  }
  // start the text animation
  StartTextAnimation(0);
});

//card hover by https://codepen.io/joshsalazar/pen/GROEmRj
let limits = 5.0;

document.querySelectorAll(".certificate-card").forEach(function (card) {
  card.addEventListener("mousemove", function (e) {
    let rect = e.target.getBoundingClientRect();
    let x = e.clientX - rect.left; //x position within the element.
    let y = e.clientY - rect.top; //y position within the element.
    let offsetX = x / rect.width;
    let offsetY = y / rect.height;

    let rotateY = offsetX * (limits * 2) - limits;
    let rotateX = offsetY * (limits * 2) - limits;

    let shadowOffsetX = offsetX * 32 - 16;
    let shadowOffsetY = offsetY * 32 - 16;

    card.style.boxShadow =
      (1 / 6) * -shadowOffsetX +
      "px " +
      (1 / 6) * -shadowOffsetY +
      "px 3px rgba(0, 0, 0, 0.051), " +
      (2 / 6) * -shadowOffsetX +
      "px " +
      (2 / 6) * -shadowOffsetY +
      "px 7.2px rgba(0, 0, 0, 0.073), " +
      (3 / 6) * -shadowOffsetX +
      "px " +
      (3 / 6) * -shadowOffsetY +
      "px 13.6px rgba(0, 0, 0, 0.09), " +
      (4 / 6) * -shadowOffsetX +
      "px " +
      (4 / 6) * -shadowOffsetY +
      "px 24.3px rgba(0, 0, 0, 0.107), " +
      (5 / 6) * -shadowOffsetX +
      "px " +
      (5 / 6) * -shadowOffsetY +
      "px 45.5px rgba(0, 0, 0, 0.129), " +
      -shadowOffsetX +
      "px " +
      -shadowOffsetY +
      "px 109px rgba(0, 0, 0, 0.18)";

    card.style.transform = "perspective(1000px) rotateX(" + -rotateX + "deg) rotateY(" + rotateY + "deg)";
  });

  card.addEventListener("mouseleave", function () {
    card.style.boxShadow =
      "0px 0px 3px rgba(0, 0, 0, 0.051), 0px 0px 7.2px rgba(0, 0, 0, 0.073), 0px 0px 13.6px rgba(0, 0, 0, 0.09), " +
      "0px 0px 24.3px rgba(0, 0, 0, 0.107), 0px 0px 45.5px rgba(0, 0, 0, 0.129), 0px 0px 109px rgba(0, 0, 0, 0.18)";
    card.style.transform = "scale(1.0)";
  });
});
