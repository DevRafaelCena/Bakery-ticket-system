
const socket = io()
let counter =2; //contator tempo

var valorSerial =''
socket.on('serial:data',function(dataSerial){
    console.log(dataserial)
    valorSerial = dataserial
    
})

$(document).ready(function() {
    $('#atualizar').on('click', function() {
    //var value = $(this).val();
    $('#meugrafico b').text(valorSerial);
  });
});