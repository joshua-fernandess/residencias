const prompt = require('prompt-sync')();
const criarResidencia = require('./criar.js');
const listarResidencia = require('./listar.js');
const atualizarResidencia = require('./atualizar.js');
const removerResidencia = require('./remover.js');

function mainMenu(){
    console.log(`
    ────────── Menu ────────────────────────
    1. Criar residência
    2. Listar residências
    3. Atualizar residência
    4. Remover residência
    5. Sair 
    ────────────────────────────────────────`);

    let opcao = parseInt(prompt(`Digite a opção desejada: `));
    let index;
    switch(opcao){
        case 1:
            const nomeMorador = prompt("Nome morador(a): ");
            const nomeRua = prompt("Nome da rua: ");
            const numero = prompt("Número: ");
            const nomeBairro = prompt("Nome do Bairro: ");
            const telefones = [];
            let telefone;
            while((telefone = prompt('Telefone: (ou deixe em branco para sair)'))){
                telefones.push(telefone);
            }
            criarResidencia({nomeMorador, nomeRua, numero, nomeBairro, telefones});
            console.log("Residência criada com sucesso!");
            mainMenu();
            break;
        case 2:
            listarResidencia();
            mainMenu();
            break;
        case 3:
            listarResidencia();
            index = parseInt(prompt('Número da residência a atualizar: ')) - 1;
            const novoNomeMorador = prompt("Novo nome morador(a): ");
            const novoNomeRua = prompt("Novo nome da rua: ");
            const novoNumero = prompt("Novo número: ");
            const novoNomeBairro = prompt("Novo nome do bairro: ");
            const novoTelefones = [];
            let novoTelefone;
            while ((novoTelefone = prompt('Telefone (ou deixe em branco para sair)'))){
                novoTelefones.push(novoTelefone);
            }
            atualizarResidencia(index, {nomeMorador: novoNomeMorador, nomeRua: novoNomeRua, numero:novoNumero, nomeBairro: novoNomeBairro, telefones: novoTelefones});
            console.log("Residência atualizada com sucesso!");
            mainMenu();
            break;
        case 4: 
            index = parseInt(prompt("Número da residência a remover: ")) - 1;
            removerResidencia(index);
            console.log("Residência removida com sucesso! ");
            mainMenu();
            break;
        case 5:
            console.log("Saindo do sistema. Até breve!");
            process.exit();
            break;
        default: 
            console.log("\n Opção inválida");
            mainMenu();
            
    };
};

mainMenu();