/*--------------- effet lumier ------------------*/
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('glowCanvas');
    const ctx = canvas.getContext('2d');

    // Fonction pour redimensionner le canvas
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight * 1.9; // Plus grand pour créer un chevauchement

        // Positionner le canvas en fixe en bas de la page
        canvas.style.position = 'fixed';
        canvas.style.bottom = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.maxHeight = '400px'; // Plus grand pour assurer un fondu complet
        canvas.style.zIndex = '21'; // Placer derrière les autres éléments
        canvas.style.pointerEvents = 'none'; // Permet aux clics de passer à travers
        canvas.style.border = 'none'; // S'assurer qu'il n'y a pas de bordure
    }

    // Initialisation
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Fonction pour dessiner l'effet de lueur
    function drawGlow() {
        // Effacer le canvas avec transparence complète
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Position centrale en bas du canvas
        const centerX = canvas.width / 2;
        const centerY = canvas.height; // Pour en bas du canvas en fait (canvas.height) et 0 pour top

        // Rayon basé sur la largeur pour s'assurer qu'il couvre tout
        const radius = canvas.width * 1.5;

        // Créer un dégradé radial avec une transition très progressive
        const gradient = ctx.createRadialGradient(
            centerX,
            centerY,
            0,
            centerX,
            centerY,
            radius
        );

        // Ajouter les arrêts de couleur avec une transition très progressive
        gradient.addColorStop(0, 'rgba(50,255,146,0.5)');
        gradient.addColorStop(0.1, 'rgba(50,255,146,0.3)');
        gradient.addColorStop(0.2, 'rgba(50,255,146,0.2)');
        gradient.addColorStop(0.4, 'rgba(30,150,82,0.1)');
        gradient.addColorStop(0.7, 'rgba(0,0,0,0.01)');
        gradient.addColorStop(1, 'rgba(0,0,0,0)');

        // Remplir avec le dégradé
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    // Boucle d'animation
    function animate() {
        drawGlow();
        requestAnimationFrame(animate);
    }

    // Démarrer l'animation
    animate();
});


