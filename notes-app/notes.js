const fs = require('fs');
const chalk = require('chalk');



const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);



    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        });

        console.log(chalk.green('New note added!'));

        saveNotes(notes);
    } else {
        console.log(chalk.red('Note title already taken...'));
    }
  

}

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title);
    if(notesToKeep.length === notes.length){
        console.log(chalk.red('No note found!'));
    }else { 
        saveNotes(notesToKeep);
        console.log(chalk.green('Note removed!'));
    }
    
}

const saveNotes = (notes) =>{
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json' , dataJSON);
}

const listNotes = () => {
    const notes = loadNotes();

    debugger;
    console.log(chalk.blue.inverse("Your Notes:"));
    notes.forEach((note) => {
        console.log(note.title);
    });
}

const readNotes = (title) =>{
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title);

    if(note){
        console.log(chalk.inverse(note.title));
        console.log(note.body);
    }else {
        console.log(chalk.red.inverse('Note does not exist'));
    }
}

const loadNotes = () =>{

    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }catch (e) {
        return [];
    }
    
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
};