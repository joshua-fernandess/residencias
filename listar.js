let residencias = require('./residencias');
function listarResidencia(){
    residencias.forEach((residencia, index) => {
        console.log(`${index+1} Nome morador: ${residencia.nomeMorador}, Nome da rua: ${residencia.nomeRua}, Nº: ${residencia.numero}, Nome do bairro: ${residencia.nomeBairro}`);
    });
}

module.exports = listarResidencia;