// Injecter le CSS dans la page
const style = document.createElement('style');
style.innerHTML = `
  @keyframes fall {
    0% {
      transform: translateY(-10%) rotate(0deg);
      opacity: 0;
    }
    100% {
      transform: translateY(100vh) rotate(360deg);
      opacity: 1;
    }
  }

  .leaf {
    position: fixed;
    top: -10%;
    width: 50px; /* Taille de base des feuilles */
    height: auto;
    animation: fall linear infinite;
    pointer-events: none; /* Pour ne pas interférer avec les clics */
    z-index: -11;
  }
`;
document.head.appendChild(style);

// Liste des images de feuilles
const leafImages = [
    '/pic/olive3.png',
    '/pic/olive3.png',
    '/pic/olive3.png',
    '/pic/olive3.png',
];

// Créer une feuille
function createLeaf() {
    const leaf = document.createElement('img');
    leaf.classList.add('leaf');

    // Choisir une image aléatoire
    const randomImage = leafImages[Math.floor(Math.random() * leafImages.length)];
    leaf.src = randomImage;

    // Position aléatoire sur l'axe X
    const left = Math.random() * window.innerWidth;
    leaf.style.left = `${left}px`;

    // Durée d'animation aléatoire
    const duration = Math.random() * 5 + 5; // Entre 5 et 10 secondes
    leaf.style.animationDuration = `${duration}s`;

    // Taille aléatoire
    const size = Math.random() * 40 + 50; // Entre 20px et 50px
    leaf.style.width = `${size}px`;

    // Rotation aléatoire
    const rotation = Math.random() * 360; // Rotation initiale
    leaf.style.transform = `rotate(${rotation}deg)`;

    // Ajouter la feuille au body
    document.body.appendChild(leaf);

    // Supprimer la feuille après la fin de l'animation
    setTimeout(() => {
        leaf.remove();
    }, duration * 1000);
}

// Créer des feuilles toutes les 500ms
setTimeout(()=>{
    setInterval(createLeaf, 500);
},6500);
