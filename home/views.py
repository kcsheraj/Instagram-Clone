from django.shortcuts import render

post = [
{
    "username": "yomomma360",
    "description": "This is post by yo momma",
    "likes": 3,
    "comments": {
        "commentUsername": "someoneElse",
        "CommentDescription": "lol, this is funny"
    },
    "imageLink": "https://source.unsplash.com/random/512x512/?apples"
},
{
    "username": "liljohnny",
    "description": "check this out yall!",
    "likes": 1023,
    "comments": {
        "commentUsername": "grandma22",
        "CommentDescription": "yo thats crazyyy!"
    },
    "imageLink": "https://source.unsplash.com/random/512x512/?oranges"
}

]


# Create your views here.
def index(request):
    return render(request, "home/index.html",{"posts": post})#passing the post list to the index.html

def upload_view(request):
    # Add your view logic here
    return render(request, 'home/upload.html')