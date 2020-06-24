var express = require('express');
var router = express.Router();
module.exports = router;


router.get('/', function (req, res, next) {
    res.render('test', {});
});

router.post('/substring', function(req,res,next){
    let text = req.body.text1;
    let num5 = req.body.number5;
    let num6 = req.body.number6;
    let result;

    result = text.substring(num5,num6);

    res.render('test', {
        text1: text,
        number5: num5,
        number6: num6,
        substringResult: result
    });
})

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

function factorialize(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
  }
  function fibonacci(n) {
    return n < 1 ? 0
         : n <= 2 ? 1
         : fibonacci(n - 1) + fibonacci(n - 2);
 }
router.post('/math', function (req, res, next) {
    let num1 = parseInt(req.body.number1);
    let num2 = parseInt(req.body.number2);
    let oper = req.body.operator;
    let out = req.body.output;
    let result;

    switch (oper) {
        case '+':
            result = num1 + num2;            
            break;
        case '-':
            result = num1 - num2;            
            break;
        case '/':
            result = num1 / num2;            
            break;
        case '*':
            result = num1 * num2;            
            break;
        case '%':
            result = num1 % num2;            
            break;
        case '!':
            result = factorialize(num1);            
            break;
        case 'f':
            result = fibonacci(num1);            
            break;
        case '^':
            result = num1 ** num2;            
            break;    
        default:
            break;
    }

    switch (out) {
        case 'x':
            result = result.toString(16);
            break;
        case 'b':
            result = result.toString(2);
            break;
    }

    //  return findResult to the browser
    res.render('test', {
        number1: num1,
        number2: num2,
        operator: oper,
        output: out,
        mathResult: result
    });
});