let http = require("http");

let url = "http://rcovlnx0188:8101/lscs/v1/document?q=*&project=%2F%2Fteamsite%2Finternational%2Fmain%2Fcommon%2Fkid&start=0&max=100&format=json";

http.get(url, (res) => {
    let data = "";
    res.on('data', chunk => { console.log(chunk.toString()) });
    
})