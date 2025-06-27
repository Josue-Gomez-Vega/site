const heartBtn = document.getElementById('heartBtn');

heartBtn.addEventListener('click', () => {
  if (heartBtn.classList.contains('pulse-on-click')) return;

  heartBtn.classList.add('pulse-on-click');

  setTimeout(() => {
    window.location.href = '../html/principal.html';
  }, 600);
});
