/**
 * Most low level networking module of nodjes.
 * Http, SSH everything is built upon this.
 */
const net = require("net");
const server = net.createServer((socket)=>{
    /**
     * socket here is an actual connection.
     * if 10 people join my connection then i will have 10 socket objects.
     * It is actually a DUPLEX STREAM ~ we can read and write to the same stream.
     */

    socket.on("data",(data)=>{
        console.log(data.toString(), "data");
    } )
});

server.listen(4000, "127.0.0.1", ()=>{
    console.log("server running onn " + server.address().address,server.address().family);
})