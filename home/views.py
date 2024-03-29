from django.shortcuts import render, redirect
from .models import User

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
    users = User.objects.all()
    return render(request, "home/index.html",{"posts": post, "users": users})#passing the post list to the index.html
 
def upload_view(request):
    if request.method == 'POST':
        # Retrieve form data
        description = request.POST.get('description')
        image_link = request.POST.get('image_link')

        # If image link is empty, use default preview image link
        if not image_link:
            image_link = "https://source.unsplash.com/random/512x512/?social"

        # Create a new post dictionary
        new_post = {
            "username": "CurrentUser",  # You can replace this with the actual username
            "description": description,
            "likes": 0,  # Initial likes count
            "comments": {},  # No comments initially
            "imageLink": image_link
        }
        
        # Insert the new post at the beginning of the post list
        post.insert(0, new_post)
        
        # Redirect to the index page
        return redirect('index')
    
    # If the request method is GET, render the upload page
    return render(request, 'home/upload.html')