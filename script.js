document.getElementById('add-note').addEventListener('click', function() {
    const noteText = document.getElementById('note-text').value;
    const noteColor = document.getElementById('note-color').value;
    
    if (noteText.trim() === '') {
        alert('Please enter some text for the note.');
        return;
    }

    const note = document.createElement('div');
    note.className = 'note';
    note.style.backgroundColor = noteColor;
    
    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.innerHTML = '&times;';
    deleteButton.addEventListener('click', function() {
        note.remove();
    });
    
    note.appendChild(deleteButton);
    note.appendChild(document.createTextNode(noteText));
    
    document.getElementById('notes-container').appendChild(note);
    
    document.getElementById('note-text').value = '';
    document.getElementById('note-color').value = '#ffeb3b';
});
