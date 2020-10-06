const form = document.querySelector("form");

form.addEventListener('submit', (event) => { 
    alert("Thank you, we will contact you soon when the webiste is ready");
    event.preventDefault();
    form.reset();
})

anime.timeline({loop: true})
  .add({
    targets: '.ml15 .word',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 800,
    delay: (el, i) => 800 * i
  }).add({
    targets: '.ml15',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
