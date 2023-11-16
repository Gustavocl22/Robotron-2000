// js/main.js

document.addEventListener('DOMContentLoaded', function () {
    const controle = document.querySelectorAll("[data-controle]");
    const estatisticas = document.querySelectorAll("[data-estatistica]");
    const resultadoFinalButton = document.getElementById("resultadoFinal");

    const pecas = {
        "bracos": {
            "forca": 29,
            "poder": 35,
            "energia": -21,
            "velocidade": -5
        },
        "blindagem": {
            "forca": 41,
            "poder": 20,
            "energia": 0,
            "velocidade": -20
        },
        "nucleos": {
            "forca": 0,
            "poder": 7,
            "energia": 48,
            "velocidade": -24
        },
        "pernas": {
            "forca": 27,
            "poder": 21,
            "energia": -32,
            "velocidade": 42
        },
        "foguetes": {
            "forca": 0,
            "poder": 28,
            "energia": 0,
            "velocidade": -2
        }
    };

    controle.forEach((elemento) => {
        elemento.addEventListener('click', (evento) => {
            manipulaDados(evento.target.textContent, evento.target.parentNode);
            atualizaEstatistica(evento.target.dataset.peca);
        });
    });

    resultadoFinalButton.addEventListener('click', () => {
        exibirResultadoFinal();
        avaliarRobo();
    });

    function manipulaDados(operacao, controle) {
        const peca = controle.querySelector("[data-contador]");

        if (operacao === "-") {
            peca.value = Math.max(0, parseInt(peca.value) - 1); // Garante que o valor não seja negativo
        } else {
            peca.value = parseInt(peca.value) + 1;
        }
    }

    function atualizaEstatistica(peca) {
        estatisticas.forEach((elemento) => {
            elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
        });
    }

    function exibirResultadoFinal() {
        console.log("Resultado Final:");
        estatisticas.forEach((elemento) => {
            console.log(`${elemento.dataset.estatistica}: ${elemento.textContent}`);
        });
    }

    function avaliarRobo() {
        const forca = parseInt(estatisticas[0].textContent);
        const poder = parseInt(estatisticas[1].textContent);
        const energia = parseInt(estatisticas[2].textContent);
        const velocidade = parseInt(estatisticas[3].textContent);

        // Avaliação simples: Se a força e o poder são altos, e a energia e velocidade são positivas, considera-se um robô bom.
        if (forca > 50 && poder > 50 && energia >= 0 && velocidade >= 0) {
            alert("O robô está bom!");
        } else {
            alert("O robô não atende aos requisitos esperados.");
        }
    }
});
