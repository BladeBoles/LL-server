const CurrentlyReadingArray = require ('../src/fixtures');

const LexicalService = {
  getAllCurrentlyReading() {
    let exampleCurrentlyReading = CurrentlyReadingArray.makeCurrentlyReadingArray();
    return `Everything you are currently reading: ${exampleCurrentlyReading}`;
    
  }
};


module.exports = LexicalService;