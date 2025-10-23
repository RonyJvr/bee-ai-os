// Simple boot sequence
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('boot-screen').classList.add('hidden');
    document.getElementById('desktop').classList.remove('hidden');
  }, 2000); // 2-second boot
});
