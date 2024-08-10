let residencias = require('./residencias');

function criarResidencia(residencia){
    residencia.id = residencias.length +1;
    residencias.push(residencia);
}

module.exports = criarResidencia;