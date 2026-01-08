// Image Database - Performs the "Automatic Task" of loading from folder
const imagePath = "logo_files/";
const myPhotos = [
    "460714737_1153625636113939_2908347564215830451_n.jpg",
    "518736589_4004329776547203_7223377311133871794_n.jpg",
    "539991710_2595981390755855_3380843254067432208_n.jpg",
    "540195930_25001733762758256_1970329605564028651_n.jpg"
];

function enterSite() {
    const overlay = document.getElementById('video-overlay');
    // Premium Zoom-out Fade
    overlay.style.transform = "scale(1.2)";
    overlay.style.opacity = "0";
    
    setTimeout(() => {
        overlay.style.display = "none";
        document.body.classList.remove('locked');
        // Initial Scroll to trigger any scroll animations if added later
        window.scrollTo(0, 0);
    }, 800);
}

function revealGallery() {
    const cover = document.getElementById('galleryCover');
    const grid = document.getElementById('hidden-gallery-grid');

    // Perform Task: Build the HTML grid from the image list
    let html = "";
    myPhotos.forEach((img, index) => {
        html += `
            <div class="photo-card-premium" style="animation-delay: ${index * 0.1}s">
                <img src="${imagePath}${img}" alt="History Photo">
                <p>।। सुवर्ण क्षण ।।</p>
            </div>
        `;
    });

    grid.innerHTML = html;
    
    // Smooth Transition from Cover to Grid
    cover.style.opacity = "0";
    cover.style.transform = "translateY(-20px)";

    setTimeout(() => {
        cover.style.display = "none";
        grid.style.display = "grid";
        
        // Dynamic scroll to the start of the grid
        const offset = grid.offsetTop - 100;
        window.scrollTo({
            top: offset,
            behavior: 'smooth'
        });
    }, 500);
}
