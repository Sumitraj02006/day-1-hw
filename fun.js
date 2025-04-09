// script.js
document.querySelectorAll('.switch input').forEach(toggle => {
    toggle.addEventListener('change', function () {
      const card = this.closest('.extension-card');
      card.classList.toggle('active', this.checked);
    });
  });
  