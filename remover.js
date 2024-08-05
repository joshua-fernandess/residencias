let residencias = require('./residencias');
function removerResidencia(index){
    residencias.splice(index, 1);
}

module.exports = removerResidencia;