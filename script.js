// ========================================
// LUMINA 2K26
// THE RISE OF NEW ERA
// ========================================


// ENTER MEMORIES
function enterMemories() {

    const opening = document.getElementById("opening");

    if (opening) {
        opening.classList.add("hide");
    }

    setTimeout(function () {

        const photos = document.getElementById("photos");

        if (photos) {
            photos.scrollIntoView({
                behavior: "smooth"
            });
        }

    }, 900);
}


// ========================================
// PHOTO VIEWER
// ========================================

const photos = document.querySelectorAll(".photo img");

photos.forEach(function(photo) {

    photo.addEventListener("click", function(event) {

        event.stopPropagation();

        const viewer =
            document.getElementById("photoViewer");

        const fullPhoto =
            document.getElementById("fullPhoto");

        if (viewer && fullPhoto) {

            fullPhoto.src = this.src;

            viewer.style.display = "flex";

            document.body.style.overflow = "hidden";
        }

    });

});


// CLOSE PHOTO VIEWER

function closePhoto() {

    const viewer =
        document.getElementById("photoViewer");

    if (viewer) {

        viewer.style.display = "none";

        document.body.style.overflow = "auto";
    }

}


// ========================================
// ESCAPE KEY
// ========================================

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closePhoto();

    }

});


// ========================================
// SCROLL REVEAL
// ========================================

const revealElements =
    document.querySelectorAll(
        ".section, .final-message, .video-card, .photo"
    );


const observer =
    new IntersectionObserver(

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
// VIDEO CONTROL
// Only one video plays at a time
// ========================================

const videos =
    document.querySelectorAll("video");


videos.forEach(function(video) {

    video.addEventListener(
        "play",
        function() {

            videos.forEach(function(otherVideo) {

                if (otherVideo !== video) {

                    otherVideo.pause();

                }

            });

        }
    );

});


// ========================================
// CONSOLE
// ========================================

console.log(
    "✨ LUMINA 2K26 ✨"
);

console.log(
    "THE RISE OF NEW ERA"
);

console.log(
    "SCAN • RELIVE • REMEMBER"
);
