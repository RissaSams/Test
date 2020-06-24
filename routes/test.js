var express = require('express');
var router = express.Router();
module.exports = router;


router.get('/', function (req, res, next) {
    res.render('test', {});
});

router.post('/find', function (req, res, next) {
    let text = req.body.text3;
    let searchWord = req.body.findWord;
    
    //  using the text from the page, break text3 into an array of words
    let arWords = text.split(" ");

    //  find findWord in the array of words
    let whichWord = arWords.indexOf(searchWord);

    let result;
    if (whichWord == -1)
        result = 'Did NOT find word: \'' + searchWord + '\'';
    else
        result = 'Found word: \'' + searchWord + '\' at position ' + whichWord;

    //  return findResult to the browser
    res.render('test', {
        text3: text,
        findWord: searchWord,
        findResult: result
    });
});

router.post('/compare', function (req, res, next) {
    let num3 = req.body.number3 | 0;
    let num4 = req.body.number4 * 1;
    let result;

    if (num3 < num4)
        result = num4 + ' is greater than ' + num3 + '!';
    else 
        result = num3 + ' is greater than ' + num4 + '!'

    //  return findResult to the browser
    res.render('test', {
        number3: num3,
        number4: num4,
        compareResult: result
    });
});