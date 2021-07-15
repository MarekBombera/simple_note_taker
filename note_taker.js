const noteInput = document.getElementById('textarea');
const addButton = document.getElementById('button');
const closeModalButton = document.querySelector('.close-button')
const notesContainer = document.getElementById('notes-container');
const singleNoteContainer = document.getElementsByClassName('note');

class Note {
    constructor(body) {
        this.body = body;
    }
}

const createsNewNote = (note) => {
    const createNoteDiv = document.createElement('div');
    createNoteDiv.classList.add('note');
    createNoteDiv.innerHTML = `
    <p class="note-paragraph">${note.body}</p>
    <button class="show-button">Show More</button>
    `;
    notesContainer.appendChild(createNoteDiv);
}

const addsNoteToList = () => {
    if(noteInput.value.length === 0) {
        alert('Please add text to your note')
        noteInput.focus();
        return;
    }
    const newNote = new Note(noteInput.value); 
    createsNewNote(newNote);
    noteInput.value = '';
    noteInput.focus();
}

const activatesModal = (text) => {
    const showMore = document.querySelector('.modal');
    const modalText = document.querySelector('.modal-body')
    modalText.innerText = text;
    showMore.style.display = 'block';   
}

const targetsShowMoreButton = (e) => {
    if (e.target.classList.contains('show-button')){
        const currentNote = e.target.closest('.note');
        const currentText = currentNote.querySelector('.note-paragraph').textContent;
        activatesModal(currentText);
    }
}

const closesModal = () => {
    document.querySelector('.modal').style.display = 'none';
}


addButton.addEventListener('click', addsNoteToList);
notesContainer.addEventListener('click', targetsShowMoreButton);
closeModalButton.addEventListener('click', closesModal);
