const item1 = document.querySelector("span.item1");
const item2 = document.querySelector("span.item2");
const item3 = document.querySelector("span.item3");
const item4 = document.querySelector("span.item4");
const item5 = document.querySelector("span.item5");
const item6 = document.querySelector("span.item6");
const item7 = document.querySelector("span.item7");

function addColor() {
  const scrollPosition = window.scrollY;

  const sectionHeight = document.querySelector("header.main-banner")
    .clientHeight;
  const sectionHeight2 = document.querySelector("div.container").clientHeight;
  const sectionHeight3 = document.querySelector("div.container2").clientHeight;
  const sectionHeight4 = document.querySelector("section.services")
    .clientHeight;
  const sectionHeight5 = document.querySelector("section.container")
    .clientHeight;
  const sectionHeight6 = document.querySelector("section.comments")
    .clientHeight;
  const sectionHeight7 = document.querySelector("form.contact-form")
    .clientHeight;

  const distanceFromTop = document.querySelector("header.main-banner")
    .offsetTop;
  const distanceFromTop2 = document.querySelector("div.container").offsetTop;
  const distanceFromTop3 = document.querySelector("div.container2").offsetTop;
  const distanceFromTop4 = document.querySelector("section.services").offsetTop;
  const distanceFromTop5 = document.querySelector("section.container")
    .offsetTop;
  const distanceFromTop6 = document.querySelector("section.comments").offsetTop;
  const distanceFromTop7 = document.querySelector("form.contact-form")
    .offsetTop;

  if (scrollPosition < sectionHeight) {
    item1.classList.add("active");
  } else if (scrollPosition < sectionHeight2 + distanceFromTop2) {
    item2.classList.add("active");
  } else if (scrollPosition < sectionHeight3 + distanceFromTop3) {
    item3.classList.add("active");
  } else if (scrollPosition < sectionHeight4 + distanceFromTop4) {
    item4.classList.add("active");
  } else if (scrollPosition < sectionHeight5 + distanceFromTop5) {
    item5.classList.add("active");
  } else if (scrollPosition < sectionHeight6 + distanceFromTop6) {
    item6.classList.add("active");
  } else if (scrollPosition > distanceFromTop7) {
    item7.classList.add("active");
  }
}

function removeColor() {
  const scrollPosition = window.scrollY;

  const sectionHeight = document.querySelector("header.main-banner")
    .clientHeight;
  const sectionHeight2 = document.querySelector("div.container").clientHeight;
  const sectionHeight3 = document.querySelector("div.container2").clientHeight;
  const sectionHeight4 = document.querySelector("section.services")
    .clientHeight;
  const sectionHeight5 = document.querySelector("section.container")
    .clientHeight;
  const sectionHeight6 = document.querySelector("section.comments")
    .clientHeight;
  const sectionHeight7 = document.querySelector("form.contact-form")
    .clientHeight;

  const distanceFromTop = document.querySelector("header.main-banner")
    .offsetTop;
  const distanceFromTop2 = document.querySelector("div.container").offsetTop;
  const distanceFromTop3 = document.querySelector("div.container2").offsetTop;
  const distanceFromTop4 = document.querySelector("section.services").offsetTop;
  const distanceFromTop5 = document.querySelector("section.container")
    .offsetTop;
  const distanceFromTop6 = document.querySelector("section.comments").offsetTop;
  const distanceFromTop7 = document.querySelector("form.contact-form")
    .offsetTop;

  if (scrollPosition > sectionHeight) {
    item1.classList.remove("active");
  } else if (scrollPosition < sectionHeight) {
    item2.classList.remove("active");
  }
  if (scrollPosition > sectionHeight + sectionHeight2) {
    item2.classList.remove("active");
  }
  if (scrollPosition > sectionHeight + sectionHeight2 + sectionHeight3) {
    item3.classList.remove("active");
  }
  if (scrollPosition < sectionHeight + sectionHeight2) {
    item3.classList.remove("active");
  }
  if (
    scrollPosition >
    sectionHeight + sectionHeight2 + sectionHeight3 + sectionHeight4
  ) {
    item4.classList.remove("active");
  }
  if (scrollPosition < sectionHeight + sectionHeight2 + sectionHeight3) {
    item4.classList.remove("active");
  }
  if (
    scrollPosition >
    sectionHeight +
      sectionHeight2 +
      sectionHeight3 +
      sectionHeight4 +
      sectionHeight5
  ) {
    item5.classList.remove("active");
  }
  if (
    scrollPosition <
    sectionHeight + sectionHeight2 + sectionHeight3 + sectionHeight4
  ) {
    item5.classList.remove("active");
  }
  if (
    scrollPosition >
    sectionHeight +
      sectionHeight2 +
      sectionHeight3 +
      sectionHeight4 +
      sectionHeight5 +
      sectionHeight6
  ) {
    item6.classList.remove("active");
  }
  if (
    scrollPosition <
    sectionHeight +
      sectionHeight2 +
      sectionHeight3 +
      sectionHeight4 +
      sectionHeight5
  ) {
    item6.classList.remove("active");
  } else if (scrollPosition < distanceFromTop7) {
    item7.classList.remove("active");
  }
  // } if (scrollPosition > sectionHeight + sectionHeight2 + sectionHeight3 + sectionHeight4 + sectionHeight5 + sectionHeight6) {
  //     item7.classList.remove("active");
  // }
}

window.addEventListener("scroll", addColor);
window.addEventListener("scroll", removeColor);


