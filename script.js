// ========================================
// Falling Particles (Kisses & Hearts)
// ========================================
function createFallingParticle() {
    const particlesContainer = document.getElementById('particlesContainer');
    const particle = document.createElement('div');
    particle.classList.add('falling-particle');
    
    const particles = ['💋', '💕', '💖', '💗', '💝', '✨', '💘'];
    particle.innerHTML = particles[Math.floor(Math.random() * particles.length)];
    
    particle.style.left = Math.random() * 100 + '%';
    const duration = Math.random() * 8 + 10;
    particle.style.animationDuration = duration + 's';
    particle.style.animationDelay = Math.random() * 2 + 's';
    const size = Math.random() * 12 + 18;
    particle.style.fontSize = size + 'px';
    
    particlesContainer.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, (duration + 2) * 1000);
}

function initializeFallingParticles() {
    const initialParticles = 12;
    for (let i = 0; i < initialParticles; i++) {
        setTimeout(() => {
            createFallingParticle();
        }, i * 400);
    }
}

function continuousFallingParticles() {
    setInterval(() => {
        createFallingParticle();
    }, 2500);
}

// ========================================
// Send Kiss Button
// ========================================
function setupKissButton() {
    const kissButton = document.getElementById('kissButton');
    const kissMessage = document.getElementById('kissMessage');
    const lipsLeft = document.getElementById('lipsLeft');
    const lipsRight = document.getElementById('lipsRight');
    const kissSparkles = document.getElementById('kissSparkles');
    const xoxoText = document.querySelector('.xoxo-text');
    
    let hasKissed = false;
    
    kissButton.addEventListener('click', function() {
        if (hasKissed) return;
        
        hasKissed = true;
        
        // Lips move together and kiss
        lipsLeft.classList.add('kissing');
        lipsRight.classList.add('kissing');
        
        // Show sparkles when lips meet
        setTimeout(() => {
            kissSparkles.classList.add('show');
        }, 800);
        
        // Show XOXO text
        setTimeout(() => {
            xoxoText.classList.add('show');
        }, 1000);
        
        // Button disappears
        setTimeout(() => {
            kissButton.classList.add('kissed');
        }, 400);
        
        // Show kiss message
        setTimeout(() => {
            kissMessage.classList.add('show');
        }, 1200);
        
        // Create kiss explosion
        setTimeout(() => {
            createKissExplosion();
        }, 900);
        
        // Create flying kisses
        setTimeout(() => {
            createFlyingKisses();
        }, 1300);
    });
}

// ========================================
// Kiss Explosion Effect
// ========================================
function createKissExplosion() {
    const symbols = ['💋', '💕', '💖', '💗', '💝', '✨', '💫', '⭐', '💘'];
    const kissContainer = document.getElementById('kissContainer');
    const rect = kissContainer.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Create 40 symbols exploding outward
    for (let i = 0; i < 40; i++) {
        setTimeout(() => {
            const symbol = document.createElement('div');
            symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)];
            symbol.style.position = 'fixed';
            symbol.style.left = centerX + 'px';
            symbol.style.top = centerY + 'px';
            symbol.style.fontSize = (Math.random() * 28 + 22) + 'px';
            symbol.style.pointerEvents = 'none';
            symbol.style.zIndex = '9999';
            
            document.body.appendChild(symbol);
            
            const angle = (i / 40) * Math.PI * 2;
            const distance = Math.random() * 200 + 120;
            const endX = centerX + Math.cos(angle) * distance;
            const endY = centerY + Math.sin(angle) * distance;
            
            symbol.animate([
                {
                    transform: 'translate(-50%, -50%) scale(0) rotate(0deg)',
                    opacity: 1
                },
                {
                    transform: `translate(${endX - centerX}px, ${endY - centerY}px) scale(2) rotate(${Math.random() * 720}deg)`,
                    opacity: 0
                }
            ], {
                duration: 1800 + Math.random() * 700,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            });
            
            setTimeout(() => symbol.remove(), 2500);
        }, i * 15);
    }
}

// ========================================
// Flying Kisses Confetti
// ========================================
function createFlyingKisses() {
    for (let i = 0; i < 55; i++) {
        setTimeout(() => {
            const kiss = document.createElement('div');
            kiss.textContent = '💋';
            kiss.style.position = 'fixed';
            kiss.style.left = Math.random() * window.innerWidth + 'px';
            kiss.style.top = '-30px';
            kiss.style.fontSize = (Math.random() * 18 + 18) + 'px';
            kiss.style.pointerEvents = 'none';
            kiss.style.zIndex = '9999';
            kiss.style.opacity = '0.85';
            
            document.body.appendChild(kiss);
            
            const duration = Math.random() * 3500 + 2500;
            const sway = (Math.random() - 0.5) * 200;
            const rotation = Math.random() * 720 - 360;
            
            kiss.animate([
                {
                    transform: 'translateY(0) translateX(0) rotate(0deg)',
                    opacity: 0.85
                },
                {
                    transform: `translateY(${window.innerHeight + 50}px) translateX(${sway}px) rotate(${rotation}deg)`,
                    opacity: 0
                }
            ], {
                duration: duration,
                easing: 'linear'
            });
            
            setTimeout(() => kiss.remove(), duration);
        }, i * 35);
    }
}

// ========================================
// Kiss Mark Effect (lipstick marks)
// ========================================
function createKissMark() {
    const kiss = document.createElement('div');
    kiss.textContent = '💋';
    kiss.style.position = 'fixed';
    kiss.style.left = Math.random() * window.innerWidth + 'px';
    kiss.style.top = Math.random() * window.innerHeight + 'px';
    kiss.style.fontSize = (Math.random() * 30 + 40) + 'px';
    kiss.style.pointerEvents = 'none';
    kiss.style.zIndex = '9999';
    kiss.style.opacity = '0';
    
    document.body.appendChild(kiss);
    
    kiss.animate([
        {
            opacity: 0,
            transform: 'scale(0) rotate(0deg)'
        },
        {
            opacity: 0.3,
            transform: 'scale(1) rotate(15deg)'
        },
        {
            opacity: 0,
            transform: 'scale(1.2) rotate(15deg)'
        }
    ], {
        duration: 2000,
        easing: 'ease-out'
    });
    
    setTimeout(() => kiss.remove(), 2000);
}

// ========================================
// Photo Placeholder Handler
// ========================================
function setupPhotoPlaceholders() {
    const photoCards = document.querySelectorAll('.photo-card');
    
    photoCards.forEach(card => {
        const img = card.querySelector('.gallery-photo');
        const placeholder = card.querySelector('.photo-placeholder');
        
        if (!img || !placeholder) return;
        
        img.addEventListener('load', function() {
            if (this.complete && this.naturalHeight !== 0) {
                placeholder.style.display = 'none';
                img.style.display = 'block';
            }
        });
        
        img.addEventListener('error', function() {
            placeholder.style.display = 'flex';
            img.style.display = 'none';
        });
        
        if (img.complete) {
            if (img.naturalHeight !== 0) {
                placeholder.style.display = 'none';
                img.style.display = 'block';
            }
        }
    });
}

// ========================================
// Initialize Everything
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    // Initialize falling particles
    initializeFallingParticles();
    continuousFallingParticles();
    
    // Setup kiss button
    setupKissButton();
    
    // Setup photo placeholders
    setupPhotoPlaceholders();
    
    // Add random kiss marks after button click
    const kissButton = document.getElementById('kissButton');
    kissButton.addEventListener('click', function() {
        for (let i = 0; i < 8; i++) {
            setTimeout(() => {
                createKissMark();
            }, 1500 + (i * 300));
        }
    });
    
    console.log('💋 Made with kisses and endless love! 💕');
});

// ========================================
// Random Sparkles on Scroll
// ========================================
let sparkleTimeout;
function createScrollSparkles() {
    clearTimeout(sparkleTimeout);
    
    sparkleTimeout = setTimeout(() => {
        const sparkle = document.createElement('div');
        const sparkles = ['✨', '💫', '⭐', '💋'];
        sparkle.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];
        sparkle.style.position = 'fixed';
        sparkle.style.left = Math.random() * window.innerWidth + 'px';
        sparkle.style.top = '0px';
        sparkle.style.fontSize = (Math.random() * 12 + 16) + 'px';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '1';
        sparkle.style.opacity = '0.6';
        
        document.body.appendChild(sparkle);
        
        const duration = Math.random() * 2000 + 2000;
        sparkle.animate([
            {
                transform: 'translateY(0) rotate(0deg)',
                opacity: 0.6
            },
            {
                transform: `translateY(${window.innerHeight}px) rotate(${Math.random() * 360}deg)`,
                opacity: 0
            }
        ], {
            duration: duration,
            easing: 'linear'
        });
        
        setTimeout(() => sparkle.remove(), duration);
    }, 50);
}

// Add scroll sparkles
window.addEventListener('scroll', createScrollSparkles);
