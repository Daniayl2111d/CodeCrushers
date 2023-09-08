var typed = new Typed('#element', {
    strings: ['Wordpress', 'Busniess',"E-Commerce","Education","News","Bloging","Web Portal"],
    typeSpeed: 60,
  });

// Function to animate the counter from start to end value
function animateCounter(id, start, end, duration) {
  let current = start;
  const increment = Math.ceil((end - start) / duration);

  // Function to update the counter value
  function updateCounter() {
    const counterElement = document.getElementById(id);
    counterElement.textContent = current;

    if (current < end) {
      current += increment;
      requestAnimationFrame(updateCounter);
    }
  }

  updateCounter();
}

// Call the animateCounter function for each counter element with desired start and end values
animateCounter("projectsCounter", 1, 45, 100);
animateCounter("clientserved", 1, 276, 100);
animateCounter("peopleCounter", 1, 87, 500);
animateCounter("experienceCounter", 1, 6, 1000);
