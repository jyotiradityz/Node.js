const {readFileSync,writeFileSync}=require('fs') 
const fisrt=readFileSync('./content/first.txt','utf-8')
const second=readFileSync('./content/second.txt','utf-8')
console.log(fisrt);
console.log(second);

writeFileSync('./content/res.txt', `heheheeh adding ${fisrt}`)