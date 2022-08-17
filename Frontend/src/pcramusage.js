const os = require('node:os');

//retorna atributos, propriedades e funcoes do objeto OS - sistema operacional
//console.log(os)

//vamos descontruir o objeto OS - separando somente os metodos de interesse
const {arch, platform, totalmem, freemem} = os;

//vamos tratar as variaveis de memoria para que elas mostrem em Gb e nao em bytes
const tRAM = totalmem()/1024/1024;
const fRAM = freemem()/1024/1024;

//depois de desconstruir, criamos um objeto que vai receber esses metodos selecionados
const stats  = {
    OS: platform(),
    Arch: arch(),
    TotalRAM: parseInt(tRAM),
    FreeRAM: parseInt(fRAM),
}

//testamos mandando imprirmir o objeto criado
console.log(stats)