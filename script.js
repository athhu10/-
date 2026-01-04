// CONFIGURATION: Add your folder name and image list here
const imageFolder = "logo_files/"; 

const imageFiles = [
    "460714737_1153625636113939_2908347564215830451_n.jpg",
    "518736589_4004329776547203_7223377311133871794_n.jpg",
    "539991710_2595981390755855_3380843254067432208_n.jpg",
    "540195930_25001733762758256_1970329605564028651_n.jpg"
    // Add new filenames here like: "image_name.jpg",
];

function enterSite() {
    document.getElementById('video-overlay').style.transform = 'translateY(-100%)';
    setTimeout(() => {
        document.querySelector('.raja-title').classList.add('reveal-text');
    }, 400);
    document.body.classList.remove('locked');
}

function revealGallery() {
    const cover = document.getElementById('galleryCover');
    const grid = document.getElementById('hidden-gallery-grid');

    // AUTOMATIC TASK: Generate the HTML for every image in the folder list
    let galleryHTML = "";
    imageFiles.forEach(file => {
        galleryHTML += `
            <div class="photo-card">
                <img src="${imageFolder}${file}" alt="Darshan Photo">
                <p>।। सुवर्ण क्षण ।।</p>
            </div>
        `;
    });

    // Inject the generated cards into the grid
    grid.innerHTML = galleryHTML;

    // Transition effects
    cover.style.opacity = '0';
    setTimeout(() => {
        cover.style.display = 'none';
        grid.style.display = 'grid';
        grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 400);
}
