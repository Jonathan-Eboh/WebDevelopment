# goes with Hello flask assingment

from flask import Flask, render_template
app =Flask(__name__)
@app.route('/success.html')
def index():
    return render_template('index.html')

@app.route('/')
def success():
  return render_template('index.html', name = "Jon")

app.run(debug=True)
