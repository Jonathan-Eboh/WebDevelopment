from __future__ import unicode_literals
from django.db import models
import re
import bcrypt
from django.contrib import messages

EMAIL_REGXE = re.compile('^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
NAME_RE = re.compile(r'[a-zA-Z]{2,}')
# Create your models here.

class UserManager(models.Manager):# ORM
      def validateReg(self, *args):
          #first_name=0, last_name=1, email=2, password=3, confirm = 4
    #   def validateReg(self,email,first_name,last_name,password,request):
        if not NAME_RE.match(args[0]):
            return False

        elif not NAME_RE.match(args[1]):
            return False

        elif not EMAIL_REGXE.match(args[2]):
            return False

        elif len(args[3]) < 8:
            return False

        elif args[3] != args[4]:
            return False

        else:
            password = args[3].encode()
            pwhash = bcrypt.hashpw(password, bcrypt.gensalt())
            super(UserManager, self).create(first_name=args[0], last_name = args[1],email=args[2],password=pwhash)
            return {'True': User.userManager.filter(email=args[2])[0].id} #returns a query set access first element in a list one one element


        # if len(last_name) > :
        # if len(password) > :


def login(self, email, password):# orange is passed in email
    them = User.userManager.filter(email=email) #orange - database email, white is passed in  email, them is set equal to the persons whole info set whos email equals the target email
    if not them:

        return False
    else:
        if not bcrypt.checkpw(password.encode(), them[0].password.encode):

            return False
        else:
            return {'True': them[0].id} #this is the user id






class User(models.Model):
    first_name = models.CharField(max_length = 255)
    last_name = models.CharField(max_length = 255)
    email = models.EmailField(max_length = 255)
    password = models.CharField(max_length = 255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    userManager = UserManager() #our defined instance of the UserManager class called userManager to extend the functionality of our Email class
