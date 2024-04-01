from django.shortcuts import render, redirect
from .models import Post, Comment

post = [
{
    "username": "yomomma360",
    "description": "This is post by yo momma",
    "likes": 3,
    "comments": {
        "commentUsername": "someoneElse",
        "CommentDescription": "lol, this is funny"
    },
    "imageLink": "https://source.unsplash.com/random/512x512/?apples",
    "post_id": 1
},
{
    "username": "liljohnny",
    "description": "check this out yall!",
    "likes": 1023,
    "comments": {
        "commentUsername": "grandma22",
        "CommentDescription": "yo thats crazyyy!"
    },
    "imageLink": "https://source.unsplash.com/random/512x512/?oranges",
    "post_id": 2
}

]


# Create your views here.
def index(request):
    posts = Post.objects.all()
    return render(request, "home/index.html", {"posts": posts})
 
def upload_view(request):
    if request.method == 'POST':
        # Retrieve form data
        description = request.POST.get('description')
        image_link = request.POST.get('image_link')
        # Assuming user is logged in and user object is available in request
        user = request.user

        # If image link is empty, use default preview image link
        if not image_link:
            image_link = "https://source.unsplash.com/random/512x512/?social"

         # Create a new Post object and save it to the database
        new_post = Post.objects.create(
            user=user,
            description=description,
            image_link=image_link
        )
        
        # Insert the new post at the beginning of the post list
        post.insert(0, new_post)
        
        # Redirect to the index page
        return redirect('index')
    
    # If the request method is GET, render the upload page
    return render(request, 'home/upload.html')

def submit_comment(request):
    if request.method == 'POST':
        # Retrieve form data
        post_id = request.POST.get('post_id')
        text = request.POST.get('comment_text')
        user = request.user  # Assuming the user is logged in
        
        # Find the post based on the post_id
        post = Post.objects.get(pk=post_id)
        
        # Create a new Comment object and save it
        comment = Comment.objects.create(user=user, post=post, text=text)
        
        # Redirect to the same page or another appropriate page
        return redirect('index')  # Redirect to the homepage for example
    
    # Handle GET requests or other cases as needed
    return redirect('index')  # Redirect to the homepage if the request method is not POST