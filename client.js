var net = require('net');
var HOST = '127.0.0.1';
var PORT = 8000;
var client = new net.Socket();
const readline = require('readline');
const { compileFunction } = require('vm');
let count = 0;
const plusIndicator = 2;

client.connect(PORT, HOST, function() {
    console.log('CONNECTED TO: ' + HOST + ':' + PORT);
    client.write('READY');
    console.log('Client send data : READY');
});

client.on('data', function(data) {
   //console.log('Data from server begin : '+data);
    
    if(count<plusIndicator){
        client.write("+");
        console.log('Data from server begin : '+data);
        console.log(count);
        count++;
    }
    
    else{   
        //client.write("BYE");
    }
    //console.log('Data from server end: '+data);

        // const rl = readline.createInterface({
        //     input: process.stdin,
        //     output: process.stdout
        // });

    
        // rl.question("Enter input: ", function (answer) {
        //     client.write(answer);
        //     rl.close();
        // });
});

 client.on('close', function(){
     console.log('Connection closed')
 })