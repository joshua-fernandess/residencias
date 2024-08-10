let residencias = require('./residencias');

function listarResidencia(){
     if (residencias === 0){
        throw new Error("Sem residências cadastradas no sistema!");
    } else {
        for(let i = 0; i < residencias.length; i++){
            const residencia = residencias[i];
            console.log(`
            ID:  ${residencia.id},
            Morador: ${residencia.morador},
            Rua: ${residencia.rua},
            Nº: ${residencia.numero}, 
            Bairro: ${residencia.bairro}
            `);
                for (let j = 0; j < residencia.telefones.length; j++){
                    console.log(` ${j+1}. ${residencia.telefones[j]}`);
                }
        }
    }
}


module.exports = listarResidencia;