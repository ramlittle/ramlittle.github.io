const http=require(`http`);
const port=8080;
const mimeType =require('mime-types');
const fs=require('fs');

const server=http.createServer((request,response)=>{
  let file ='.'+request.url;
    if(file==='./'){
      file+='index.html';
    }
    console.log(file);
  let fileType=mimeType.lookup(file);
    fs.readFile(file, (error,data)=>{
        if(!error){
            response.writeHead(200,{'Content-Type':fileType});
            response.write(data);
        }
        response.end(`welcome to this server`);
    })
})

//check if our server is running
server.listen(port,()=>{
    console.log(`the secure http is running ${port}`);
})
