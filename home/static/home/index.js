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

document.addEventListener("DOMContentLoaded", () => {
  const postsDiv = document.getElementById("postsDiv");
  let postCounter = 0;

  window.addEventListener("scroll", () => {
    if (window.scrollY + window.innerHeight >= document.body.offsetHeight - 2) {
      // Get the basic post layout (from index.html)
      var post = document.querySelector("article.post");
      if (post) {
        // Create a new post element
        var newPost = document.createElement("article");
        newPost.className = "post";

        // Copy over the HTML content of the original post
        newPost.innerHTML = post.innerHTML;

        // Update image source to "https://source.unsplash.com/random/512x512/?social" with a unique timestamp
        var postImage = newPost.querySelector(".post__media");
        if (postImage) {
          postImage.src =
            "https://source.unsplash.com/random/512x512/?social&t=" +
            Date.now();
          postImage.alt = "Post Content"; // Reset alt attribute
        }

        // Update username in post header
        var postUser = newPost.querySelector(".post__user");
        if (postUser) {
          postUser.textContent = "RandomUser360";
        }

        // Update username in post description
        var postDescription = newPost.querySelector(".post__description span");
        if (postDescription) {
          postDescription.innerHTML =
            '<a class="post__name--underline" href="#">RandomUser360</a> check my post out!';
        }

        // Remove like button if post is already liked
        var postLiked = newPost.querySelector(
          ".post__buttons .post__button:first-child"
        );
        if (postLiked && postLiked.classList.contains("post__button--liked")) {
          postLiked.remove();
        }

        // Remove comments other than "lol, this is funny"
        var commentList = newPost.querySelector(".post__comments-list");
        if (commentList) {
          var comments = commentList.querySelectorAll(".post__comment-text");
          comments.forEach((comment) => {
            if (comment.textContent.trim() !== "lol, this is funny") {
              comment.closest(".post__comment-item").remove();
            }
          });
        }

        // Append the new post to the postsDiv
        postsDiv.appendChild(newPost);

        postCounter++;
      } else {
        console.log("[Error] No posts found");
      }
    }
  });
});

//POST COMMENTS
//uses "this keyword" to pass the button element to the function
function submitComment(button) {
  // Get the comment input value
  var commentInput = button.parentNode.querySelector(
    ".post__comment-textfield"
  ).value;

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

  console.log(newComment);

  // Append the new comment to the comments list of the corresponding post
  var commentsList = button.parentNode.previousElementSibling;

  commentsList.appendChild(newComment);

  // Clear the comment input field after submission
  button.parentNode.querySelector(".post__comment-textfield").value = "";
}

// Likeing and unliking posts
function toggleLike(button) {
  const likeButton = button;
  const likeCountElement = button.parentElement.parentElement.querySelector(
    ".post__infos .likeCount"
  );

  // Extract the number from the like count text content using regular expression
  let likeCountValue = parseInt(likeCountElement.textContent.match(/\d+/)[0]);

  console.log(likeCountValue);

  let isLiked = likeButton.classList.contains("liked");

  if (isLiked) {
    // Unlike the post
    // Decrease the like count value by 1
    likeCountValue--;
    // Update the like count text content
    likeCountElement.textContent = `Liked by ${likeCountValue} others`;
    likeButton.classList.remove("liked");
  } else {
    // Like the post
    // Increase the like count value by 1
    likeCountValue++;
    // Update the like count text content
    likeCountElement.textContent = `Liked by currentUser and ${likeCountValue} others`;
    likeButton.classList.add("liked");
  }
}
