function sortear() {
    let quantidadeNumeros = parseInt(document.getElementById('quantidade').value);
    let doNumero = parseInt(document.getElementById('de').value);
    let ateNumero = parseInt(document.getElementById('ate').value);

    if(isNaN(quantidadeNumeros) || isNaN(doNumero) || isNaN(ateNumero)) {
        alert('É preciso preencher todas as entradas de texto.');
        return;
    } else if(doNumero >= ateNumero) {
        alert('Reveja se inseriu os valores nos campos corretamente.');
        return;
    } else if(quantidadeNumeros > (ateNumero - doNumero + 1)) {
        alert(`Quantidade de numeros não permitida para o intervalo entre ${doNumero} e ${ateNumero}.`);
        return;
    } else {
        let listaSorteados = [];
        let numeroSorteado;

        for(let i = 0; i < quantidadeNumeros; i++) {
            numeroSorteado = gerarNumeroAleatorio(doNumero, ateNumero);

            while(listaSorteados.includes(numeroSorteado)) {
                numeroSorteado = gerarNumeroAleatorio(doNumero, ateNumero);
        }
            listaSorteados.push(numeroSorteado);
        }

        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${listaSorteados}</label>`

        alterarClasseBotao('btn-sortear');
        alterarClasseBotao('btn-reiniciar');
    }
}

function gerarNumeroAleatorio(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function alterarClasseBotao(botao) {
    let botao_html = document.getElementById(botao);
    if(botao_html.classList.contains('container__botao-desabilitado')) {
        botao_html.classList.remove('container__botao-desabilitado');
        botao_html.classList.add('container__botao');
    } else {
        botao_html.classList.remove('container__botao');
        botao_html.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`
    alterarClasseBotao('btn-sortear');
    alterarClasseBotao('btn-reiniciar');
}