// ========================================
// LUMINA 2K26
// THE RISE OF NEW ERA
// ========================================


// Opening screen
function enterMemories() {

    const opening = document.getElementById("opening");

    opening.classList.add("hide");

    // Scroll to photos after opening animation
    setTimeout(function () {

        document.getElementById("photos").scrollIntoView({
            behavior: "smooth"
        });

    }, 900);
}


// ========================================
// PHOTO VIEWER
// ========================================

const photos = document.querySelectorAll(".photo img");

photos.forEach(function(photo) {

    photo.addEventListener("click", function(event) {

        event.stopPropagation();

        const viewer = document.getElementById("photoViewer");
        const fullPhoto = document.getElementById("fullPhoto");

        fullPhoto.src = this.src;

        viewer.style.display = "flex";

        document.body.style.overflow = "hidden";

    });

});


function closePhoto() {

    const viewer = document.getElementById("photoViewer");

    viewer.style.display = "none";

    document.body.style.overflow = "auto";

}


// ========================================
// ESC KEY CLOSE PHOTO
// ========================================

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closePhoto();

    }

});


// ========================================
// NAVIGATION
// ========================================

document.querySelectorAll(".nav-links a").forEach(function(link) {

    link.addEventListener("click", function() {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// ========================================
// REVEAL ANIMATION
// ========================================

const revealElements = document.querySelectorAll(
    ".section, .final-message, .video-card, .photo"
);

const observer = new IntersectionObserver(

    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(function(element) {

    element.classList.add("reveal");

    observer.observe(element);

});


// ========================================
// PREVENT VIDEO AUTOPLAY
// ========================================

const videos = document.querySelectorAll("video");

videos.forEach(function(video) {

    video.addEventListener("play", function() {

        videos.forEach(function(otherVideo) {

            if (otherVideo !== video) {

                otherVideo.pause();

            }

        });

    });

});


// ========================================
// CONSOLE MESSAGE
// ========================================

console.log(
    "✨ LUMINA 2K26 — THE RISE OF NEW ERA ✨"
);

console.log(
    "Scan. Relive. Remember."
);
