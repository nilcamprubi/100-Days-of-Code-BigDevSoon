// Select all thumbnail images
const thumbnails = document.querySelectorAll('.thumbnail');

// Select the main image element
const mainImage = document.getElementById('main-image');

// Loop through each thumbnail image and add a click event listener
thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener('click', function() {
    // Start fade-out effect
    mainImage.classList.add('fade-out');

    // After the fade-out effect is done (0.25s), change the image
    setTimeout(() => {
      // Change the src of the main image
      const newSrc = thumbnail.src.replace('-thumbnail', '');
      mainImage.src = newSrc;

      // Remove fade-out and fade the image back in
      mainImage.classList.remove('fade-out');
    }, 250); // This should match the duration of the CSS transition (0.5s)
  });
});