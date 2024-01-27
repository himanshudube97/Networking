/**
 * Most low level networking module of nodjes.
 * Http, SSH everything is built upon this.
 */
const net = require("net");
const server = net.createServer();

const clients = [];
server.on("connection", (socket) => {
    console.log("A new connection");
    console.log(socket, "sock")
    clients.push(socket);
    socket.on("data", (data) => {
        console.log(data, "$$")
       clients.map((skt)=>{
        if(skt!==socket){
            skt.write(data);
        }
       })
    })
});


server.listen(4000, "127.0.0.1", () => {
    console.log("server running onn " + server.address().address, server.address().family);
})