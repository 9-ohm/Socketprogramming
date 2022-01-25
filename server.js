var net = require('net');
var HOST = '127.0.0.1';
var PORT = 8000;

net.createServer((sock) => {

    var guess=6;
   
    let num;
    var count=0;
    sock.on('data', function (data) {
    

        if(data=='READY'){
            sock.write('START');
        }else if(data=='-' && count == 0){
            sock.write('CANT MINUS');
        }else if(data=='-' && count != 0){
            sock.write('CAN MINUS');
            count --
        }else if(data == '+' && count < 2){
            count ++
            sock.write('PLUS MINUS CAN PLUS');
        }else if(data == '+' && count >= 2){
            sock.write('PLUS MINUS CANT PLUS');
        }
        else if(data == 'END' && count !=  0){
            sock.write('CANT END');
        }
        else if(data == 'END' && count ==  0){
            sock.write('END');
            sock.destroy()
        }
    });
}).listen(PORT, HOST);
console.log('Server listening on ' + HOST +':'+ PORT);