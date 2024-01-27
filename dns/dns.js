const dns = require("dns/promises");

async function dnsLookup(){
    const result = await dns.lookup("localhost" ,4);
    console.log(result, "res");
}
dnsLookup();