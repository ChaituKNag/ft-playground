let Rx = require('rxjs/Rx');

let Client = require('ssh2').Client;

let conn = new Client();

conn.connect({
    host: 'rcovlnx0195',
    port: 22,
    username: 'cmsadmin',
    privateKey: require('fs').readFileSync('cmsadmin_all_servers.ppk')
});

conn.on('ready', () => {
    clientReady()
    .subscribe(
        (message) => console.log(message)
    )
});

// let onConnection = Rx.Observable.bindNodeCallback(conn.on);

// let connReady$ = onConnection('ready');

// connReady$.subscribe(clientReady);




function clientReady() {
    let subject = new Rx.Subject();
    subject.next("Client is ready");
    conn.end();
    return subject;
}



