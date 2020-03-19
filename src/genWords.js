// Generates random word of specified language

var es = require('random-spanish-words');
var en = require('random-words');


// generate 3 random words for the player to choose from:
var genWords = function(lang){
    let words;
    
    switch (lang) {
        case 'Español':
            words = es({ exactly: 9 });
            for (var i in words) {
                words[i] = words[i].normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            }
            break;
        case 'English':
            words = en({ exactly: 9 });
            break;
    }

    return words;
}
module.exports = genWords;