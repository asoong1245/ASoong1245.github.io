
const form = document.getElementById("form");

const output = document.getElementById("output");

const pageTitle = document.getElementById("page-title");


form.addEventListener("submit", e => {

e.preventDefault();

pageTitle.textContent = "Introduction Form";

const data = collectData();

form.style.display="none";

output.innerHTML = buildIntro(data);

});


document.getElementById("clearBtn").addEventListener("click", () => {

document.querySelectorAll("input, textarea").forEach(el => el.value="");

});


document.getElementById("addCourse").addEventListener("click", () => {

const div = document.createElement("div");

div.innerHTML = `

<input placeholder="Dept">

<input placeholder="Number">

<input placeholder="Course Name">

<input placeholder="Reason">

<button type="button" onclick="this.parentElement.remove()">Delete</button>

`;

document.getElementById("courses").appendChild(div);

});


function collectData(){

let imagePath="images/BLUEANGELS.png";

const fileInput=document.getElementById("image");

if(fileInput.files.length>0){

imagePath=URL.createObjectURL(fileInput.files[0]);

}


const courses=[];

document.querySelectorAll("#courses div").forEach(c=>{

const i=c.querySelectorAll("input");

courses.push({

dept:i[0].value,

num:i[1].value,

name:i[2].value,

reason:i[3].value

});

});


return{

first:firstName.value,

middle:middleName.value,

nick:nickname.value,

last:lastName.value,

divider:divider.value,

adj:mascotAdj.value,

animal:mascotAnimal.value,

date:date.value,

caption:caption.value,

statement:statement.value,

personal:personalBg.value,

professional:professionalBg.value,

academic:academicBg.value,

subject:subjectBg.value,

computer:computer.value,

backup:backupComputer.value,

funny:funny.value,

extra:extra.value,

quote:quote.value,

author:quoteAuthor.value,

image:imagePath,

courses:courses

};

}


function buildIntro(d){

let courseHTML="";

d.courses.forEach(c=>{

courseHTML+=`<li>${c.dept} ${c.num}: ${c.name}, ${c.reason}</li>`;

});


return`

<p>

I understand that what I put here is publicly available on the web and I won’t put anything here I don’t want the public to see -

<i>${d.first} ${d.last} - ${d.date}</i>

</p>


<h2>

${d.first} ${d.middle} ${d.nick ? `"${d.nick}"` : ""} ${d.last}

${d.divider}

${d.adj} ${d.animal}

</h2>


<figure>

<img src="${d.image}" width="500" alt="user image">

<figcaption>

<i>${d.caption}</i>

</figcaption>

</figure>


<p>

${d.statement}

</p>


<ul>

<li>

<strong>Personal Background: </strong>

${d.personal}

</li>


<li>

<strong>Professional Background: </strong>

${d.professional}

</li>


<li>

<strong>Academic Background: </strong>

${d.academic}

</li>


<li>

<strong>Background in this subject: </strong>

${d.subject}

</li>


<li>

<strong>Primary work computer: </strong>

${d.computer}

</li>


<li>

<strong>Backup work computer: </strong>

${d.backup}

</li>


<li>

<strong>Current courses: </strong>

<ol>

${courseHTML}

</ol>

</li>


<li>

<strong>Funny/Interesting thing about me: </strong>

${d.funny}

</li>


<li>

<strong>I’d also like to share: </strong>

${d.extra}

</li>


</ul>


<blockquote>

<q>${d.quote}</q>

<cite> - ${d.author}</cite>

</blockquote>

`;

}

document.getElementById("form").addEventListener("submit", function(event) {

    event.preventDefault();

    document.getElementById("page-title").style.display = "none";
    document.getElementById("page-subtitle").style.display = "none";

});

document.getElementById("form").addEventListener("submit", function(event) {

    event.preventDefault();

    // hide title text
    document.getElementById("page-title").style.display = "none";
    document.getElementById("page-subtitle").style.display = "none";

    // get link values
    const itis = document.getElementById("itisLink").value;
    const github = document.getElementById("githubLink").value;
    const uncc = document.getElementById("unccLink").value;
    const githubio = document.getElementById("githubioLink").value;
    const linkedin = document.getElementById("linkedinLink").value;

    // create footer HTML
    const footerHTML = `
        <hr>
        <a href="${itis}">Click here to go to my ITIS 3135 page</a>
        <p></p>
        <a href="${github}">Click here to go to my GitHub</a>
        <p></p>
        <a href="${uncc}">Click here to go to my University Webpage</a>
        <p></p>
        <a href="${githubio}">Click here to go to my GitHub.io Page</a>
        <p></p>
        <a href="${linkedin}">Click here to go to my LinkedIn</a>
    `;

    // insert footer
    document.getElementById("footer").innerHTML = footerHTML;

});

window.addEventListener("DOMContentLoaded", () => {

const defaultCourses = [

["ITSC","3155","Software Engineering","Required course, it’s also interesting"],

["ITSC","3146","Operating Systems","Required course, and it is interesting"],

["ITIS","3200","Intro to Info Security","Required course, also very interesting"],

["ITIS","3135","Web Development","Required course, it is also interesting"],

["CAPI","1501","Intro to Social Science","Required elective, I find social sciences interesting too"]

];


defaultCourses.forEach(course => {

const div = document.createElement("div");

div.innerHTML = `

<input value="${course[0]}" placeholder="Dept">

<input value="${course[1]}" placeholder="Number">

<input value="${course[2]}" placeholder="Course Name">

<input value="${course[3]}" placeholder="Reason">

<button type="button" onclick="this.parentElement.remove()">Delete</button>

`;

document.getElementById("courses").appendChild(div);

});

});