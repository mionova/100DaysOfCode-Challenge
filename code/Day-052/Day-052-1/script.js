/*******************************************
100DaysOfCode-Challenge: Day 52
Challenge Day 52-1 Using Regular Expressions
*******************************************/

/*
run each line in the browser's console
*/

const regex = /^corn/
// -> undefined

//running `test` method
regex.test('corncob');
// -> true

regex.test('popcorn');
// -> false

const string1 = 'corndog';
// -> undefined

string1.replace(regex, 'hot');
// -> 'hotgod'

const string2 = 'popcorn';
// -> undefined

string2.replace(regex, 'hot');
// -> 'popcorn'