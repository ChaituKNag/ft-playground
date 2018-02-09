let ssh2 = require("ssh2");

let Client = ssh2.Client;

let conn = new Client();

conn.on('ready', function () {
    console.log('Client :: ready');
    let finalData = "";
    conn.exec('/iw-od/bin/iwodserverstatus', 
        (err, stream) => {
            if (err) throw err;
            stream.on('close', 
                (code, signal) => {
                    console.log("Final data:\n=================\n");
                    console.log(finalData);
                    conn.end();
                }
            );
            stream.on('data', 
                (data) => {
                    finalData += data;
                }
            );
            stream.stderr
            .on('data', 
                (data) => {
                    console.log('STDERR: ' + data);
                }
            );
        }
    );
}).connect({
    host: 'rcovlnx0195',
    port: 22,
    username: 'cmsadmin',
    privateKey: require('fs').readFileSync('cmsadmin_all_servers.ppk')
});

