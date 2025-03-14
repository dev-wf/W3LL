console.log('index.js carregado no projeto...');
// criando excesáo de largura de tela
const tam = document.body.clientWidth;
console.log('Largura do body:', tam);
if (tam < 400) {
    alert('Tela muito pequena para o projeto...');
} 
