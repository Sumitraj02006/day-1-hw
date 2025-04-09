const extensions = [
    { name: "DevLens", description: "Inspect layouts and element boundaries.", active: true },
    { name: "StyleSpy", description: "Analyze and copy CSS instantly.", active: true },
    { name: "SpeedBoost", description: "Accelerate browser performance.", active: false },
    { name: "JSONWizard", description: "Format and validate JSON.", active: true },
    { name: "TabMaster Pro", description: "Group tabs and manage sessions.", active: true },
    { name: "ViewportBuddy", description: "Test screen resolutions.", active: false },
    { name: "Markup Notes", description: "Annotate web pages.", active: true },
    { name: "GridGuides", description: "Overlay grid alignment guides.", active: false },
    { name: "Palette Picker", description: "Extract color palettes.", active: true },
    { name: "LinkChecker", description: "Highlight broken links.", active: false },
    { name: "DOM Snapshot", description: "Export DOM snapshots.", active: false },
    { name: "ConsolePlus", description: "Enhanced developer console.", active: true },
  ];
  
  const container = document.getElementById("extensionGrid");
  let currentFilter = "all";
  
  function renderExtensions(filter = "all") {
    container.innerHTML = "";
  
    const filtered = extensions.filter(ext => {
      if (filter === "all") return true;
      if (filter === "active") return ext.active;
      if (filter === "inactive") return !ext.active;
    });
  
    filtered.forEach((ext, index) => {
      const card = document.createElement("div");
      card.className = "card";
  
      card.innerHTML = `
        <h3>${ext.name}</h3>
        <p>${ext.description}</p>
        <button class="remove-btn" onclick="removeExtension(${index})">Remove</button>
        <div class="toggle-switch ${ext.active ? 'active' : ''}" onclick="toggleExtension(${index})">
          <div class="toggle-circle"></div>
        </div>
      `;
  
      container.appendChild(card);
    });
  }
  
  function toggleExtension(index) {
    extensions[index].active = !extensions[index].active;
    renderExtensions(currentFilter);
  }
  
  function removeExtension(index) {
    extensions.splice(index, 1);
    renderExtensions(currentFilter);
  }
  
  function filter(type) {
    currentFilter = type;
    document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
  
    const filterIndex = type === "all" ? 0 : type === "active" ? 1 : 2;
    document.querySelectorAll(".filter-btn")[filterIndex].classList.add("active");
  
    renderExtensions(type);
  }
  
  renderExtensions();
  