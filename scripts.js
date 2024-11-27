document.addEventListener('wheel', function(event) {
    if (event.ctrlKey) {
        event.preventDefault(); 
    }
}, { passive: false });

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      target.scrollIntoView({
          behavior: "smooth", // Défilement fluide
          block: "start" // Positionnement au début
      });
  });
});


