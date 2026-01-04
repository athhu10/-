/**
 * Function: enterSite
 * Purpose: Slides the entrance overlay up, unlocks scrolling,
 * and triggers the header text animation.
 */
function enterSite() {
    // 1. Slide up the entrance page
    const overlay = document.getElementById('video-overlay');
    overlay.style.transform = 'translateY(-100%)';
    
    // 2. Reveal the main site content
    const mainSite = document.getElementById('main-site');
    mainSite.style.opacity = '1';

    // 3. Trigger the grand text reveal animation in the header
    const title = document.querySelector('.raja-title');
    if(title) {
        title.classList.add('reveal-text');
    }

    // 4. Enable website scrolling
    document.body.classList.remove('locked');

    // 5. Cleanup the overlay from the DOM after animation completes
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 800);
}

/**
 * Function: revealGallery
 * Purpose: Hides the single cover image and displays all
 * historical photos in a grid layout.
 */
function revealGallery() {
    const cover = document.querySelector('.gallery-cover');
    const grid = document.getElementById('hidden-gallery-grid');
    
    if (cover && grid) {
        // Fade out the cover photo
        cover.style.transition = '0.4s';
        cover.style.opacity = '0';
        
        setTimeout(() => {
            // Remove cover and show the full grid
            cover.style.display = 'none';
            grid.style.display = 'grid'; 
            
            // Scroll smoothly to the revealed photos
            grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 400);
    }
}