const habilitiesContainer = document.querySelector('[data-js="habilities"]');
const progressBars = document.querySelectorAll('.progress-bar');
const navLinks = document.querySelectorAll('.nav-link');

const percentageValues = [95, 90, 85, 90, 65, 50];

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

