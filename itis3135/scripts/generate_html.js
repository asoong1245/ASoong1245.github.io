
document.getElementById("generateHTML").addEventListener("click", () => {

const d = collectData();

document.getElementById("page-title").textContent = "Introduction HTML";

form.style.display = "none";


let courseHTML = "";

d.courses.forEach(c => {

courseHTML += `

                    <li>${c.dept} ${c.num}: ${c.name}, ${c.reason}</li>

`;

});


const fullHTML = `<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Introduction Page</title>

    <script src="https://lint.page/kit/4d0fe3.js" crossorigin="anonymous"></script>

    <link rel="stylesheet" href="../default.css">

    <link href="https://fonts.googleapis.com/css2?family=Roboto&family=Playfair+Display&display=swap" rel="stylesheet">

</head>


<body>


<div data-include="components/header.html"></div>


<main>


<p>

I understand that what I put here is publicly available on the web and I won’t put anything here I don’t want the public to see -

<i>${d.first} ${d.last} - ${d.date}</i>

</p>


<h2>

${d.first} ${d.middle} ${d.nick ? `"${d.nick}"` : ""} ${d.last} ${d.divider} ${d.adj} ${d.animal}

</h2>


<figure>

<img src="${d.image}" width="500" alt="User image">

<figcaption>

<i>${d.caption}</i>

</figcaption>

</figure>


<p>

${d.statement}

</p>


<ul>


<li>

<strong>Personal Background: </strong>${d.personal}

</li>


<li>

<strong>Professional Background: </strong>${d.professional}

</li>


<li>

<strong>Academic Background: </strong>${d.academic}

</li>


<li>

<strong>Background in this subject: </strong>${d.subject}

</li>


<li>

<strong>Primary work computer: </strong>${d.computer}

</li>


<li>

<strong>Backup work computer: </strong>${d.backup}

</li>


<li>

<strong>Current courses: </strong>

<ol>

${courseHTML}

</ol>

</li>


<li>

<strong>Funny/Interesting thing about me: </strong>${d.funny}

</li>


<li>

<strong>I’d also like to share: </strong>${d.extra}

</li>


</ul>


<blockquote>

<q>${d.quote}</q>

<cite> - ${d.author}</cite>

</blockquote>


</main>


<div data-include="components/footer.html"></div>


<script src="scripts/HTMLinclude.min.js"></script>


</body>

</html>`;


output.innerHTML = `

<section>

<pre><code>

${escapeHTML(fullHTML)}

</code></pre>

</section>

`;

});


function escapeHTML(text){

return text

.replace(/</g,"&lt;")

.replace(/>/g,"&gt;");

}