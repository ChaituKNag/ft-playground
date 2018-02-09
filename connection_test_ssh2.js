let ssh2 = require("ssh2");

let Client = ssh2.Client;

let conn = new Client();

function connectionReady() {
    return new Promise( (resolve, reject) => {
        conn.on('ready', resolve);
    });
}

function executeUptime() {
    return new Promise ( (resolve, reject) => {
        console.log('Client :: ready');
        conn.exec('uptime', resolve);
    })
}

function processResult(err, stream) {
    return new Promise ( (resolve, reject) => {
        let data = "";
        if(err) throw err;
        
        stream.on('close', (code, signal) => {
            conn.end();
            resolve(data);
        });

        stream.on('data', (frag) => {
            data += frag;
        });
    })
}

function connectToServer (data) {
    conn.connect({
        host: 'rcovlnx0195',
        port: 22,
        username: 'cmsadmin',
        privateKey: require('fs').readFileSync('cmsadmin_all_servers.ppk')
    });
}

connectToServer();
connectionReady()
    .then(executeUptime)
    .then(processResult);

