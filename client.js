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
 /*    console.log('Client send data : READY'); */
});

client.on('data', function(data) {

   /*  client.write("-");
    if(data == "KUY"){
        client.write("+");
        console.log('Client recv data : '+data);
    }
    */


        if(data == "START"){
            console.log('Client recv data : '+data);
            client.write("-")
        }
        else if(data == "CANT MINUS"){
            console.log('Client recv data : '+data);
            client.write("+")
         
        }else if(data == "CAN MINUS"){
            console.log('Client recv data : '+data);
            client.write("+")

        }else if(data == "PLUS MINUS CAN PLUS"){
            console.log('Client recv data : '+data);
            client.write("+")
        }
        else if(data == "PLUS MINUS CANT PLUS"){
            console.log('Client recv data : '+data);
            client.write("END")
        }else if(data == "CANT END"){
            console.log('Client recv data : '+data);
            client.write("--")
        }
        else if(data == "CANT END NEED MINUS"){
            console.log('Client recv data : '+data);
            client.write("--")
        }
        else if(data == "CAN END"){
            console.log('Client recv data : '+data);
            client.destroy()
        }
        

 /*   
    console.log('Client recv data : '+data);
    if(data < 2){
        console.log('Client recv data 2 : '+data);
    } */
   



    


});

 client.on('close', function(){
     console.log('Connection closed')
 })