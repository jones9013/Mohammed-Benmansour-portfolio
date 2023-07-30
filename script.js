const homeNavBar = document.querySelector(`.home-navbar`);
const msgHomeTypeWriter = document.getElementById(`message-effect`);
const msgHomeTypeWriterArray = [` Designer & Frontend Developer.`];
const scrollFades = document.querySelectorAll(`.scroll-fade`);

let windowHeight = window.innerHeight;
let scrollFadePoint = 150;
let msgPosition = 0;
const msgSpeed = 100;

// making position fixed to my nav bar when I scroll down ---
window.addEventListener(`scroll`, () => {
  const scrollY = window.scrollY;
  if (window.innerWidth > 765) {
    homeNavBar.classList.add(`fixed`);
  } else {
    homeNavBar.classList.remove(`fixed`);
  }

  //------------------------- scroll fade effect------------------------------------
  scrollFades.forEach((scrollFade) => {
    const scrollFadeTop = scrollFade.getBoundingClientRect().top;
    if (scrollFadeTop < windowHeight - scrollFadePoint) {
      scrollFade.classList.add(`active`);
    } else {
      scrollFade.classList.remove(`active`);
    }
  });
});

//------------------ function for the typewriter in the hone page--------------------------
const typeWriter = () => {
  msgHomeTypeWriter.innerHTML =
    msgHomeTypeWriterArray[0].substring(0, msgPosition) + "<span>\u25ae</span>";

  if (msgPosition++ != msgHomeTypeWriterArray[0].length) {
    setTimeout(typeWriter, msgSpeed);
  }
};
window.addEventListener(`load`, typeWriter);
//---------------------End of typewriter--------------------------------------------------

// ----------------js for nav bar ----------------------------
const mobileMenuIcon = document.getElementById(`mobile-menu-icon`);
const ulMenu = document.getElementById(`ul-menu`);
const homeContent = document.getElementById(`home-content`);

mobileMenuIcon.addEventListener(`click`, () => {
  ulMenu.classList.toggle("show");
  homeContent.style.display = `none`;
});

// ------------------------toggle projects's descriptions ---------------

function toggleProjectDescriptions(project) {
  const projectDescription = project.querySelector(`.description`);
  project.addEventListener(`mouseenter`, (event) => {
    projectDescription.style.display = `block`;
  });
  project.addEventListener(`mouseleave`, (event) => {
    projectDescription.style.display = `none`;
  });
}

const projects = document.querySelectorAll(`.img-project`);
projects.forEach((project) => {
  toggleProjectDescriptions(project);
});
