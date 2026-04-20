const loader = document.getElementById('loader');
const main = document.getElementById('main');
const text = document.getElementById('text');
const acceptBtn = document.getElementById('acceptBtn');
const thinkBtn = document.getElementById('thinkBtn');
const card = document.querySelector('.card');
const canvas = document.getElementById('bg');
const ctx = canvas.getContext('2d');

const message = 'Agente Deylin Celeste,Niña de Ojos Cafes... una misión secreta ha aparecido en tu mapa,Un Evento que empieza una nueva Etapa. Recompensa legendaria:El inicio de Una historia que tenia que ser contada. ¿Te gustaría tener una cita romántica conmigo?';

let messageIndex = 0;

function typeText() {
  if (messageIndex < message.length) {
    text.textContent += message.charAt(messageIndex);
    messageIndex += 1;
    setTimeout(typeText, 38);
  }
}

function acceptMission() {
  card.innerHTML = '<h1>💖 EVENTO COMPLETADO 💖</h1><p>Prepárate para una tarde inolvidable.</p>';
}

function thinkLater() {
  alert('El jugador Hanzel seguirá en matchmaking del amor ✨');
}

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const stars = Array.from({ length: 90 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  size: Math.random() * 2 + 1,
  velocity: Math.random() + 0.2
}));

function drawBackground() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  stars.forEach((star) => {
    star.y += star.velocity;
    if (star.y > canvas.height) star.y = 0;
    ctx.fillStyle = 'rgba(124,247,255,.9)';
    ctx.fillRect(star.x, star.y, star.size, star.size);
  });

  for (let i = 0; i < 2; i += 1) {
    ctx.font = '18px Arial';
    ctx.fillText('❤', Math.random() * canvas.width, Math.random() * canvas.height);
  }

  window.requestAnimationFrame(drawBackground);
}

acceptBtn.addEventListener('click', acceptMission);
thinkBtn.addEventListener('click', thinkLater);

setTimeout(() => {
  loader.style.display = 'none';
  main.style.display = 'flex';
  typeText();
}, 2500);

drawBackground();
