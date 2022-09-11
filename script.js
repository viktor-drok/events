const div = document.querySelector('.text');
let editableText = div.innerText;

let text = localStorage.getItem('text');


const textArea = document.createElement('textarea');
const newDiv = document.createElement('div');
newDiv.classList.add('replaced-text');


window.addEventListener('keydown', (e) => {
    localStorage.setItem('text', text);
    localStorage.text = div.innerText;


    if (e.code === 'KeyE' && e.ctrlKey === true) {
        e.preventDefault();

        textArea.innerText = editableText;
        div.replaceWith(textArea);
    }

    text = textArea.value;

    localStorage.text = text;

    if (e.code === 'KeyS' && e.ctrlKey === true) {
        e.preventDefault();

        textArea.replaceWith(newDiv);
        newDiv.innerText = localStorage.text;
    }

    text = newDiv.innerText;
});


console.log(text);
