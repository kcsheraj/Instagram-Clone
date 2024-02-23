//UPDATE IMAGE WITH IMAGE LINK
document.addEventListener("DOMContentLoaded", function () {
  // Get reference to the image link input field and preview image
  const imageLinkInput = document.getElementById("image-link");
  const imagePreview = document.getElementById("image-preview");

  // Add event listener for input event on image link input field
  imageLinkInput.addEventListener("input", function () {
    // Update source attribute of the preview image with the value of the input field
    imagePreview.src = imageLinkInput.value;
  });
});
