// Importar o express
// Definir uma constante e "guardar" express dentro dela

const express = require('express');

// Criar o servidor
// normalmente chamado de app, mas hj chamaremos de servidor
// express é uma função

const servidor = express();

// Definir a public como pasta de arquivos estáticos

servidor.use(express.static('public'));

// Definir as rotas
servidor.get(
    '/produtos',             // endereço ou caminho a receber a requisição
    (req,res) => {           // função que será executada quando a requisição chegar
        return res.sendFile(__dirname + '/views/produtos.html');
    }                     
)

// Fazer meu servidor rodar
servidor.listen(3000);