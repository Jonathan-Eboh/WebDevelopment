from __future__ import unicode_literals

from django.db import models
import re

EMAIL_REGXE = re.compile('^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
# Create your models here.

class UserManager(models.Manager):# ORM
     def registration(self,email): # we will call this in our views like this: Email.UserManager.registration(self,email)
         if EMAIL_REGXE.match(email):

             return True
         else:
             return False







class Email(models.Model):
    user_email = models.EmailField(max_length = 255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    userManager = UserManager() #our defined instance of the UserManager class called userManager to extend the functionality of our Email class
