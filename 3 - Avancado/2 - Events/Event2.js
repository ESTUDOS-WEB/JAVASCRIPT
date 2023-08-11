import event from "events";

const gerenciadorDeEvent = new event.EventEmitter;

gerenciadorDeEvent.addListener('printnome', (nome = '____') => {
    console.log(`Nome retornado ${nome}`);
});

gerenciadorDeEvent.emit('printnome', 'Lucas');
gerenciadorDeEvent.emit('printnome');