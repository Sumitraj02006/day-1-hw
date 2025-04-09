const extensions = [
  { name: 'DevLens', desc: 'Quickly inspect page layouts and visualize element boundaries.', active: true },
  { name: 'StyleSpy', desc: 'Instantly analyze and copy CSS from any webpage element.', active: true },
  { name: 'SpeedBoost', desc: 'Optimizes browser resource usage to accelerate page loading.', active: false },
  { name: 'JSONWizard', desc: 'Formats, validates, and prettifies JSON responses in-browser.', active: true },
  { name: 'TabMaster Pro', desc: 'Organizes browser tabs into groups and sessions.', active: true },
  { name: 'ViewportBuddy', desc: 'Simulates various screen resolutions directly within the browser.', active: false },
  { name: 'Markup Notes', desc: 'Enables annotation and notes directly onto webpages for collaborative debugging.', active: true },
  { name: 'GridGuides', desc: 'Overlay customizable grids and alignment guides on any webpage.', active: false },
  { name: 'Palette Picker', desc: 'Instantly extracts color palettes from any webpage.', active: true },
  { name: 'LinkChecker', desc: 'Scans and highlights broken links on any page.', active: false },
  { name: 'DOM Snapshot', desc: 'Capture and export DOM structures quickly.', active: false },
  { name: 'ConsolePlus', desc: 'Enhanced developer console with advanced filtering and logging.', active: false }
];

const grid = document.getElementById('extensionsGrid');
const buttons = document.querySelectorAll('.filter-btn');

function renderExtensions(filter = 'all') {
  grid.innerHTML = '';
  const filtered = extensions.filter(ext =>
    filter === 'all' || (filter === 'active' && ext.active) || (filter === 'inactive' && !ext.active)
  );
  filtered.forEach((ext, index) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <h3>${ext.name}</h3>
      <p>${ext.desc}</p>
      <div class="actions">
        <button class="remove-btn" onclick="removeExtension(${index})">Remove</button>
        <input type="checkbox" class="toggle" ${ext.active ? 'checked' : ''} onchange="toggleActive(${index})">
      </div>
    `;
    grid.appendChild(card);
  });
}

function removeExtension(index) {
  extensions.splice(index, 1);
  renderExtensions(getCurrentFilter());
}

function toggleActive(index) {
  extensions[index].active = !extensions[index].active;
  renderExtensions(getCurrentFilter());
}

function getCurrentFilter() {
  return document.querySelector('.filter-btn.active').dataset.filter;
}

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderExtensions(btn.dataset.filter);
  });
});

renderExtensions();
