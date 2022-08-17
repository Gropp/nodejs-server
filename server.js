//criamos uma constante http que vem do metodo http
//criamos constantes com dados de conexao url e porta
const http = require('node:http');
const host = 'http://localhost';
const port = 3000;
//o conteudo da constante http criada, é o conteudo do comando http dentro do node, tem todas as propriedades, metodos e informacoes sobre esse protocolo
//console.log(http)

//importando o modulo criado para "rodar no servidor"
//como queremos que a funcao execute aqui se usa a palavra reservada require
const stats = require('./Frontend/src/pcramusage.js');

//criamos um servidor e mandamos ele escutar a porta 3000
//ao criar o servidor vamos ter uma requisicao, uma resposta e uma funcao
//para efetuar uma requisicao/resposta e parar, usamos o res.end
http.createServer((req, res) => {
    let url = req.url;

    if(url === "/") {
        res.end('<h1>Working Server - HOME</h1>')
    }else if(url === "/stats") {
        res.end(JSON.stringify(stats, null, 2));
    }
    
}).listen(port, () => console.log(`server is running in ${host}:${port}`));