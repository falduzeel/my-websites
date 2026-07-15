// ================================
// EduTrack Dashboard Script
// ================================

console.log("EduTrack Dashboard Loaded");

// ------------------------------
// Student Search
// ------------------------------

const searchInput = document.getElementById("studentSearch");

if(searchInput){

searchInput.addEventListener("keyup", function(){

let filter = this.value.toLowerCase();

let rows = document.querySelectorAll("#studentTable tbody tr");

rows.forEach(function(row){

let text = row.innerText.toLowerCase();

row.style.display = text.includes(filter) ? "" : "none";

});

});

}

// ------------------------------
// Welcome Message
// ------------------------------

window.onload = function(){

console.log("Welcome to EduTrack");

}

// ------------------------------
// Notification Bell
// ------------------------------

const bell = document.querySelector(".profile i");

if(bell){

bell.addEventListener("click",function(){

alert("🔔 No New Notifications");

});

}

// ------------------------------
// Card Hover Animation
// ------------------------------

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px) scale(1.02)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px) scale(1)";

});

});

// ------------------------------
// Edit Buttons
// ------------------------------

document.querySelectorAll(".edit-btn").forEach(btn=>{

btn.addEventListener("click",function(){

let row=this.closest("tr");

let name=row.cells[1].innerText;

let studentClass=row.cells[2].innerText;

let attendance=row.cells[3].innerText;

let marks=row.cells[4].innerText;

let newName=prompt("Student Name:",name);
if(newName===null) return;

let newClass=prompt("Class:",studentClass);
if(newClass===null) return;

let newAttendance=prompt("Attendance:",attendance);
if(newAttendance===null) return;

let newMarks=prompt("Marks:",marks);
if(newMarks===null) return;

row.cells[1].innerText=newName;
row.cells[2].innerText=newClass;
row.cells[3].innerText=newAttendance;
row.cells[4].innerText=newMarks;

alert("✅ Student Updated");

});

});

// ------------------------------
// Delete Buttons
// ------------------------------

document.querySelectorAll(".delete-btn").forEach(btn=>{

btn.addEventListener("click",function(){

if(confirm("Delete this student?")){

this.closest("tr").remove();

alert("✅ Student Deleted");

}

});

});

// ------------------------------
// Counter Animation
// ------------------------------

function counter(id,target){

let element=document.getElementById(id);

if(!element) return;

let count=0;

let speed=20;

let update=setInterval(()=>{

count++;

element.innerHTML=count;

if(count>=target){

clearInterval(update);

}

},speed);

}

counter("totalStudents",250);

counter("teacherCount",18);

// ------------------------------
// Attendance Animation
// ------------------------------

const attendance=document.getElementById("attendanceRate");

if(attendance){

attendance.innerHTML="95%";

}

const marks=document.getElementById("averageMarks");

if(marks){

marks.innerHTML="87%";

}

// ================================
// End
// ================================