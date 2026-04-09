// ===== IRAN GLORY — app.js =====

// ---- PAGE NAVIGATION ----
function showPage(id) {
  ddocument.querySelectorAll('button, .buy-btn, .hero-cta').forEach(btn => {
  btn.addEventListener('click', function () {
    this.classList.add('vibrate');

    if (navigator.vibrate) {
      navigator.vibrate(80);
    }

    setTimeout(() => {
      this.classList.remove('vibrate');
    }, 250);
  });
});

// ---- MOBILE MENU ----
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('open');
}

// ---- DASHBOARD PANEL NAVIGATION ----
function showDash(panel) {
  // Hide all panels
  document.querySelectorAll('.dash-panel').forEach(p => p.classList.remove('active'));
  // Deactivate all sidebar links
  document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));

  // Show target panel
  const target = document.getElementById('dash-' + panel);
  if (target) target.classList.add('active');

  // Activate the clicked sidebar link
  event.target.classList.add('active');
}

// ---- DASHBOARD INIT ----
function initDashboard() {
  // Set current date
  const dateEl = document.getElementById('dashDate');
  if (dateEl) {
    const now = new Date();
    dateEl.textContent = now.toLocaleDateString('en-US', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });
  }

  // Draw bar chart
  drawBarChart();
}

// ---- BAR CHART ----
function drawBarChart() {
  const data = [
    { label: 'Oct', value: 3, color: '#7040c0' },
    { label: 'Nov', value: 5, color: '#c9a227' },
    { label: 'Dec', value: 8, color: '#e85d8a' },
    { label: 'Jan', value: 4, color: '#40c080' },
    { label: 'Feb', value: 6, color: '#4090f0' },
    { label: 'Mar', value: 9, color: '#c9a227' },
    { label: 'Apr', value: 4, color: '#7040c0' },
  ];

  const container = document.getElementById('barChart');
  if (!container) return;

  const max = Math.max(...data.map(d => d.value));
  container.innerHTML = '';

  data.forEach(d => {
    const pct = Math.round((d.value / max) * 100);
    const wrap = document.createElement('div');
    wrap.className = 'bar-wrap';
    wrap.innerHTML = `
      <div class="bar" style="background:${d.color}; height:${pct}%;"></div>
      <div class="bar-lbl">${d.label}</div>
    `;
    container.appendChild(wrap);
  });
}

// ---- SAVE SETTINGS (demo) ----
document.addEventListener('DOMContentLoaded', () => {
  const saveBtn = document.querySelector('.save-btn');
  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      saveBtn.textContent = '✓ Saved!';
      saveBtn.style.background = 'linear-gradient(135deg, #40c080, #20a060)';
      setTimeout(() => {
        saveBtn.textContent = 'Save Changes';
        saveBtn.style.background = '';
      }, 2000);
    });
  }

  // Activate overview on dashboard load
  const overviewLink = document.querySelector('.sidebar-link');
  if (overviewLink) overviewLink.classList.add('active');
});

// ---- NAVBAR SCROLL EFFECT ----
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 20) {
    nav.style.boxShadow = '0 4px 30px rgba(0,0,0,0.5)';
  } else {
    nav.style.boxShadow = 'none';
  }
});
