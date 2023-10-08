const homeNavBar = document.querySelector(`.home-navbar`);
const msgHomeTypeWriter = document.getElementById(`message-effect`);

const msgHomeTypeWriterArray = [` Designer & Frontend Developer.`];
const scrollFades = document.querySelectorAll(`.scroll-fade`);
const screenwidth = window.innerWidth;

let windowHeight = window.innerHeight;
let scrollFadePoint = 150;
let msgPosition = 0;
const msgSpeed = 100;

// making position fixed to my nav bar when I scroll down ---
// Handle navbar's fixed behavior
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const headerHeight = window.innerHeight * 0.1;
  if (window.innerWidth > 765) {
    if (scrollY >= headerHeight) {
      homeNavBar.classList.add("fixed");
    } else if (scrollY < headerHeight) {
      homeNavBar.classList.remove("fixed");
    }
  } else {
    homeNavBar.classList.remove("fixed");
  }
});

// Scroll fade effect
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  scrollFades.forEach((scrollFade) => {
    const scrollFadeTop = scrollFade.getBoundingClientRect().top;
    if (scrollFadeTop < windowHeight - scrollFadePoint) {
      scrollFade.classList.add("active");
    } else {
      scrollFade.classList.remove("active");
    }
  });
});

//------------------ function for the typewriter in the home page--------------------------
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

let contentVisible = true;

mobileMenuIcon.addEventListener(`click`, () => {
  ulMenu.classList.toggle("show");
  if (contentVisible) {
    homeContent.style.display = "none ";
    contentVisible = false;
  } else {
    homeContent.style.display = "flex";
    contentVisible = true;
  }
});

// ------------------------toggle projects's descriptions ---------------

function toggleProjectDescriptions(project) {
  const projectDescription = project.querySelector(`.description`);

  if (screenwidth > 1025) {
    project.addEventListener(`mouseenter`, (event) => {
      projectDescription.style.display = `block`;
    });

    project.addEventListener(`mouseleave`, (event) => {
      projectDescription.style.display = `none`;
    });
  } else {
    project.addEventListener("click", (event) => {
      toggleProjectDescriptions();
      projectDescription.style.display =
        projectDescription.style.display === "block" ? "none" : "block";
    });
  }
  // adding touch screen
  project.addEventListener("touchstart", (event) => {
    event.preventDefault();
    projectDescription.style.display =
      projectDescription.style.display === "block" ? "none" : "block";
  });
}

const projects = document.querySelectorAll(`.img-project`);
projects.forEach((project) => {
  toggleProjectDescriptions(project);
});

// making buttons project working

// const viewCodeBtn = document.querySelector(`.btn-view-code`);
// const viewLiveBtn = document.querySelector(`.btn-view-live`);

const projectsButtons = document.querySelectorAll(
  `.btn-view-code, .btn-view-live`
);

function openInNewTab(link) {
  if (link) {
    window.open(link, `_blank`);
  }
}
projectsButtons.forEach((projectButton) => {
  projectButton.addEventListener(`click`, (event) => {
    event.preventDefault();
    const link = projectButton.dataset.link;
    openInNewTab(link);
    console.log("Clicked with mouse");
  });
  projectButton.addEventListener(`touchstart`, (event) => {
    event.preventDefault();
    const link = projectButton.dataset.link;
    openInNewTab(link);
  });
});
