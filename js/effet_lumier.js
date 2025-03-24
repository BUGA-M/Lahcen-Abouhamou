document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('glowCanvas');
    const ctx = canvas.getContext('2d');

    // Variable pour suivre la direction de l'effet
    let isLightFromTop = true;

    // Fonction pour redimensionner le canvas et ajuster sa position
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight * 1.9;

        // Positionner le canvas selon la direction de la lumière
        canvas.style.position = 'fixed';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.maxHeight = '400px';
        canvas.style.zIndex = '-9999 !important';
        canvas.style.pointerEvents = 'none';
        canvas.style.border = 'none';

        // Ajuster la position en fonction de la direction de la lumière
        if (isLightFromTop) {
            canvas.style.top = '0';
            canvas.style.bottom = 'auto';
        } else {
            canvas.style.bottom = '0';
            canvas.style.top = 'auto';
        }
    }

    // Initialisation
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Fonction pour dessiner l'effet de lueur
    function drawGlow() {
        // Effacer le canvas avec transparence complète
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Position centrale qui dépend de la direction actuelle
        const centerX = canvas.width / 2;
        const centerY = isLightFromTop ? 0 : canvas.height; // Alterne entre haut et bas

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

    // Changer la direction de l'effet toutes les 7000ms (7 secondes)
    setTimeout(() => {
        isLightFromTop = !isLightFromTop; // Inverse la direction
        resizeCanvas(); // Mettre à jour la position du canvas
    }, 7000);
});
