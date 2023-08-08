const os=require('os')
// console.log(os);
//info about user

const user=os.userInfo()
console.log(user);



//time
console.log(`The sys uptime is ${os.uptime()}`);

const c_os={
    name:os.type(),
    release:os.release(),
    mem:os.totalmem(), 
}
console.log(c_os);