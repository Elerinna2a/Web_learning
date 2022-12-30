// show // hide presentation

const presentation = document.querySelector(".presentation__page");
const btnPresentation = document.querySelector("#top-right-btn");
const closeBtnPresentation = document.querySelector("#top-right-closeBtn");

// Timeline
const imgMiddle = document.querySelector(".logo__middle");
const btnAll = document.querySelectorAll(".btn");
const foot = document.querySelector("footer");

//
window.addEventListener("load", () => {
  const TL = gsap.timeline({ paused: true });
  TL.from(imgMiddle, 1, { transform: "scale(0)", ease: "power2.out" })
    .from(foot, 1, { transform: "scale(0)", ease: "power2.out" }, "-=1")
    .from(btnAll, 1, { transform: "scale(0)", ease: "power2.out" }, "-=2");

  TL.play();
});

// show hide prensentation

btnPresentation.addEventListener("click", () => {
  presentation.style.display = "flex";
  btnPresentation.style.display = "none";
  closeBtnPresentation.style.display = "block";
});

// close presentation

const closePresentation = () => {
  presentation.style.display = "none";
  closeBtnPresentation.style.display = "none";
  btnPresentation.style.display = "block";
};

closeBtnPresentation.addEventListener("click", closePresentation);

// show hide Comp
const btnCompDone = document.querySelector("#top-left-btn");
const closeBtnLeft = document.querySelector("#top-left-closeBtn");
const competence = document.querySelector(".competence__page");
const subComp = document.querySelectorAll(".c1");
const subComp2 = document.querySelectorAll(".c2");
const subComp3 = document.querySelectorAll(".c3");
const subComp4 = document.querySelectorAll(".c4");
const subComp5 = document.querySelectorAll(".c5");
const subComp6 = document.querySelectorAll(".c6");
const subComp7 = document.querySelectorAll(".c7");

const varComp = btnCompDone.addEventListener("click", () => {
  btnCompDone.style.display = "none";
  closeBtnLeft.style.display = "block";
  competence.style.display = "flex";

  const TL = gsap.timeline({ paused: true });
  TL.from(subComp, 0.3, { width: 0, ease: "power2.out" })
    .from(subComp2, 0.3, { width: 0, ease: "power2.out" })
    .from(subComp3, 0.3, { width: 0, ease: "power2.out" })
    .from(subComp4, 0.3, { width: 0, ease: "power2.out" })
    .from(subComp5, 0.3, { width: 0, ease: "power2.out" })
    .from(subComp6, 0.3, { width: 0, ease: "power2.out" })
    .from(subComp7, 0.3, { width: 0, ease: "power2.out" });
  TL.play();
});

// close Comp
const closeComp = () => {
  btnCompDone.style.display = "block";
  closeBtnLeft.style.display = "none";
  competence.style.display = "none";
};

closeBtnLeft.addEventListener("click", closeComp);

// show hide slide
const swiperslide = document.querySelector(".swiper");
const btnHobbie = document.querySelector("#bot-left-btn");
const closeBotBtnLeft = document.querySelector("#bot-left-closeBtn");

const varHobbie = btnHobbie.addEventListener("click", () => {
  swiperslide.style.display = "block";
  btnHobbie.style.display = "none";
  closeBotBtnLeft.style.display = "block";
});

// close hobbie
const closehobbie = () => {
  btnHobbie.style.display = "block";
  closeBotBtnLeft.style.display = "none";
  swiperslide.style.display = "none";
};

closeBotBtnLeft.addEventListener("click", closehobbie);

// // show hide CV
// const btnCv = document.querySelector("#bot-mid-btn");
// const closeCv = document.querySelector("#bot-mid-closeBtn");

// const varCv = btnCv.addEventListener("click", () => {
//   btnCv.style.display = "none";
//   closeCv.style.display = "block";
// });

// // close Cv
// const closeBtnCv = () => {
//   btnCv.style.display = "block";
//   closeCv.style.display = "none";
// };
// closeCv.addEventListener("click", closeBtnCv);
// //
