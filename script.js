// script.js

// Function to play video in the modal
function playVideo() {
    document.getElementById("videoModal").style.display = "block";
}

// Function to close the video modal
function closeVideo() {
    const videoModal = document.getElementById("videoModal");
    videoModal.style.display = "none";
    const video = document.getElementById("modalVideo");
    video.pause();
    video.currentTime = 0;
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById("videoModal");
    if (event.target === modal) {
        closeVideo();
    }
};

// Function to animate follower counts
function animateCounts() {
    const counters = document.querySelectorAll('.count');
    const speed = 2000; // Adjust animation speed to make it more gradual

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 10);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });

    // Hide the followers count section after 2 minutes
    setTimeout(() => {
        document.querySelector('.followers-count').style.display = 'none';
    }, 120000); // 120000 milliseconds = 2 minutes
}

// Initiate animation on page load
document.addEventListener('DOMContentLoaded', animateCounts);
