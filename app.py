from flask import Flask, render_template, request, redirect, url_for
from database import get_db_connection, init_db

app = Flask(__name__)
init_db()

students = []

@app.route("/")
def index():

    conn = get_db_connection()

    students = conn.execute("SELECT * FROM students").fetchall()

    conn.close()

    return render_template(
        "index.html",
        students=students
    )

@app.route('/add', methods=['POST'])
def add():
    name = request.form['name']
    email = request.form['email']
    course = request.form['course']

    students.append({
        "name": name,
        "email": email,
        "course": course
    })

    return redirect(url_for('home'))

@app.route('/delete/<int:id>')
def delete(id):
    if id < len(students):
        students.pop(id)
    return redirect(url_for('home'))

@app.route('/edit/<int:id>', methods=['POST'])
def edit(id):
    if id < len(students):
        students[id]['name'] = request.form['name']
        students[id]['email'] = request.form['email']
        students[id]['course'] = request.form['course']
    return redirect(url_for('home'))

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route("/add_student", methods=["POST"])
def add_student():

    name = request.form["name"]
    roll = request.form["roll"]
    class_name = request.form["class_name"]
    email = request.form["email"]
    phone = request.form["phone"]

    conn = get_db_connection()

    conn.execute("""
        INSERT INTO students
        (name, roll, class_name, email, phone)
        VALUES (?, ?, ?, ?, ?)
    """, (name, roll, class_name, email, phone))

    conn.commit()
    conn.close()

    return redirect("/")

if __name__ == "__main__":
    app.run(debug=True)