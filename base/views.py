from django.shortcuts import render, redirect

from .models import Mails

from django.contrib import messages

def contact(request):
    if request.method == "POST":
        name = request.POST['name']
        email = request.POST['email']
        subject = request.POST['subject']
        message = request.POST['message']
        
        mail = Mails.objects.create(
            name=name,
            email=email,
            subject=subject,
            message = message
        )
        
        mail.save();
        
        messages.info(request, "message was sent successfully!")
        return redirect("main-page")
    
    return render(request,"index.html",{"first":True})