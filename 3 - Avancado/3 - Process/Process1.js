import process from "process";

console.log(process.env.USERDOMAIN);

process.addListener('e1', (n) => console.log('e1 '+n));
process.emit('e1', 1);
process.emit('e1', 2);
process.emit('e1', 3);