const messagesDiv = document.getElementById('messages');
const finalMessageDiv = document.getElementById('finalMessage');
const showMessageBtn = document.getElementById('showMessageBtn');
const nicknameButtons = document.querySelectorAll('.nickname-buttons button');

const messages = [
  "Gracias por ser parte de mi vida por este tiempo ya sea como amiga, consejera, novia, quien se preocupa por mi...",
  "Cada mensaje tuyo ilumina mi día.",
  "Estoy feliz de llamarte mi novia.",
  "Este primer mes ha sido mágico.",
  "No puedo esperar para seguir conociéndote más.",
  "TE AMOOO MI PEQUEÑA SALTAMONTES!!!..."
];

let currentMessage = 0;
let messageTimeout;

function showNextMessage() {
  if (currentMessage < messages.length) {
    messagesDiv.textContent = messages[currentMessage];
    messagesDiv.classList.add('visible');

    messageTimeout = setTimeout(() => {
      messagesDiv.classList.remove('visible');
      currentMessage = (currentMessage + 1) % messages.length;
      setTimeout(showNextMessage, 500);
    }, 3500);
  }
}

// Empieza la secuencia de mensajes al cargar la página
window.addEventListener('load', () => {
  currentMessage = 0;
  showNextMessage();
});

showMessageBtn.addEventListener('click', () => {
  finalMessageDiv.classList.add('visible');
  showMessageBtn.style.display = 'none';
  messagesDiv.classList.remove('visible');
  clearTimeout(messageTimeout);
});

nicknameButtons.forEach(button => {
  button.addEventListener('click', () => {
    clearTimeout(messageTimeout);
    const msg = button.getAttribute('data-msg');
    messagesDiv.textContent = msg;
    messagesDiv.classList.add('visible');
    finalMessageDiv.classList.remove('visible');

    setTimeout(() => {
      messagesDiv.classList.remove('visible');
    }, 4000);
  });
});
