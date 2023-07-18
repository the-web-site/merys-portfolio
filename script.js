// JavaScript code to handle image click and fullscreen display
const galleryImages = document.querySelectorAll('.gallery img');
const overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.appendChild(overlay);

galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        overlay.innerHTML = `<img src="${image.src}" alt="${image.alt}" class="fullscreen-img">`;
        overlay.style.display = 'block';
    });
});

overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
});