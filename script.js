function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  const nightModeToggle = document.getElementById('night-mode-toggle');

  const images = document.querySelectorAll('.project-img');
  images.forEach(img => {
    img.onload = () => {
      img.classList.add('loaded');
    };
  });
  
  menu.classList.toggle("open");
  icon.classList.toggle("open");
  const aboutSection = document.getElementById('about');
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    if (scrollPosition > aboutSection.offsetTop) {
      aboutSection.classList.add('animate');
    }
  })
}
const hideSliderButton = document.getElementById('hide-slider-button'); // Assuming you have a button to hide the slider
const slider = document.querySelector('.slider');

hideSliderButton.addEventListener('click', () => {
    slider.style.display = 'none'; // Hides the slider
});
