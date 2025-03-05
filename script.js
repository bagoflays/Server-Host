const { shell } = require('electron')
const http = require("http")
let server = null
function openServer(hostNum){
    shell.openExternal("http://localhost:" + hostNum)
}

function createServer(htmlCodeHere, hostNum){
    if (server) {
        alert("Close your server first.")
    } else {
        server = http.createServer((req,res)=>{
            res.write(htmlCodeHere)
            res.end()
        }).listen(hostNum)
    }
}
function openMyLink(){
    shell.openExternal("https://github.com/bagoflays/")
}