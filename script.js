function enterSite() {
    // Slide up the entrance overlay
    document.getElementById('video-overlay').style.transform = 'translateY(-100%)';
    
    // Animate the big header text
    setTimeout(() => {
        document.querySelector('.raja-title').classList.add('reveal-text');
    }, 400);

    // Unlock scrolling
    document.body.classList.remove('locked');
}

function revealGallery() {
    const cover = document.getElementById('galleryCover');
    const grid = document.getElementById('hidden-gallery-grid');

    // Fade out the cover
    cover.style.opacity = '0';
    
    setTimeout(() => {
        cover.style.display = 'none'; // Hide the cover completely
        grid.style.display = 'grid';  // Reveal the hidden images within the section
        grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 400);
}
