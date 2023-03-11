!(function (e) {
  "use strict";
  e('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var a = e(this.hash);
      if ((a = a.length ? a : e("[name=" + this.hash.slice(1) + "]")).length)
        navbar = document.getElementById("navbar");
      const navheight = navbar.offsetHeight;
      return (
        e("html, body").animate(
          { scrollTop: a.offset().top - navheight + 1 },
          250,
          "easeInOutCubic"
        ),
        !1
      );
    }
  });
})(jQuery);
function waitForElement(elementPath, callBack) {
  window.setTimeout(function () {
    if ($(elementPath).length) {
      callBack(elementPath, $(elementPath));
    } else {
      waitForElement(elementPath, callBack);
    }
  }, 50);
}
if (!detectMob()) {
  document.addEventListener("mousemove", parallax);
  function parallax(event) {
    this.querySelectorAll(".mouse").forEach((shift) => {
      const position = shift.getAttribute("value");
      const x = (window.innerWidth - event.pageX * position) / 90;
      const y = (window.innerHeight - event.pageY * position) / 90;
      shift.style.transform = `translateX(${x}px) translateY(${y}px) scale(1.2)`;
    });
  }
}
function detectMob() {
  const toMatch = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i,
  ];

  return toMatch.some((toMatchItem) => {
    return navigator.userAgent.match(toMatchItem);
  });
}
function smoothScroll() {
  navbar = document.getElementById("navbar");
  const navheight = navbar.offsetHeight;
  document.documentElement.style.setProperty(
    "--scroll-padding",
    navheight - 1 + "px"
  );
}
function load() {
  smoothScroll();
  //toggle mobile menu
  waitForElement("#pencet", function () {
    const clickx = document.getElementById("pencet");
    const navbar = document.getElementsByTagName("nav")[0];
    clickx.addEventListener("click", function () {
      clickx.classList.toggle("Diam");
      if (navbar.value == "1") {
        navbar.style.top = "-65vh";
        navbar.value = "0";
      } else {
        navbar.style.top = "0vh";
        navbar.value = "1";
      }
    });
  });
}
var text = document.querySelectorAll(".waitForScroll");
function scrolListener(e) {
  // var screenTop = document.scrollingElement.scrollTop;
  // var screenBottom = screenTop + innerHeight;
  // for (var i = 0; i < text.length; i += 1) {
  //   var textTop = text[i].getBoundingClientRect().top;
  //   if (textTop < screenBottom && textTop < screenTop) {
  //     text[i].classList.add("scrollPassed");
  //     text[i].classList.remove("waitForScroll");
  //   }
  // }
  const navbar = document.getElementById("navbar");
  if (window.scrollY > navbar.offsetHeight) {
    if (detectMob()) {
      navbar.style.backgroundColor = "#c2ded1";
    } else {
      navbar.style.backgroundColor = "#c2ded10";
      navbar.style.backdropFilter = "blur(0.15vh)";
      navbar.style.webkit;
    }
    navbar.style.boxShadow =
      "0px 0px 5px 0px rgba(0, 0, 0, 0.1) , 0px 0px 1px 0px rgba(0, 0, 0, 0.1)";
  } else {
    navbar.style.backgroundColor = " #c2ded100";
    navbar.style.backdropFilter = "blur(0px)";
    navbar.style.boxShadow = "none";
  }
}
document.onscroll = scrolListener;
