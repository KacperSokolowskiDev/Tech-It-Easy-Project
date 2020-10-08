const form = document.querySelector("form");

form.addEventListener('submit', (event) => { 
    alert("Thank you, we will contact you soon when the webiste is ready");
    event.preventDefault();
    form.reset();
});

objectFitVideos();

