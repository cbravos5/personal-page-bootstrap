const habilitiesContainer = document.querySelector('[data-js="habilities"]');
// const homeContainer = document.querySelector('[data-js="home"]');
// const aboutContainer = document.querySelector('[data-js="about"]');
// const contactContainer = document.querySelector('[data-js="contact"]');
const progressBars = document.querySelectorAll('.progress-bar');
const navLinks = document.querySelectorAll('.nav-link');

const percentageValues = [95, 90, 70, 60, 50, 40];

// const setNavListeners = () => {
//   const homePosition = homeContainer.getBoundingClientRect().top;
//   const aboutPosition = aboutContainer.getBoundingClientRect().top;
//   const habilitiesPosition = habilitiesContainer.getBoundingClientRect().top;
//   const contactPosition = contactContainer.getBoundingClientRect().top;

//   homePosition.addEventListener('click', () =>
//     window.scrollTo({
//       top: homePosition,
//     })
//   );
// };

const setPercentages = () => {
  progressBars.forEach((progressBar, index) => {
    progressBar.style.width = `${percentageValues[index]}%`;
  });
};

const verifyHabReach = () => {
  if (habilitiesContainer.getBoundingClientRect().top <= 250) {
    setPercentages();
    window.removeEventListener('scroll', verifyHabReach);
  }
};

window.addEventListener('scroll', verifyHabReach);
//setNavListeners();
