let yesBtn = document.getElementById('yesBtn');
let noBtn = document.getElementById('noBtn');
let celebration = document.getElementById('celebration');
let mainImage = document.getElementById('mainImage');

let fontSize = 1.2;
let padding = 10;
let imageSize = 300; 

const sadImages = [
    'images/sad/IMG_9241.jpg',
    'images/sad/IMG_9242.jpg',
    'images/sad/IMG_9243.jpg',
    'images/sad/IMG_9244.jpg',
    'images/sad/IMG_9245.jpg'
    
];

const happyImage = 'images/happy/IMG_1331.jpg';

noBtn.addEventListener('click', () => {
    fontSize += 0.4;
    padding += 5;
    imageSize += 10; // Increase image size
    
    yesBtn.style.fontSize = `${fontSize}rem`;
    yesBtn.style.padding = `${padding}px ${padding * 3}px`;
    mainImage.style.width = `${imageSize}px`;
    mainImage.style.height = `${imageSize}px`;
    
    const randomSadImage = sadImages[Math.floor(Math.random() * sadImages.length)];
    mainImage.src = randomSadImage;
});

yesBtn.addEventListener('click', () => {
    celebration.classList.remove('hidden');
    noBtn.style.display = 'none';
    yesBtn.style.display = 'none';
    
    // Change to the happy image
    mainImage.src = happyImage;
    
 
    setInterval(() => {
        createHeart();
    }, 300);
    
    setInterval(() => {
        createConfetti();
    }, 50);
});

function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '-20px';
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    heart.style.animation = 'heartFall 3s linear';
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 3000);
}

function createConfetti() {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.top = '-20px';
    confetti.style.backgroundColor = getRandomColor();
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
    document.body.appendChild(confetti);
    
    setTimeout(() => {
        confetti.remove();
    }, 3000);
}

function getRandomColor() {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
    return colors[Math.floor(Math.random() * colors.length)];
} 