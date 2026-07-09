import mdToHtml from "./preview.js"; 

const input = document.getElementById("text");
const output = document.getElementById("preview");
const btn = document.getElementById("preview-btn")
function updatePreview()
{
    const text = input.value;
    const html = mdToHtml(text);
    output.innerHTML = html;
}

btn.addEventListener('click', updatePreview)