let isTransitioning = false;

function changeBackground() {
    if (isTransitioning) return;

    isTransitioning = true;

    const backgroundElement = document.getElementById('background');
    const tilesElement = document.getElementById('tiles');
    const tiles = document.querySelectorAll('.tile');

    // Trigger tile expansion
    tiles.forEach(tile => {
        tile.style.transform = 'scale(1)';
    });

    // Wait for tile transition to complete, then change background
    setTimeout(() => {
        backgroundElement.style.backgroundImage = 'url("baskteball.png")'; // New background image

        // Reset tiles for next transition
        tiles.forEach(tile => {
            tile.style.transform = 'scale(0)';
        });

        isTransitioning = false;
    }, 700); // Duration of tile transition effect (0.7s)
}

// Initialize tiles
document.addEventListener('DOMContentLoaded', () => {
    const tilesElement = document.getElementById('tiles');
    const tileCount = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--tile-count'), 10);

    for (let i = 0; i < tileCount * tileCount; i++) { // Adjust number of tiles
        const tile = document.createElement('div');
        tile.className = 'tile';
        tile.style.transform = 'scale(0)';
        tilesElement.appendChild(tile);
    }
});
