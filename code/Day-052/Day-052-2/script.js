/*******************************************
100DaysOfCode-Challenge: Day 52
Challenge Day 52-2 Flags
*******************************************/

/*
run each line in the browser's console
*/

/*
m Multiline
*/

//i Case-insensitive
'LION'.replace(/lion/i, 'mouses');
// -> 'mouse';

'LION'.replace(/[a-z]+/i, 'mouses');
// -> 'mouse';


//g Global
//default behavior without /g flag
'She ate watermelon at the waterpark'.replace(/water/, '');
// -> 'She ate melon at the waterpark';
//with /g flag
'She ate watermelon at the waterpark'.replace(/water/g, '');
// -> 'She ate melon at the park';


//m Multiline
//default behavior without /m flag
const treat = `cheese
cheese
cheese`;
treat.replace(/^cheese$/, 'fruit');
// -> 'cheese
//cheese
//cheese'

//with /m flag
treat.replace(/^cheese$/m, 'fruit');
// -> 'fruit
//cheese
//cheese'

//with /m /g flag to relplace all the instances
treat.replace(/^cheese$/mg, 'fruit');
// -> 'fruit
//cheese
//cheese'