const fs = require("fs");
const chalk = require('chalk');

const getNotes = () => {
  return "Your notes...";
};

const addNotes = (title, body) => {
  const notes = readNotes();

  let duplicateNotes = notes.filter( (note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    writeNotes(notes);
    console.log(chalk.green.inverse("written successfully!"));
  } else {
    console.log(chalk.red.inverse("Title already taken!"));
  }
};


const removeNotes = (title) =>{
    const notes = readNotes();
    const newNotes = notes.filter(note =>{!(note.title === title);
    });
    if(notes.length === newNotes.length){
        console.log(chalk.red.inverse('No note found!'))
    }else{

        writeNotes(newNotes);
        console.log(chalk.green.inverse('Removed successfully!'));
    }

}

const listNotes =() =>{
    const notes = readNotes();
    console.log(chalk.blue.underline('Your Notes'));
    notes.forEach(note =>{
        console.log(chalk.bold(note.title))
    });
}


const readNotesTitle = (title) =>{
    const notes = readNotes();
    const resultNote = notes.find(note => note.title === title);
    if(resultNote){
        console.log(chalk.bold(resultNote.title));
        console.log(resultNote.body);
    }else{
        console.log(chalk.red.inverse('No notes found!'));
    }
}

const writeNotes = (notes) => {
  const data = JSON.stringify(notes);
  fs.writeFileSync("notes.json", data);
};

const readNotes = () => {
  try {
    const bufferData = fs.readFileSync("notes.json");
    const dataString = bufferData.toString();
    return JSON.parse(dataString);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  add: addNotes,
  remove: removeNotes,
  list: listNotes,
  read: readNotesTitle
};
