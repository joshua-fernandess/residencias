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
    
    switch(opcao){
        case 1:
            const morador = prompt("Nome morador(a): ");
            const rua = prompt("Rua: ");
            const numero = prompt("Número: ");
            const bairro = prompt("Bairro: ");
            const telefones = [];
            let telefone;
            while((telefone = prompt('Telefones: (ou deixe em branco para sair)'))){
                telefones.push(telefone);
            }

            criarResidencia({morador, rua, numero, bairro, telefones});
            console.log("Residência cadastrada com sucesso!");
            mainMenu();
            break;
        case 2:
            listarResidencia();
            mainMenu();
            break;
        case 3:
            listarResidencia();
            id = parseInt(prompt('Número da residência a atualizar: '));
            const novoMorador = prompt("Novo morador(a): ");
            const novaRua = prompt("Nova rua: ");
            const novoNumero = prompt("Novo número: ");
            const novoBairro = prompt("Novo bairro: ");
            const novoTelefones = [];
            let novoTelefone;
            while ((novoTelefone = prompt('Telefones (ou deixe em branco para sair)'))){
                novoTelefones.push(novoTelefone);
            }
            atualizarResidencia(id, {morador: novoMorador, rua: novaRua, numero:novoNumero, bairro: novoBairro, telefones: novoTelefones});
            console.log("Residência atualizada com sucesso!");
            mainMenu();
            break;
        case 4: 
            id = parseInt(prompt("Número da residência a remover: "));
            removerResidencia(id);
            console.log("Residência removida com sucesso! ");
            mainMenu();
            break;
        case 5:
            console.log("Saindo do sistema. Até breve!");
            process.exit();
            break;
        default: 
            throw new Error("\n Opção inválida");
            mainMenu();
            
    };
};

mainMenu();