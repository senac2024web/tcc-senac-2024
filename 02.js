function verificarresposta() {
    const respostacorreta = 'jupiter';

    const respostas = document.getElementsByName('quiz-opcoes');
    let respostaselecionada = null;

   
    for (let i = 0; i < respostas.length; i++) {
        if (respostas[i].checked) {
            respostaselecionada = respostas[i].value;
            break;
        }
    }

   
    if (respostaselecionada === respostacorreta) {
        document.getElementById("quiz-container").style.backgroundColor = "blue";
        salvarresultado(true);
        alert("Parabéns! Você acertou!");
    } else {
        document.getElementById("quiz-container").style.backgroundColor = "red";
        salvarresultado(false);
        alert("Quem é seu professor?");
    }

    document.getElementById("result").classList.remove("hidden");

    setTimeout(function() {
        window.location.href = 'pergunta3.html'; 
    }, 2000); 
}

function salvarresultado(correto) {
    let acertos = localStorage.getItem('acertos') || 0;
    acertos = parseInt(acertos);

    if (correto) {
        acertos++;
    }

    localStorage.setItem('acertos', acertos);
}
