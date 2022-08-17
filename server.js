//criamos uma constante http que vem do metodo http
//criamos constantes com dados de conexao url e porta
const http = require('node:http');
const host = 'http://localhost';
const port = 3000;
//o conteudo da constante http criada, é o conteudo do comando http dentro do node, tem todas as propriedades, metodos e informacoes sobre esse protocolo
//console.log(http)

//criamos um servidor e mandamos ele escutar a porta 3000
//ao criar o servidor vamos ter uma requisicao, uma resposta e uma funcao
//para efetuar uma requisicao/resposta e parar, usamos o res.end
http.createServer((req, res) => {
    res.end('<h1>Working</h1>')
}).listen(port, () => console.log(`server is running in ${host}:${port}`));