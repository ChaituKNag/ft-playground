use v5.8.2;

my $purgeReq = `curl -X POST https://api.ccu.akamai.com/ccu/v2/queues/default -H 'Authorization: Basic ZnJrd2Y6VzBya0Yhb3c=' -H 'Cache-Control: no-cache' -H 'Content-Type: application/json' -H 'Postman-Token: 5c0dd4d7-d744-2b5b-2fea-483630eb211c' -d '{  "objects" : ["http://www.libertyshares.co.uk/investor/security-policy"]
}'`;
print $purgeReq;