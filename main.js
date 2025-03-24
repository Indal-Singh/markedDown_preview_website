const editor = document.getElementById('editor');
const preview = document.getElementById('preview');
const resetBtn = document.getElementById('resetBtn');

editor.addEventListener('input', (e) => {
    let input = e.currentTarget.value;
    preview.style.display = input ? 'block' : 'none';
    preview.innerHTML = marked.parse(input);
})

resetBtn.addEventListener('click', () => {
    editor.value = '';
    preview.style.display = 'none';
})