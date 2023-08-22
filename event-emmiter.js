const EventEmitter=require('events')
const customEmitter=new EventEmitter()

customEmitter.on('res',()=>{
    console.log(`data recived`);
})
customEmitter.on('res',(name,age)=>{
    console.log(`some other logiv ${name} of age ${age}`);
})
customEmitter.on('res',()=>{
    console.log(`Best logic`);
})
customEmitter.emit('res','john',23)