const perguntas = [
    {
        pergunta: "Qual é a linguagem mais usada para desenvolvimento web frontend?",
        respostas: { a: "Java", b: "Python", c: "JavaScript" },
        correta: "c"
    },
    {
        pergunta: "Qual desses frameworks é utilizado para desenvolvimento backend em JavaScript?",
        respostas: { a: "Django", b: "React", c: "Express.js" },
        correta: "c"
    },
    {
        pergunta: "Qual é a principal função do HTML?",
        respostas: { a: "Estilizar páginas", b: "Criar estrutura de páginas", c: "Programar interatividade" },
        correta: "b"
    },
    {
        pergunta: "Qual linguagem é conhecida por sua simplicidade e vasta biblioteca de pacotes?",
        respostas: { a: "Java", b: "C++", c: "Python" },
        correta: "c"
    },
    {
        pergunta: "Qual desses é um framework popular para desenvolvimento de aplicativos Android?",
        respostas: { a: "React", b: "Swift", c: "Kotlin" },
        correta: "c"
    }
];

let perguntaAtual = 0;

function mostrarQuiz() {
    if (perguntaAtual < perguntas.length) {
        const p = perguntas[perguntaAtual];
        const resposta = prompt(`${p.pergunta}\nA: ${p.respostas.a}\nB: ${p.respostas.b}\nC: ${p.respostas.c}`);
        responder(resposta.toLowerCase());
    } else {
        alert("Quiz finalizado! Você completou todas as perguntas.");
    }
}

function responder(resposta) {
    const p = perguntas[perguntaAtual];
    if (resposta === p.correta) {
        alert("Resposta correta!");
    } else {
        alert(`Resposta incorreta! A resposta correta era: ${p.correta.toUpperCase()}`);
    }
    perguntaAtual++;
    mostrarQuiz();
}



function mudarTexto() {
    document.getElementById('titulo').innerText = 'Aqui você aprenderá o Básico da Programação';
}


function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


document.getElementById('changeColorBtn').addEventListener('click', function() {
    document.body.style.backgroundColor = getRandomColor();
});




document.getElementById('addItemBtn').addEventListener('click', function() {
    const inputValue = document.getElementById('itemInput').value;
    if (inputValue.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = inputValue;
        document.getElementById('itemList').appendChild(li);
        document.getElementById('itemInput').value = ''; 
    } else {
        alert("Por favor, digite um item antes de adicionar!");
    }
});




