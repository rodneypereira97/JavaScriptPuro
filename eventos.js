'use strict';

var boton = document.querySelector('#boton');
var div = document.querySelector('#div');

boton.addEventListener('click', function() {
    console.log('as pulsado el boton');
    div.innerHTML = 'As pulsado el boton';
    
})

// function Pulsar(){
//     div.innerHTML = 'As puñsado el boton';
// }