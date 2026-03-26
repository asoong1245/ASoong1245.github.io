
document.getElementById("generateJSON").addEventListener("click", () => {

const data = collectData();

document.getElementById("page-title").textContent="Introduction JSON";

form.style.display="none";

output.innerHTML=`

<pre><code>

${JSON.stringify(data,null,2)}

</code></pre>

`;

});