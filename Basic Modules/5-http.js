const http=require('http')

const server=http.createServer((req,res)=>{
    res.write('WELCOME to backend Server')
    res.end()
})

server.listen(5000)