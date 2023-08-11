import event from "events";

const eventoMGMT = new event.EventEmitter;

eventoMGMT.addListener( 'meuEvento', function (){
    console.log("Executou meu evento!");
});

eventoMGMT.addListener( 'meuEvento', function (){
    console.log("Oi estou escutando 'meuEvento'!");
});

eventoMGMT.addListener( 'outroEvento', function (){
    console.log("Oi estou escutando 'outroEvento'!");
});

eventoMGMT.emit('meuEvento');
eventoMGMT.emit('outroEvento');


