function verificarresposta() {
    const respostacorreta = 'brasilia'; 

    const respostas = document.getElementsByName('quiz-opcoes');
    let respostaselecionada = null;

    for (let i = 0; i < respostas.length; i++) {
        if (respostas[i].checked) {
            respostaselecionada = respostas[i].value;
            break;
        }
    }

 
    const nomeJogador = localStorage.getItem('nomeJogador'); 

    if (respostaselecionada === respostacorreta) {
        document.getElementById("quiz-container").style.backgroundColor = "blue";
        salvarresultado(true, nomeJogador);
        alert("Parabéns! Você acertou!");
    } else {
        document.getElementById("quiz-container").style.backgroundColor = "red";
        salvarresultado(false, nomeJogador);
        alert("Quem é seu professor?");
    }

   
    document.getElementById("result").classList.remove("hidden");

    
    setTimeout(function() {
        window.location.href = 'pergunta2.html'; 
    }, 2000);
}

function salvarresultado(correto, nomeJogador) {
    let acertos = localStorage.getItem('acertos') || 0;
    acertos = parseInt(acertos);

    if (correto) {
        acertos++;
    }

    localStorage.setItem('acertos', acertos);

   
    let ranking = JSON.parse(localStorage.getItem('ranking')) || [];
    ranking.push({ nome: nomeJogador, acertos: acertos });
    localStorage.setItem('ranking', JSON.stringify(ranking));
}
