import prompt from 'prompt-sync';

const propriedades = [];
const promptSync = prompt();

function ordenarPropriedades() {
    const propriedadesOrdenadas = propriedades.sort();
    for (const propriedade of propriedadesOrdenadas) {
        console.log(propriedade);
    }
}
function capturarPropriedades() {
    while (true) {
        const propriedade = promptSync('Digite uma propriedade de CSS (ou SAIR para encerrar): ');
        if (propriedade.toLowerCase() === 'sair') {
            ordenarPropriedades();
            break;
        } else {
            propriedades.push(propriedade);
        }
    }
}

capturarPropriedades();
