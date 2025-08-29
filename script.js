// Dark / light theme toggle
const toggle = document.getElementById('themeToggle');
const root = document.documentElement;
const stored = localStorage.getItem('theme');
if (stored === 'light') document.body.classList.add('light');

toggle?.addEventListener('click', () => {
  document.body.classList.toggle('light');
  const mode = document.body.classList.contains('light') ? 'light' : 'dark';
  localStorage.setItem('theme', mode);
  toggle.textContent = mode === 'light' ? '☀️' : '🌙';
});

// Year in footer
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();