const yargs = require('yargs')
const chalk = require('chalk')
const notes = require('./notes')

//customize yargs versions
yargs.version('1.1.0')

//add, remove, read, list

//add
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title : {
            describe: 'Note title',
            demandOption: true,
            type : 'string'
        },
        body: {
            describe : 'Note body',
            demandOption: true,
            type : 'string'
        }
    },
    handler(argv) { 
        notes.addNote(argv.title, argv.body)
    }
    
})

//remove
yargs.command({
    command: 'remove',
    describe: 'Remove the note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type : 'string'
        }
    },
    handler(argv) { 
        notes.removeNote(argv.title)
    }
})

//list notes
yargs.command({
    command: 'list',
    describe: 'List notes',
    handler() { 
        notes.listNotes()
    }
})

//read note
yargs.command({
    command: 'read',
    describe: 'Read note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type : 'string'
        }
    },
    handler(argv) { 
        notes.readNote(argv.title)
    }
})

console.log(yargs.argv)

