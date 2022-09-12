const div = document.querySelector('.text');
let editableText = div.innerText;
let text = localStorage.getItem('text');

const textArea = document.createElement('textarea');
const newDiv = document.createElement('div');

const tableAll = document.querySelectorAll('.table');
const colArray = [
    {
        name: ''
    },
    {
        name: 'string',
        value: [
            'at()',
            'fixed()',
            'includes()',
            'slice()',
            'split()',
            'repeat()',
            'padEnd()',
            'toString()',
            'trim()'
        ]
    }, ,
    {
        name: 'number',
        value: [
            'isNaN()',
            'valueOf()',
            'parseFloat()',
            'toString()',
            'POSITIVE_INFINITY',
            'parseInt()',
            'toFixed()',
            'EPSILON',
            'isFinite()'
        ]
    },
    {
        name: 'array',
        value: [
            'join()',
            'slice()',
            'forEach()',
            'sort()',
            'concat()',
            'pop()',
            'map()',
            'sort',
            'push()'
        ]
    },
    {
        name: 'object',
        value: [
            'hasOwn()',
            'freeze()',
            'defineProperty()',
            'defineProperty()',
            'keys()',
            'assign()',
            'fromEntries()',
            'toString()',
            'entries()'
        ]
    }
];

newDiv.classList.add('replaced-text');

window.addEventListener('keydown', (e) => {
    localStorage.setItem('text', text);
    localStorage.text = getFromLocalStorage;


    if (e.code === 'KeyE' && e.ctrlKey === true) {
        e.preventDefault();

        textArea.innerText = editableText;
        div.replaceWith(textArea);

        textArea.innerText = editableText;
        newDiv.replaceWith(textArea);
    }

    text = textArea.value;

    localStorage.text = text;

    if (e.code === 'KeyS' && e.ctrlKey === true) {
        e.preventDefault();

        textArea.replaceWith(newDiv);
        newDiv.innerText = getFromLocalStorage();
    }

    text = newDiv.innerText;
});


function getFromLocalStorage() {
    console.log(text);
    return localStorage.getItem('text');
}

for (const table of tableAll) {
    const tBody = table.tBodies[0];
    const rows = Array.from(tBody.rows);
    const headerCells = table.tHead.rows[0].cells;

    for (const th of headerCells) {
        const cellIndex = th.cellIndex;

        th.addEventListener('click', () => {
            rows.sort((tr1, tr2) => {
                const tr1Text = tr1.cells[cellIndex].textContent;
                const tr2Text = tr2.cells[cellIndex].textContent;
                return tr1Text.localeCompare(tr2Text);
            });

            tBody.append(...rows);
        });
    }
}

