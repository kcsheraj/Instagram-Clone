//UPDATE IMAGE WITH IMAGE LINK//UPLOAD.HTML
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

//INFINITE SCROLLING

window.onscroll = () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    // Create and append new posts
    createNewPosts();
  }
};

function createNewPosts() {
  // Define the number of new posts you want to create
  const numNewPosts = 5; // Change this number as needed

  // Loop to create and append new posts
  for (let i = 0; i < numNewPosts; i++) {
    const newPost = createPostElement();
    document.querySelector(".content").appendChild(newPost);
  }
}

function createPostElement() {
  // Create elements for the new post
  const postElement = document.createElement("div");
  postElement.classList.add("posts");
  // Customize the post element based on the provided HTML template
  // You can directly copy the structure from the original post in the HTML template
  postElement.innerHTML = `
  <!-- This element and class contain attributes that each 'post' should have -->
  <article class="post">
    <div class="post__header">
      <!-- Makes the profile picture clickable -->
      <div class="post__profile">
        <a href="https://github.com/leocosta1" target="_blank" class="post__avatar">
          <img src="{% static 'home/assets/default-user.png' %}" alt="User Picture" />
        </a>
        <!-- Makes the username clickable -->
        <a href="https://github.com/leocosta1" target="_blank" class="post__user">leocosta1</a>
      </div>
    </div>

    <div class="post__content">
      <div class="post__medias">
        <!-- Sets the image to the post's URL -->
        <img class="post__media" src="https://source.unsplash.com/random/512x512/?social" alt="Post Content" />
      </div>
    </div>

    <div class="post__footer">
      <div class="post__buttons">
        <!-- Like Button -->
        <button class="post__button">
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">

            <!-- Sets the color of the heart -->
            <style>
              .s1 {
                fill: #000000;
              }
            </style>
            <path class="s1"
              d="M12 21.35l-1.45-1.32C5.4 16.21 2 13.25 2 9.5 2 7.02 3.53 5 5.5 5c1.74 0 3.41.81 4.5 2.09C10.59 5.81 12.26 5 13.99 5 16.47 5 18 7.02 18 9.5c0 3.75-3.4 6.71-8.55 10.54L12 21.35z" />
          </svg>
        </button>
        </button>
        <!-- Comment Button -->
        <button class="post__button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M21.2959 20.8165L20.2351 16.8602C20.1743 16.6385 20.2047 16.3994 20.309 16.1907C21.2351 14.3342 21.5438 12.117 20.9742 9.80402C20.2003 6.67374 17.757 4.16081 14.6354 3.33042C13.7833 3.10869 12.9442 3 12.1312 3C6.29665 3 1.74035 8.47365 3.31418 14.5647C4.04458 17.3819 7.05314 20.2992 9.88344 20.9861C10.6486 21.173 11.4008 21.26 12.1312 21.26C13.7006 21.26 15.1701 20.8557 16.4614 20.1601C16.6049 20.0818 16.7657 20.0383 16.9222 20.0383C17.0005 20.0383 17.0787 20.047 17.157 20.0688L21.009 21.0991C21.0307 21.1035 21.0525 21.1078 21.0699 21.1078C21.2177 21.1078 21.3351 20.9687 21.2959 20.8165ZM19.0178 17.1863L19.6178 19.4253L17.4831 18.8558C17.3005 18.8079 17.1135 18.7819 16.9222 18.7819C16.557 18.7819 16.1875 18.8775 15.8571 19.0558C14.6963 19.6818 13.4441 19.9992 12.1312 19.9992C11.4834 19.9992 10.8269 19.9166 10.1791 19.7601C7.78354 19.1775 5.14453 16.6037 4.53586 14.2473C3.90111 11.7865 4.40109 9.26057 5.90536 7.31719C7.40964 5.3738 9.6791 4.26081 12.1312 4.26081C12.8529 4.26081 13.5876 4.35646 14.3137 4.5521C16.9961 5.26511 19.0786 7.39544 19.7525 10.1084C20.2264 12.0213 20.0308 13.9299 19.183 15.6298C18.9395 16.1168 18.8787 16.6689 19.0178 17.1863Z"
              fill="var(--text-dark)" stroke="var(--text-dark)" stroke-width="0.7" />
          </svg>
        </button>
        <!-- Forward Button -->
        <button class="post__button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M22.8555 3.44542C22.6978 3.16703 22.3962 3 22.0714 3L2.91369 3.01392C2.52859 3.01392 2.19453 3.25055 2.05997 3.60781C1.96254 3.86764 1.98574 4.14603 2.11565 4.37338C2.16669 4.45689 2.23165 4.53577 2.31052 4.60537L9.69243 10.9712L11.4927 20.5338C11.5623 20.9096 11.8499 21.188 12.2304 21.2483C12.6062 21.3086 12.9774 21.1323 13.1723 20.8029L22.8509 4.35018C23.0179 4.06715 23.0179 3.72381 22.8555 3.44542ZM4.21748 4.39194H19.8164L10.4255 9.75089L4.21748 4.39194ZM12.6248 18.9841L11.1122 10.948L20.5171 5.58436L12.6248 18.9841Z"
              fill="var(--text-dark)" stroke="var(--text-dark)" stroke-width="0.3" />
          </svg>
        </button>

        <div class="post__indicators"></div>

        <!-- Bookmark button -->
        <button class="post__button post__button--align-right">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19.875 2H4.125C3.50625 2 3 2.44939 3 3.00481V22.4648C3 23.0202 3.36563 23.1616 3.82125 22.7728L11.5444 16.1986C11.7244 16.0471 12.0225 16.0471 12.2025 16.1936L20.1731 22.7879C20.6287 23.1666 21 23.0202 21 22.4648V3.00481C21 2.44939 20.4994 2 19.875 2ZM19.3125 20.0209L13.3444 15.0827C12.9281 14.7394 12.405 14.5677 11.8763 14.5677C11.3363 14.5677 10.8019 14.7444 10.3856 15.0979L4.6875 19.9502V3.51479H19.3125V20.0209Z"
              fill="var(--text-dark)" stroke="var(--text-dark)" stroke-width="0.7" />
          </svg>
        </button>
      </div>

      <div class="post__infos">
        <!-- Likes -->
        <div class="post__likes">
          <a href="#" class="post__likes-avatar">
            <img src="{% static 'home/assets/default-user.png' %}" alt="User Picture" />
          </a>

          <span>Liked by
            <a href="#">73 others</a></span>
        </div>

        <!-- Description -->
        <div class="post__description">
          <span>
            <a class="post__name--underline" href="https://github.com/leocosta1" target="_blank">leocosta1</a>
            Responsive clone of Instagram UI. Made by Leonard Costa with ❤ for study
            purposes.
          </span>
        </div>

        <!-- Time of post -->
        <span class="post__date-time">30 minutes ago</span>
      </div>
    </div>

    <!-- Comments Section -->
    <div class="post__comments">
      <!-- Comments Heading -->
      <h3 class="post__comments-heading">Comments</h3>

      <!-- List of Comments -->
      <ul class="post__comments-list">
        <!-- Comment Item -->
        <li class="post__comment-item">
          <div class="post__comment-avatar">
            <img src="{% static 'home/assets/default-user.png' %}" alt="User Picture" />
          </div>
          <div class="post__comment-content">
            <p class="post__comment-text">This is a great post!</p>
            <span class="post__comment-user">
              <a href="#">krishna.purohit</a>
            </span>
          </div>
        </li>

        <!-- Repeat the above comment item structure for other comments as needed -->
      </ul>

      <!-- Comment Input Field -->
      <div class="post__comment-input">
        <input type="text" class="post__comment-textfield" placeholder="Add a comment..." />
        <button class="post__comment-submit">Post</button>
      </div>
    </div>
  </article>
    `;
  return postElement;
}

//POST COMMENTS
function submitComment() {
  // Get the comment input value
  var commentInput = document.getElementById("commentInput").value;

  // Create a new comment element
  var newComment = document.createElement("li");
  newComment.className = "post__comment-item";
  newComment.innerHTML = `
    <div class="post__comment-avatar">
      <img src="{% static 'home/assets/default-user.png' %}" alt="User Picture" />
    </div>
    <div class="post__comment-content">
      <p class="post__comment-text">${commentInput}</p>
      <span class="post__comment-user">
        <a href="#">CurrentUser</a>
      </span>
    </div>
  `;

  // Append the new comment to the comments list
  var commentsList = document.getElementById("commentsList");
  commentsList.appendChild(newComment);

  // Clear the comment input field after submission
  document.getElementById("commentInput").value = "";
}
