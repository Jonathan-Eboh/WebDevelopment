from flask import Flask, render_template, request, redirect, url_for
from mysqlconnection import MySQLConnector

app = Flask(__name__)
mysql = MySQLConnector(app, 'fullfriends')#named after database

@app.route('/')# This route is to display informaiton in paragraph 1
def index(): #can name this whatever, convention to name landing page index
    friends = mysql.query_db("SELECT * FROM friends")
    print friends
    return render_template('index.html', friends=friends)#the orange friends pairs with the jinja in the html doc({{ friends }})
#the value of the orange friends is set as the content recived form the html call on line 9
# THIS IS THE ROUTE TO CREATE A NEW FRIEND
@app.route('/friends', methods=['POST'])
def create():
    query = "INSERT INTO friends(first_name, last_name, email, created_at, updated_at)\
    VALUES(:first_name, :last_name, :email, NOW(), NOW())" # ":" are just placeholders for future values. They have to be equal to the key name in the bottom. NOW is a function (we don't chang it)
    data=  {
                'first_name':request.form['first_name'], #we're passing the column name from database
                'last_name':request.form['last_name'],
                'email':request.form['email'],
            }
    mysql.query_db(query, data) #method from a class in mysqlconnection.py
    return redirect('/')


# THIS IS THE ROUTE TO RETRIEVE THE ID AND RERENDER TO THE EDIT PAGE
@app.route('/friends/<friend_id>/edit', methods=['GET'])
def edit(friend_id):
    query = "SELECT * FROM friends WHERE id = :id"
    data = {
        'id': friend_id
    }
    myvar = mysql.query_db(query, data)
    return render_template("edit.html", friend=myvar)

# THIS IS THE ROUTE TO UPDATE OUR RETRIEVED ID AND ITS RESPECTIVE KEYS AND VALUES BY TAKING USER INPUT FROM THE FORM
@app.route('/friends/<friend_id>', methods=['POST'])
def update(friend_id):
    query = "UPDATE friends \
    SET first_name = :first_name, last_name = :last_name, email = :email,  updated_at=NOW() \
    WHERE id = :id" #this is giving up trouble the id is empty and there is no 0 id
    data= {
                'first_name':request.form['first_name'],
                'last_name':request.form['last_name'],
                'email':request.form['email'],
                'id': friend_id
          }
    mysql.query_db(query,data)
    return redirect('/')

@app.route('/friends/<friend_id>/delete', methods=['POST'])
def destroy(id):
    print "PENISFACEFUCKOFF"
    return redirect('/')


app.run(debug=True)
