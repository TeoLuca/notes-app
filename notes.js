
const fs = require('fs');
const chalk = require('chalk')

const getNotes = () => {
    return "Your notes..."
}


const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    debugger

    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log("New note added")
    }else{
        console.log("Note title taken")
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const updatedNotes = notes.filter((note) => note.title !== title)

    if(updatedNotes.length < notes.length){
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(updatedNotes)
    }else{
        console.log(chalk.red.inverse('No note not found!'))
    }
    
}

const listNotes = () => {
    const notes = loadNotes()
    notes.forEach((note) =>   console.log("Title: " + note.title )
    )
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if(note){
        console.log("This is the " + note.title + " and the body " + chalk.yellow(note.body))
    }else{
        console.log(chalk.red("no note found"))
    }
}

module.exports = {
    getNotes : getNotes,
    addNote : addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}