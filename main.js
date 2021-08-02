function gerarTabuada() {
    let numeroElemento = document.getElementById('numero');
    let tabuadaElemento = document.getElementById('tabuada');
    let alertaElemento = document.getElementById('alerta');

    if (Number(numeroElemento.value) <= 0) {
        tabuadaElemento.innerHTML = '';
        alertaElemento.innerHTML = 'Impossivel gerar tabuara!';
    } else {
        tabuadaElemento.innerHTML = '';
        alertaElemento.innerHTML = 'Tá tá tabuada &#127926';
        for (let i = 1; i <= 10; i++) {
            let intemOpcao = document.createElement('option'); //criando um elemento option
            intemOpcao.innerHTML = `${numeroElemento.value} X ${i} = ${i * Number(numeroElemento.value)}` //jogando o conteudo da variavel resultado no elemento opcao
            tabuadaElemento.appendChild(intemOpcao); //criando um no filho dentro do elemento tabuada com o conteudo da do itemopcao
        }
    }
}