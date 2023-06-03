let monitor = {
    tamanho: 32,
    ano: 2018,
    valor: 800,
    key: ['tamanho', 'ano', 'valor']
};

console.log(monitor.key);
console.log(monitor[monitor.key[0]]);

for (let index = 0; index < monitor.key.length; index++) {
    console.log(`${monitor.key[index]} = ${monitor[monitor.key[index]]}`);
}

