const { write } = require("fs");
const net = require("net");
const readline = require("readline/promises");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
async function writeMessage(text){
    const message = await rl.question(text);
    socket.write(message);
}
const socket = net.createConnection({ host: "127.0.0.1", port: 4000}, async () => {
    writeMessage("Enter your name");
})


socket.on("data", (data) => {
    console.log(data.toString());
    writeMessage();
})
socket.on("end", () => {
    console.log("socket closed!!")
})