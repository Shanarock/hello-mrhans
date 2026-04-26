const page1 = document.getElementById('page-1');
const page2 = document.getElementById('page-2');
const page3 = document.getElementById('page-3');
const envelope = document.getElementById('envelope-trigger');
const finalBtn = document.getElementById('final-trigger');

// Function to burst hearts
function burstHearts() {
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart-particle';
        heart.innerHTML = '❤️';
        heart.style.left = (window.innerWidth / 2 + (Math.random() * 120 - 50)) + 'px';
        heart.style.top = (window.innerHeight / 2) + 'px';
        heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
        document.body.appendChild(heart);
        
        setTimeout(() => heart.remove(), 2000);
    }
}

// Transition from Envelope to Message
envelope.addEventListener('click', () => {
    burstHearts();
    page1.classList.add('hidden');
    setTimeout(() => {
        page1.style.display = 'none';
        page2.classList.remove('hidden');
        page2.classList.add('active');
    }, 500);
});

// Transition to Final "I Love You"
finalBtn.addEventListener('click', () => {
    page2.classList.add('hidden');
    setTimeout(() => {
        page2.style.display = 'none';
        page3.classList.remove('hidden');
        page3.classList.add('active');
        // Continuous small heart effect for the final page
        setInterval(burstHearts, 1000);
    }, 500);
});