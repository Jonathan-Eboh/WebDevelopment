from __future__ import unicode_literals
from django.db import models
import re



NAME_REGEX = re.compile(r'[a-zA-Z]{2,}')



class UserManager(models.Manager):
    def validateUser(self, postData):
        status = True
        errors = []

        if not NAME_REGEX.match(postData['name']): # Not (True) is False thus if the conditional evaluates to true then not will make it false and skip the code under it. Otherwise it will evaluate to False and then not will make it true and the code under it will indeed run
            errors.append("Name field should contain letters only!")
            status = False
        if not NAME_REGEX.match(postData['interest']): #similar logic as above, just for interet instead of name
            status = False
        if len(postData['name']) < 1: #Make sure the name field isnt blank
            errors.append("Name field cannot be blank!")
            status = False
        #The next portion is important......
        if User.userManager.filter(user_name=postData['name']):
            user = User.userManager.filter(user_name = postData['name']) # This returns a list of one element
            interest = user[0].interest.all() #im pretty sure this is where we utilize the ManyToManyField by putting all of the users interest into a variable called interest
            for interest in interests:
                print interest.interest_name
                if interest == interest.interest_name: #Check to see if the users interest is already in the database? As in users can have multiple interest just cant input the same one
                    errors.append("User already has that interest")
                    return False
                else:
                    this_user = User.userManager.get(user_name = postData['name'])
                    this_interest = Interest.objects.create(interest_name = postData['interest'])
                    this_interest.users_interested.add(this_user) #This line is establishing the link between the user and their interest...This should be in the form of a list
                    return True
        #This next code block is where we actually enter the user and thier interest into the database granted everything else checked out.
        if status is True:
            user = User.userManager.create(user_name = postData['name'])
            interest = Interest.objects.create(interest_name = postData['interest']) #pay attention to this line
            interest.user_interest.add(user) #This is where we join interest to the user, adding to that list
            print "we created"
            return True




class User(models.Model):
    user_name = models.CharField(max_length= 255, blank = True, null=True)
    userManager = UserManager() #our instance of our UserManager class declared within our User class
    created_at = models.DateTimeField(auto_now_add=True, blank = True, null = True)
    updated_at = models.DateTimeField(auto_now=True)

class Interest(models.Model):
    interest_name = models.CharField(max_length=255, blank = True, null=True)
    user_interest = models.ManyToManyField(User, related_name="interest") #links our tables through a many to many relationship
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
