const shadow = document.querySelector(".shadow");
const wrapper = document.querySelector(".wrapper");
const parallaxes = wrapper.querySelectorAll(".parallax");
const firstContent = parallaxes[0].querySelector(".content");
const navbar = document.querySelector(".navbar");
const navbarItems = navbar.querySelector(".items");
const logo = navbar.querySelector(".logo");
const navbarButtons = navbarItems.querySelectorAll("button");

wrapper.addEventListener("scroll", (e) => {
  const scrollPos = e.target.scrollTop;

  // shadow
  shadow.style.backgroundColor = `rgba(0, 0, 0, ${0.2 + scrollPos / 900})`;

  // moving hands
  parallaxes[2].setAttribute(
    "style",
    `background-position-x: ${scrollPos / 4 - 500}px`
  );

  //   navbar appear
  if (scrollPos < 700) {
    navbar.style.opacity = 0;
  } else {
    navbar.style.opacity = 1;
  }

  //   navbar items active class
  if (scrollPos < 1500) {
    changeActiveClass(0);
  }
  if (scrollPos >= 1500 && scrollPos < 2500) {
    changeActiveClass(1);
  }
  if (scrollPos >= 2500 && scrollPos < 3500) {
    changeActiveClass(2);
  }
  if (scrollPos >= 3500) {
    changeActiveClass(3);
  }
  function changeActiveClass(index) {
    navbarButtons.forEach((button) => {
      button.classList.remove("active");
    });
    navbarButtons[index].classList.add("active");
  }
});

// navbar buttons to scroll position
logo.addEventListener("click", () => {
  wrapper.scrollTop = 0;
});
navbarButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(e.target.innerText);
    switch (e.target.innerText) {
      case "Team Cabello":
        goTo(1000);
        break;
      case "Book":
        goTo(2000);
        break;
      case "Prices":
        goTo(3000);
        break;
      case "Contact":
        goTo(4000);
        break;

      default:
        break;
    }
  });
});

function goTo(scrollPos) {
  wrapper.scrollTop = scrollPos;
}

function submit(e) {
  e.preventDefault();
  console.log("submit");
}
