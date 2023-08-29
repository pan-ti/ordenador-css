import prompt from 'prompt-sync';

const propriedades = [];
const promptSync = prompt();

function ordenarPropriedades() {
    const propriedadesOrdenadas = propriedades.sort();
    for (const propriedade of propriedadesOrdenadas) {
        console.log(propriedade);
    }
}