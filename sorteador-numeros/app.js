numerosSorteados = [];

function sortear(){
    //console.log(typeof recebeQuantidadeDeNumeros())
    //console.log((recebeQuantidadeDeNumeros()))
    let quantidade = recebeQuantidadeDeNumeros();
    let n1 = recebePrimeiroNumero();
    let n2 = recebeSegundoNumero();
    let numeroSorteado = 0;
    for (let i=0; i < quantidade; i++){
        numeroSorteado = sorteador(n1,n2);
        if (!numerosSorteados.includes(numeroSorteado)){
            numerosSorteados.push(numeroSorteado);
        }
    }
    console.log(numerosSorteados);
    mostrarResultadoNaTela();
    alterarStatusDoBotão();
}

function alterarStatusDoBotão(){
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else{
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
    alterarStatusDoBotão()
}

function mostrarResultadoNaTela(){
    elementResultado = document.getElementById('resultado');
    elementResultado.innerHTML = `Números Sorteados: ${numerosSorteados}`
}

function sorteador(max, min){
    return Math.floor((Math.random() * (max - min + 1) + min));
}

function recebeQuantidadeDeNumeros(){
    quantidade = parseInt(document.getElementById('quantidade').value);
    return quantidade;
}

function recebePrimeiroNumero(){
    n1 = parseInt(document.getElementById('de').value);
    return n1;
}

function recebeSegundoNumero(){
    n2 = parseInt(document.getElementById('ate').value);
    return n2;
}