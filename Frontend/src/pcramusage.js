const os = require('node:os');

//retorna atributos, propriedades e funcoes do objeto OS - sistema operacional
//console.log(os)

//vamos criar um ciclo de repeticao - 1000ms
//vai executar essa funcao a cada 1 segundo
setInterval(() => {

    //vamos descontruir o objeto OS - separando somente os metodos de interesse
    const {arch, platform, totalmem, freemem} = os;

    //vamos tratar as variaveis de memoria para que elas mostrem em Gb e nao em bytes
    const tRAM = totalmem()/1024/1024;
    const fRAM = freemem()/1024/1024;
    const usage = (fRAM/tRAM)* 100

    //depois de desconstruir, criamos um objeto que vai receber esses metodos selecionados
    const stats  = {
        OS: platform(),
        Arch: arch(),
        TotalRAM: `${parseInt(tRAM)} MB`,
        FreeRAM: `${parseInt(fRAM)} MB`,
        Usage: `${usage.toFixed(2)} %`,
    }
    //testamos mandando imprirmir o objeto criado
    //limpa o console
    console.clear()
    //console.log(stats)
    console.table(stats)

    //exportando o objeto stats para fora deste componente
    exports.stats = stats
},1000);

