const chalk = require('chalk');
const notes = require('./notes');
const yargs = require('yargs');

yargs.version('1.1.0');


//Yargs Add command
yargs.command({       
    command: 'add',
    describe: 'Add  a new notes',
    builder: {
        title:{
            describe: "Note title",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Note Body",
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv){
        notes.add(argv.title, argv.body);
    }
})

//Yargs Remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a command',
    builder: {
        title: {
            describe: 'Notes title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.remove(argv.title);
    }
})

yargs.command({
    command: 'list',
    describe: 'List all the notes',
    handler(){
        notes.list();
    }
})

yargs.command({
    command: 'read',
    describe: 'Read all the notes',
    builder:{
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.read(argv.title)
    }
})

yargs.parse();
