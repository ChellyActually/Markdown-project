
const input = document.getElementById("text");
const output = document.getElementById("preview");
function updatePreview()
{
    const text = input.value;
    const html = mdToHtml(text);
    output.innerHTML = html;
}

