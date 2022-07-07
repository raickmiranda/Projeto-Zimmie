// Verificar se tem uma sessao válida, se não tiver, exibir um alerta para fazer login
if (!localStorage.getItem("@name")) {
    alert('Atenção! Faça login ou cadastre-se para acessar essa seção!')
    const ctas = document.getElementById('ctas');
    ctas.remove()
}

// Threads padrão de exibição
var originalThreads = [
    {
        title: "UCM - Universo Cinematográfico da Marvel",
        id: Math.random().toString(16).slice(2),
        date: Date.now(),
        user: "Pluto",
        content: "Thread content",
        insidePosts: [
            {
                user: "Administrador",
                date: Date.now(),
                coment: "Parabéns! O seu novo tópico foi criado!"
            },
            {
                user: "Lupin",
                date: Date.now(),
                coment: "assistiram o novo eps de Ms. Marvel?"
            },
            {
                user: "Let",
                date: Date.now(),
                coment: "vi man, nossa n gostei mt n"
            }
        ]
    },
    {
        title: "[DISCUSSÃO] | Que música salvaria você do Vecna?",
        id: Math.random().toString(16).slice(2),
        date: Date.now(),
        user: "Gamora",
        content: "Thread content",
        insidePosts: [
            {
                user: "Administrador",
                date: Date.now(),
                coment: "Parabéns! O seu novo tópico foi criado!"
            },
            {
                user: "Constantine",
                date: Date.now(),
                coment: "sorry da Halsey"
            },
            {
                user: "Arthur",
                date: Date.now(),
                coment: "Monster do Justin Bieber"
            },
            {
                user: "Lucas",
                date: Date.now(),
                coment: "Deixe me ir - 1Kilo"
            }
        ]
    },
    {
        title: "Deixe aqui um quote de alguma série ou filme que te marcou",
        id: Math.random().toString(16).slice(2),
        date: Date.now(),
        user: "Max",
        content: "Thread content",
        insidePosts: [
            {
                user: "Administrador",
                date: Date.now(),
                coment: "Parabéns! O seu novo tópico foi criado!"
            },
            {
                user: "Nox",
                date: Date.now(),
                coment: "Babuínos Bobocas Balbuciando em Bando."
            },
            {
                user: "Linn",
                date: Date.now(),
                coment: "Faça ou não faça. Não existe tentar."
            },
            {
                user: "Pedro",
                date: Date.now(),
                coment: "Não torne as coisas piores, pensando que dói mais do que você realmente está sentindo"
            },
            {
                user: "Otávio",
                date: Date.now(),
                coment: "Carpe diem"
            },
        ]
    },
    {
        title: "NOVIDADES NO DCU",
        id: Math.random().toString(16).slice(2),
        date: Date.now(),
        user: "Gamora",
        content: "Thread content",
        insidePosts: [
            {
                user: "Administrador",
                date: Date.now(),
                coment: "Parabéns! O seu novo tópico foi criado!"
            }
        ]
    },
]

//Criando Threads
function addThreads() {

    let newThread = {
        title: document.querySelector('.thread input').value,
        id: Math.random().toString(16).slice(2),
        date: Date.now(),
        user: "Zimmie",
        content: "Thread content",
        insidePosts: [
            {
                user: "Administrador",
                date: Date.now(),
                coment: "Parabéns! O seu novo tópico foi criado!"
            },
        ]
    }

    threads.push(newThread);
    console.log(threads);
    localStorage.setItem('threads', JSON.stringify(threads));
    return false;
}

// Manipulando o Local Storage

var threads = originalThreads;

if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = originalThreads;
    localStorage.setItem('threads', JSON.stringify(originalThreads));
}