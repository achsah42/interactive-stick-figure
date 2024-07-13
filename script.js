document.addEventListener('DOMContentLoaded', () => {
    const stickFigure = document.getElementById('stick-figure');
    let cursorX = 0;
    let cursorY = 0;
    let stickFigureX = window.innerWidth / 2;
    let stickFigureY = window.innerHeight / 2;
    let idleTime = 0;

    document.addEventListener('mousemove', (e) => {
        cursorX = e.clientX;
        cursorY = e.clientY;
        idleTime = 0;
    });

    document.addEventListener('scroll', () => {
        idleTime = 0;
    });

    function moveStickFigure() {
        const dx = cursorX - stickFigureX;
        const dy = cursorY - stickFigureY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance > 50) {
            stickFigureX += dx * 0.05;
            stickFigureY += dy * 0.05;
        }

        stickFigure.style.transform = `translate(${stickFigureX}px, ${stickFigureY}px)`;
    }

    function checkCursorIdle() {
        idleTime++;
        if (idleTime > 100) { // Approx 10 seconds (100 x 100ms)
            stickFigureX = cursorX;
            stickFigureY = cursorY;
            stickFigure.style.transform = `translate(${stickFigureX}px, ${stickFigureY}px)`;
            idleTime = 0;
        }
    }

    stickFigure.addEventListener('click', () => {
        const randomX = Math.random() * window.innerWidth;
        const randomY = Math.random() * window.innerHeight;
        stickFigureX = randomX;
        stickFigureY = randomY;
        stickFigure.style.transform = `translate(${stickFigureX}px, ${stickFigureY}px)`;
    });

    setInterval(moveStickFigure, 100); // Move every 100ms
    setInterval(checkCursorIdle, 100); // Check cursor idle every 100ms
});
