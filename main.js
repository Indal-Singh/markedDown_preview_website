const editor = document.getElementById('editor');
const preview = document.getElementById('preview');

editor.addEventListener('input', (e) => {
    let input = e.currentTarget.value;
    preview.style.display = input ? 'block' : 'none';
    preview.innerHTML = marked.parse(input);
})