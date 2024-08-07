let residencias = require('./residencias');
function listarResidencia(){
    for(let i = 0; i < residencias.length; i++){
        const residencia = residencias[i];
        console.log(`
        ID:  ${residencia.id},
        Nome morador: ${residencia.nomeMorador},
        Nome da rua: ${residencia.nomeRua},
        Nº: ${residencia.numero}, 
        Nome do bairro: ${residencia.nomeBairro}
        `);
            for (let j = 0; j < residencia.telefones.length; j++){
                console.log(` ${j+1}. ${residencia.telefones[j]}`);
            }
    }
}


module.exports = listarResidencia;