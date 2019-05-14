const chalk = require('chalk');
const yargs = require('yargs');
 
const notes = require('./notes.js');

yargs.version('1.1.0');

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string' 
        },
        body: {
            describe: 'Contents of note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body);
    },
});

yargs.command({
    command: 'remove',
    describe: 'remove note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title);
    }
});

yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler(){
        notes.listNotes();
    }
});

yargs.command({
    command:'read',
    describe: 'Read your notes',
    builder :{
        title: {
            describe: 'Title of note',
            demandOption : true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNotes(argv.title);
    }
});



yargs.parse();
 

