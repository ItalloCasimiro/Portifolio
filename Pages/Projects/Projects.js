// ANO AUTOMÁTICO
document.getElementById("year").textContent = new Date().getFullYear();

// Translations
const translations = {
    pt: {
        docTitle: "Meus Projetos",
        
        personalProjectsTitle: "Projetos Pessoais",

        eBookDescription: "Meu eBook, Game Design, o processo de criação de um jogo, ensina os fundamentos e introduz o game design gratuitamente.",
        eBookButton: "Acessar o site do eBook",

        gaoxyDescription1: "Gaoxy é um jogo clássico de nave do gênero Shoot 'em Up baseado em Space Invaders, onde o jogador deve sobreviver aos inimigos que surgem atirando projéteis no jogador.",
        gaoxyDescription2: "O objetivo é sobreviver e eliminar o maior número possível de inimigos e conseguir bater o recorde pessoal de pontuação.",

        registroJourneyDescription1: "O Registro Journey é uma newsletter onde eu posto semanalmente (todas as quartas-feiras) um registro falando sobre o que fiz na semana no contexto de desenvolvimento de jogos.",
        registroJourneyDescription2: "O objetivo dessa newsletter é deixar registrado toda a minha jornada até que eu consiga realizar o meu objetivo de vida, para que eu possa ler tudo novamente e ver o meu progresso ao longo dos anos.",

        squirrelBucketDescription1: "Squirrel Bucket é um jogo 2D catcher que se passa em uma única tela em que o jogador, que controla um esquilo com um barril, deve pegar as nozes que caem do céu sem deixa-las cair no chão.",
        squirrelBucketDescription2: "O jogo se baseia em quebrar o recorde pessoal a cada partida, sendo esse recorde o número de nozes coletadas na partida anterior.",

        cubeDescription1: "C.U.B.E é um jogo de quebra-cabeça de visão isométrica preto e branco onde você tem que construir um item. Seu objetivo é usar os materiais ao seu redor, refiná-los e junta-los para construir o item.",
        cubeDescription2: "O jogo usa um sistema de níveis onde cada nível tem um item específico para construir. Você só tem que pensar na solução e construí-lo!",

        whoDidThatDescription1: "\"Who Did That?\" É um jogo de puzzle 2D onde o jogador controla um detetive novato da agência WDT que recebe seu primeiro caso de assassinato.",
        whoDidThatDescription2: "Você deve reunir, analisar e tirar conclusões através de documentos e informações importantes que você receberá durante a gameplay.",
        whoDidThatDescription3: "O jogo possui mais de um modo de jogo, entre eles temos, por exemplo, o modo história, com uma história curta no qual o jogador recebe um caso de assassinato da vítima Martha Grayson e deve descobrir o culpado, e entre outros diversos modos de jogo.",

        participationsTitle: "Participações",

        carnivalFamilyDescription1: "Carnival Family é um jogo do genêro gerenciamento de tempo onde o jogador controla um personagem que acorda no dia 28 de fevereiro e recebe uma ligação da sua sogra dizendo que vai levar a família para sua casa para comemorar o carnaval.",
        carnivalFamilyDescription2: "O objetivo é completar todas as tarefas antes que a família chegue até a casa.",
        carnivalFamilyDevelopedFor: "Carnival Family foi desenvolvido especialemente para a ",

        sunMemoriesDescription1: "Sun Memories é um jogo 3D no estilo retro (consoles antigos) que conta a história de Janne, uma garota residente de uma pequena vila e recém formada no ensino médio que está em busca de um caminho para seguir no futuro antes do fim das férias de verão.",
        sunMemoriesDescription2: "Janne deve coletar memórias de sua vila explorando, falando com os residentes e... Sonhando",
        sunMemoriesDevelopedFor: "Sun Memories foi desenvolvido especialemente para a ",

        eggsIncubationStationDescription1: "Eggs Incubation Station é um jogo de simulação onde o jogador gerencia uma estação de incubação de ovos, cuidando das necessidades dos ovos de criatura que estão prestes a chocar.",
        eggsIncubationStationDescription2: "O objetivo é descobrir todas as 12 criaturas diferentes do jogo e gerenciar as incubadoras.",
        eggsIncubationStationDevelopedFor: "Eggs Incubation Station foi desenvolvido especialemente para a ",

        krisKringle_LicenseToJingleDescription1: "\"Kris Kringle License to Jingle!\" É um jogo do gênero stealth 2D onde o jogador controla o Papai Noel, e sua missão é entregar um presente para uma garotinha sem ser pego.",
        krisKringle_LicenseToJingleDevelopedFor: "\"Kris Kringle License to Jingle!\" foi desenvolvido especialemente para a ",

        theGoodTheBadAndThePaperworkDescription1: "\"The Good, The Bad and The Paperwork\" é um jogo onde você controla o xerife de uma pequena cidadela, seu objetivo é avaliar os documentos dos cidadãos, garantir que tudo esteja em ordem e permitir (ou não) a entrada dos cidadãos.",
        theGoodTheBadAndThePaperworkDevelopedFor: "\"The Good, The Bad and The Paperwork\" foi desenvolvido especialmente para a ",

        word_n_TowerDescription1: "Word 'n' Tower é um jogo 2D party game onde você deve escrever palavras para aumentar o tamanho da sua torre e fugir da lava. Seu objetivo é sobreviver e conquistar o 1° lugar.",
        word_n_TowerDevelopedFor: "Word 'n' Tower foi desenvolvido especialemente para a ",

        contributionsTitle: "Contribuições",
        contributionGDDDocumentation: "Documentação GDD",
        contributionGamePageStyling: "Estilização da Página do Jogo na Itch.io",
        contributionDialogues: "Diálogos",
        contributionProgramming: "Programação",
        contributionNPCConcept: "Conceito de NPC",
        contributionUIDesign: "UI Design",
        contributionCreationAndDesignOfTheLogo: "Criação e Design da Logo",
        contributionSoloGameJam: "Jogo de Game Jam Solo",

        acess_eBookWebsite: "Acessar o site do eBook",
        readRegisters: "Ler Registros",
        acessItchioGamePage: "Acessar a página do jogo na Itch.io",
    },

    en: {
        docTitle: "My Projects",

        personalProjectsTitle: "Personal Projects",

        eBookDescription: "My eBook, Game Design, o processo de criação de um jogo, show the fundamental steps and introduces the game design for free.",
        eBookButton: "Acess the eBook website",

        gaoxyDescription1: "Gaoxy is a classic ship game of the genre Shoot 'em Up based em Space Invaders, where the player must survive to the enemies that shoots on the player.",
        gaoxyDescription2: "The goal is to survive and eliminate as many anemies as possible and beat your personal record.",

        registroJourneyDescription1: "Registro Journey is a newsletter where I weekly post (on wednesdays) a registration talking about what did I do during the week in the game development context.",
        registroJourneyDescription2: "The goal of this newsletter is to keep registered all my journey until I achieve my life goal, so I can read it all again and see my progress through the years.",

        squirrelBucketDescription1: "Squirrel Bucket is a 2D cather game where the player controls a squirrel with a barrel and must catch the nuts that fall from the sky without letting them fall to the ground.",
        squirrelBucketDescription2: "The game is based on breaking the personal record of nuts collected in each play session.",

        cubeDescription1: "C.U.B.E is a black and white isometric puzzle game where you have to build an item. Your goal is to use the materials around you, refine and combine them to build that item.",
        cubeDescription2: "The game is based on a level progression system, each level with an specific item to build. You just have to think on the solution and build!",

        whoDidThatDescription1: "\"Who Did That?\" Is a puzzle game where you controls a agent from WDT agency and receive you first criminal case.",
        whoDidThatDescription2: "You must collect, analyse and take clues through documents and important informations that you will find during the game.",
        whoDidThatDescription3: "The game has more than one game mode, for example, the story mode, with a short story where the player receives a criminal case of the victim Martha Grayson and must find out who is the guilty.",

        participationsTitle: "Participations",

        carnivalFamilyDescription1: "Carnival Family is a game of the genre time management where you control a character that wakes up on February 28th and receives a call from his mother-in-law saying that she will take the family to her house to celebrate carnival.",
        carnivalFamilyDescription2: "The goal is to complete all the tasks before the family arrives at the house.",
        carnivalFamilyDevelopedFor: "Carnival Family was developed especially for ",

        sunMemoriesDescription1: "Sun Memories is a retro-style 3D game that tells the story of Janne, a girl who lives in a small village and recently graduated from high school and is looking for a way to follow in the future before the end of the summer vacation.",
        sunMemoriesDescription2: "Janne must collect memories from her village exploring, talking with the villagers and... Dreaming",
        sunMemoriesDevelopedFor: "Sun Memories was developed especially for ",

        eggsIncubationStationDescription1: "Eggs Incubation Station is a simulation game where you manage an incubation station for eggs, ensuring they are properly cared for until they hatch.",
        eggsIncubationStationDescription2: "The goal is to discover all the 12 different creatures that can hatch from the eggs by providing the right conditions for their incubation.",
        eggsIncubationStationDevelopedFor: "Eggs Incubation Station was developed especially for ",

        krisKringle_LicenseToJingleDescription1: "\"Kris Kringle, License to Jingle\" is a 2D action game where you control Santa Claus, and must deliver a gift to a little girl without being caught.",
        krisKringle_LicenseToJingleDevelopedFor: "Kris Kringle, License to Jingle was developed especially for ",

        theGoodTheBadAndThePaperworkDescription1: "\"The Good, The Bad and The Paperwork\" is a game where you control a sheriff from a small citadel, your goal is to check the citizens' documents and make sure that are everything in order and allow (or not) their entry.",
        theGoodTheBadAndThePaperworkDevelopedFor: "The Good, The Bad and The Paperwork was developed especially for ",

        word_n_TowerDescription1: "Word 'n' Tower is a word puzzle game where you have to build a tower by writing words to scape from the lava. Your goal is to survive and win the first place.",
        word_n_TowerDevelopedFor: "Word 'n' Tower was developed especially for ",

        contributionsTitle: "Contributions",
        contributionGDDDocumentation: "GDD Documentation",
        contributionGamePageStyling: "Itch.io Game Page Styling",
        contributionDialogues: "Dialogues",
        contributionProgramming: "Programming",
        contributionNPCConcept: "NPC Concept",
        contributionUIDesign: "UI Design",
        contributionCreationAndDesignOfTheLogo: "Creation and Design of the Logo",
        contributionSoloGameJam: "Solo Game Jam Project",

        acess_eBookWebsite: "Acess the eBook website",
        readRegisters: "Read Registers",
        acessItchioGamePage: "Acess the Itch.io game page",
    }
};

// Função de trocar o idioma
function setLanguage(lang) {
    localStorage.setItem("language", lang);

    for (let key in translations[lang]) {
        const elementID = document.getElementById(key);
        const elementClass = document.getElementsByClassName(key);
        if (elementID) {
            elementID.textContent = translations[lang][key];
        }
        if (elementClass) {
            Array.from(elementClass).forEach(element => {
                element.textContent = translations[lang][key];
            });
        }
    }
}

// Carrega o idioma salvo ao carregar a página
window.onload = () => {
    const savedLang = localStorage.getItem("language") || "en";
    setLanguage(savedLang);
};