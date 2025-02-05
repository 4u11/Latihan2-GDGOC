let notes = [
    {
        id: 1,
        heading: "Mempelajari Javascript",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus non expedita similique tempora tempore exercitationem. Accusamus sint porro iste quos velit aperiam voluptas placeat error nulla maxime id, deserunt eum.",
        created_by: "John Doe",
        created_at: Date.now() 
    }
];

function generateId() {
    return notes.length > 0 ? Math.max(...notes.map(item => item.id)) + 1 : 1;
}

const createNote = (heading, description, created_by) => {
    const newNote = {
        id: generateId(),
        heading: heading,
        description: description,
        created_by: created_by,
        created_at: Date.now()
    };
    notes.push(newNote);
    return newNote;
}

const readNote = (id) => {
    return id ? notes.find(note => note.id === id) : notes;
}

const updateNote = (id, heading, description, created_by) => {
    const note = notes.find(note => note.id === id);
    if (note) {
        note.heading = heading;
        note.description = description;
        note.created_by = created_by;
        return note;
    }
    return null;
}

const deleteNote = (id) => {
    const index = notes.findIndex(note => note.id === id);
    if (index !== -1) {
        notes.splice(index, 1);
        return true;
    }
    return false;
}

// mengetes kode (diharapkan untuk tidak diganti): 
createNote("Belajar React", "Mempelajari dasar-dasar React dan cara membuat komponen.", "Jane Doe", Date.now());
console.log(readNote());
console.log("=================================================================================================================");
updateNote(1, "Mempelajari JavaScript Lanjutan", "Mempelajari konsep lanjutan dalam JavaScript.", "Keqing", Date.now());
console.log(readNote());
console.log("=================================================================================================================");
deleteNote(1);
console.log(readNote());
