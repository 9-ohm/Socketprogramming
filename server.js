var net = require('net');
var HOST = '127.0.0.1';
var PORT = 8000;

net.createServer((sock) => {

    var guess=6;
    var count=0;
    let num;

    sock.on('data', function (data) {
        console.log(' Data from client : '+data + '\n');

        if(data=='READY'){
            sock.write('Number of Customer = ' + count );

        }else if(data=='BYE'){
            sock.destroy();

        }else if(data=='+'){
            count++;
            console.log(count);
        
        }else if(data=='-'&&count>0){
            count--;
            console.log(count);
        }
        else if(data=='k'){
            console.log(count);
            sock.write('Number of Customer = ' + count );
        }
    });
}).listen(PORT, HOST);
console.log('Server listening on ' + HOST +':'+ PORT);