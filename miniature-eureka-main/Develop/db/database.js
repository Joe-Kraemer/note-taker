
const { writeFile } = require('fs');


const db = require('./db.json');
memoryNotes = []
exports.readData = ()=>{
    let notes = fs.readFileSync(db);

    memoryNotes = notes 
    return memoryNotes
}

exports.writeData = (note)=>{
    memoryNotes.push(note)
    writeFile(db, JSON.stringify(memoryNotes), (error) => {
        if (error) {
          console.log('An error has occurred ', error);
          return;
        }
        console.log('Data written successfully to disk');
      });
      return memoryNotes
}

