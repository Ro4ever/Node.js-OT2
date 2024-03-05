const fs = require('fs');

fs.appendFile('novo.txt', 'Olá NodeJS! SENAI', function (err) {
    if (err) throw err;
    console.log('Arquivo Salvo!');
});

fs.writeFile('./novo.txt', 'Olá Node.JS! UNISENAI 2023', function(err){
    if(err) throw err;
    console.log('Texto Trocado!');
});

fs.rename('./novo.txt', 'ArquivoNovoRenomeado.txt', function(err){
    if(err) throw err;
    console.log('Nome renomeado!')
});

fs.unlink('ArquivoNovoRenomeado.txt', function(err){
    if(err)  throw err;
    console.log('Arquivo Deletado!')
});