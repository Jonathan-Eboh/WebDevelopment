# This goes with the landing page assingment


from flask import Flask, render_template
app = Flask(__name__)
@app.route('/')
def index():
    return render_template("dojos.html")
app.run(debug=True)
