/******************************************
100DaysOfCode-Challenge: Day 53
Day 53-2 Use 'replace' with captured groups
******************************************/

//run each line in the browser's console


let string = 'abc';
// -> undefined

//replace the entire string
string.replace(/(\w)(\w)(\w)/, '$3 $2 $1')
// -> 'c b a'


string = "5337"
// -> '5337'
let regex = /(\d*)(\d{2})/
// -> undefined
//we use $$$ because `$$` is interpreted as `$`
let replacement = '$$$1.$2'
// -> '$$$1.$2'
// -> undefined
string.replace(regex, replacement)
// -> '$53.37'