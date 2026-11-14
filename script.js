const clockView = document.querySelector('.display-counter');
const staticText = document.querySelector('.btn-static-text');
const jumpscareContainer = document.getElementById('jumpscare-container');
const jumpscareVideo = document.getElementById('jumpscare-video');
const startBtn = document.getElementById('start-btn');

clockView.style.fontSize = '16px';
let textDimension = 16;
let remainingSeconds = 10; 

startBtn.addEventListener('click', () => {
    
    staticText.style.display = 'none';
    clockView.style.display = 'inline'; // Cambiato da 'none' a 'inline' per mostrare il timer

    jumpscareVideo.load();

    const loopSequence = setInterval(() => {
        if (remainingSeconds >= 0) {
            clockView.textContent = remainingSeconds;
            textDimension = textDimension + 10; 
            clockView.style.fontSize = `${textDimension}px`;
            remainingSeconds--;
        } else {
            clearInterval(loopSequence);
            
            startBtn.style.display = 'none';
            jumpscareContainer.style.display = 'block';
            
            jumpscareVideo.play().catch(error => {
                console.error("Errore:", error);
            });

            setTimeout(() => {
                jumpscareVideo.pause();
                jumpscareVideo.currentTime = 0;
                jumpscareContainer.style.display = 'none';
                
                startBtn.style.display = 'block';
                staticText.style.display = 'inline'; // Ripristina il testo del pulsante
                clockView.style.display = 'none';
                remainingSeconds = 10;
                textDimension = 16;
                clockView.style.fontSize = '16px';
            }, 5000); 
        }
    }, 1000);
}, { once: true });
