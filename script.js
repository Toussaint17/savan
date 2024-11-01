const counterElement = document.getElementById('counter');
const musclesContainer = document.getElementById('muscles');
const messageElement = document.getElementById('message');

const muscleImages = [
    'muscle1.png',
    'muscle2.png',
    'muscle3.png',
    'muscle4.png'
];

// Tableau d'emojis
const birthdayEmojis = ['🎉', '🎂', '🎈', '🎁', '🥳'];

// Tableau de polices
const fonts = [
    'Georgia, serif',
    'Times New Roman, serif',
    'Trebuchet MS, sans-serif',
    'Lucida Handwriting, cursive',
    'Comic Sans MS, cursive',
    'Brush Script MT, cursive'
];

let timeLeft = 4; // Compte à rebours de 4 secondes
const countdown = setInterval(() => {
    counterElement.innerText = timeLeft;

    if (timeLeft <= 0) {
        clearInterval(countdown);
        startCelebration();
    }
    timeLeft--;
}, 1000);

const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const getRandomFont = () => {
    const randomIndex = Math.floor(Math.random() * fonts.length);
    return fonts[randomIndex];
};

const startCelebration = () => {
    counterElement.style.display = 'none'; // Cacher le compteur
    displayMuscles(); // Afficher les bonhommes musclés
    displayBirthdayEmojis(); // Afficher les emojis
    const animatedImage = document.getElementById('animatedImage');
    animatedImage.style.display = 'block'; // Afficher l'image animée

    setTimeout(() => {
        messageElement.innerText = "IT'S MY BIRTHDAY! 🎉🎂"; // Afficher le message
        messageElement.style.opacity = 1; // Rendre le message visible
        startBlinkingMessage(); // Démarrer le clignotement
    }, 2500); // Délai avant d'afficher le message
};

const startBlinkingMessage = () => {
    setInterval(() => {
        messageElement.style.color = getRandomColor(); // Change la couleur
        messageElement.style.fontFamily = getRandomFont(); // Change la police
        messageElement.style.opacity = messageElement.style.opacity === '1' ? '0' : '1'; // Clignote
    }, 1000); // Délai de 1 seconde
};

const displayMuscles = () => {
    const numberOfMuscles = 1000; // Nombre total de bonhommes musclés
    let delay = 0;

    for (let i = 0; i < numberOfMuscles; i++) {
        setTimeout(() => {
            createMuscle();
        }, delay);
        delay += 300; // Délai entre chaque bonhomme
    }
};

const createMuscle = () => {
    const muscle = document.createElement('div');
    muscle.classList.add('muscle');

    // Choisir une image aléatoire
    const randomIndex = Math.floor(Math.random() * muscleImages.length);
    muscle.style.backgroundImage = `url('${muscleImages[randomIndex]}')`; // Utiliser des backticks ici

    // Position aléatoire
    const xPosition = Math.random() * (window.innerWidth - 80); // Ajuste pour la largeur
    muscle.style.left = `${xPosition}px`; // Utiliser des backticks ici
    muscle.style.top = `0px`; // Utiliser des backticks ici

    musclesContainer.appendChild(muscle);

    // Lancer l'animation de chute
    setTimeout(() => {
        muscle.classList.add('fall'); // Ajout de la classe pour animer la chute
    }, 10); // Petit délai pour déclencher l'animation

    // Supprimer le bonhomme après l'animation
    setTimeout(() => {
        muscle.remove();
    }, 3000); // Durée de l'animation
};

// Fonction pour afficher les emojis
const displayBirthdayEmojis = () => {
    const numberOfEmojis = 10000; // Nombre total d'emojis
    let delay = 0;

    for (let i = 0; i < numberOfEmojis; i++) {
        setTimeout(() => {
            createBirthdayEmoji();
        }, delay);
        delay += 80; // Délai entre chaque emoji
    }
};

const createBirthdayEmoji = () => {
    const emoji = document.createElement('div');
    emoji.classList.add('birthday-emoji');
    const randomIndex = Math.floor(Math.random() * birthdayEmojis.length);
    emoji.innerText = birthdayEmojis[randomIndex]; // Ajouter l'emoji

    // Position aléatoire dans tout l'écran
    const xPosition = Math.random() * (window.innerWidth - 60); // Ajustez selon la largeur
    const yPosition = Math.random() * (window.innerHeight - 60); // Ajustez selon la hauteur
    emoji.style.left = `${xPosition}px`;
    emoji.style.top = `${yPosition}px`; // Position initiale

    musclesContainer.appendChild(emoji);

    // Lancer l'animation de chute
    setTimeout(() => {
        emoji.classList.add('drop'); // Ajout de la classe pour animer la chute
    }, 10); // Petit délai pour déclencher l'animation

    // Supprimer l'emoji après l'animation
    setTimeout(() => {
        emoji.remove();
    }, 3000); // Durée de l'animation
};
