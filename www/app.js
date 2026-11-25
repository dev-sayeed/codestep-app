document.addEventListener("DOMContentLoaded", () => {
  const CATEGORIES = {
    sports: { label: "⚽ Sports Theme", word: "Match", item: "Goal", num: 10 },
    nature: { label: "🌿 Nature Theme", word: "Forest", item: "Tree", num: 25 },
    food:   { label: "🍕 Food Theme",   word: "Menu",   item: "Pizza", num: 50 },
    space:  { label: "🚀 Space Theme",  word: "Orbit",  item: "Rocket", num: 99 }
  };

  const ALL_COURSES = {};
  if (typeof COURSE_HTML !== "undefined") ALL_COURSES.html = COURSE_HTML;
  if (typeof COURSE_CSS !== "undefined") ALL_COURSES.css = COURSE_CSS;
  if (typeof COURSE_PYTHON !== "undefined") ALL_COURSES.python = COURSE_PYTHON;
  if (typeof COURSE_C !== "undefined") ALL_COURSES.c = COURSE_C;

  const DEFAULT_STATE = {
    onboarded: false,
    xp: 0,
    category: "sports",
    solvedIds: []
  };

  function loadState() {
    try {
      const raw = localStorage.getItem("codestep_pro_v1") || localStorage.getItem("codestep_backup");
      if (!raw) return { ...DEFAULT_STATE };
      const parsed = JSON.parse(raw);
      return {
        onboarded: Boolean(parsed.onboarded),
        xp: Number(parsed.xp) || 0,
        category: CATEGORIES[parsed.category] ? parsed.category : "sports",
        solvedIds: Array.isArray(parsed.solvedIds) ? parsed.solvedIds : []
      };
    } catch (e) {
      return { ...DEFAULT_STATE };
    }
  }

  let state = loadState();
  let activeCourseKey = null;
  let activeModuleIdx = 0;
  let activeTaskIdx = 0;

  function saveState() {
    try {
      const serialized = JSON.stringify(state);
      localStorage.setItem("codestep_pro_v1", serialized);
      localStorage.setItem("codestep_backup", serialized);
    } catch (e) {}
    const xpEl = document.getElementById("xp-display");
    if (xpEl) xpEl.textContent = `⭐ ${state.xp} XP`;
    updateProgressScreen();
  }

  function applyTheme(catKey) {
    state.category = catKey;
    document.body.setAttribute("data-theme", catKey);
    const labelEl = document.getElementById("active-theme-label");
    if (labelEl) labelEl.textContent = CATEGORIES[catKey].label;
    saveState();
  }

  function showTopScreen(id) {
    document.getElementById("welcome-screen").classList.remove("active");
    document.getElementById("category-screen").classList.remove("active");
    document.getElementById("main-container").classList.add("hidden");

    if (id === "main-container") {
      document.getElementById("main-container").classList.remove("hidden");
    } else {
      document.getElementById(id).classList.add("active");
    }
  }

  function switchTab(tabId) {
    document.querySelectorAll(".tab-view").forEach(v => v.classList.remove("active"));
    const target = document.getElementById(tabId);
    if (target) target.classList.add("active");

    document.querySelectorAll(".nav-tab").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.tab === tabId);
    });
    window.scrollTo(0, 0);
  }

  // Get Started Button
  const getStartedBtn = document.getElementById("get-started-btn");
  if (getStartedBtn) {
    getStartedBtn.addEventListener("click", () => {
      showTopScreen("category-screen");
    });
  }

  // Category Cards
  document.querySelectorAll(".cat-card").forEach(btn => {
    btn.addEventListener("click", () => {
      state.onboarded = true;
      applyTheme(btn.dataset.cat);
      renderCourses();
      showTopScreen("main-container");
      switchTab("home-screen");
    });
  });

  const switchThemeBtn = document.getElementById("switch-theme-btn");
  if (switchThemeBtn) {
    switchThemeBtn.addEventListener("click", () => showTopScreen("category-screen"));
  }

  // Bottom Nav Tabs
  document.querySelectorAll(".nav-tab").forEach(btn => {
    btn.addEventListener("click", () => {
      if (btn.dataset.tab === "home-screen") renderCourses();
      if (btn.dataset.tab === "progress-screen") updateProgressScreen();
      switchTab(btn.dataset.tab);
    });
  });

  // Block Copy/Paste safely
  const exampleBox = document.getElementById("example-box");
  const taskInput = document.getElementById("task-input");
  ["copy", "cut", "paste", "contextmenu"].forEach(evt => {
    if (exampleBox) exampleBox.addEventListener(evt, e => e.preventDefault());
    if (taskInput) {
      taskInput.addEventListener(evt, e => {
        e.preventDefault();
        const fb = document.getElementById("feedback-msg");
        if (fb) {
          fb.style.color = "#B45309";
          fb.textContent = "⚠️ Copy/paste disabled, type it out to lock it in your memory!";
        }
      });
    }
  });

  function themeText(str) {
    const t = CATEGORIES[state.category] || CATEGORIES.sports;
    return String(str)
      .replace(/\{WORD\}/g, t.word)
      .replace(/\{word\}/g, t.word.toLowerCase())
      .replace(/\{ITEM\}/g, t.item)
      .replace(/\{item\}/g, t.item.toLowerCase())
      .replace(/\{NUM\}/g, t.num);
  }

  function getCourseSolvedCount(courseKey) {
    return state.solvedIds.filter(id => id.startsWith(courseKey + "_")).length;
  }

  function getCourseTotalTasks(courseKey) {
    const course = ALL_COURSES[courseKey];
    if (!course) return 0;
    return course.modules.reduce((sum, m) => sum + m.tasks.length, 0);
  }

  function renderCourses() {
    const grid = document.getElementById("course-grid");
    if (!grid) return;
    grid.innerHTML = "";

    Object.keys(ALL_COURSES).forEach(key => {
      const c = ALL_COURSES[key];
      const done = getCourseSolvedCount(key);
      const total = getCourseTotalTasks(key);

      const card = document.createElement("button");
      card.type = "button";
      card.className = "course-card";
      card.innerHTML = `
        <div class="course-icon" style="background:${c.bg}; color:${c.color};">${c.badge}</div>
        <h3>${c.title}</h3>
        <p>${c.desc}</p>
        <div class="course-status">${done}/${total} Tasks Done</div>
      `;
      card.addEventListener("click", () => openRoadmap(key));
      grid.appendChild(card);
    });
  }

  function openRoadmap(courseKey) {
    activeCourseKey = courseKey;
    const course = ALL_COURSES[courseKey];
    document.getElementById("roadmap-title").textContent = `${course.title} Path (${getCourseTotalTasks(courseKey)} Tasks)`;
    document.getElementById("roadmap-desc").textContent = course.desc;

    const list = document.getElementById("module-list");
    list.innerHTML = "";

    course.modules.forEach((mod, mIdx) => {
      const solvedInMod = mod.tasks.filter((_, tIdx) =>
        state.solvedIds.includes(`${courseKey}_${mIdx}_${tIdx}`)
      ).length;

      const prevSolved = mIdx === 0 || course.modules[mIdx - 1].tasks.every((_, tIdx) =>
        state.solvedIds.includes(`${courseKey}_${mIdx - 1}_${tIdx}`)
      );

      const item = document.createElement("button");
      item.type = "button";
      item.className = `module-item ${!prevSolved ? "locked" : ""}`;
      item.innerHTML = `
        <div class="module-info">
          <h4>${mIdx + 1}. ${mod.title}</h4>
          <p>${solvedInMod}/${mod.tasks.length} tasks completed</p>
        </div>
        <span class="module-badge">${!prevSolved ? "🔒 Locked" : solvedInMod === mod.tasks.length ? "✅ Done" : "Start ▶"}</span>
      `;

      if (prevSolved) {
        item.addEventListener("click", () => {
          const nextUnsolved = mod.tasks.findIndex((_, tIdx) =>
            !state.solvedIds.includes(`${courseKey}_${mIdx}_${tIdx}`)
          );
          startTask(mIdx, nextUnsolved >= 0 ? nextUnsolved : 0);
        });
      }
      list.appendChild(item);
    });

    switchTab("roadmap-screen");
  }

  function startTask(mIdx, tIdx) {
    activeModuleIdx = mIdx;
    activeTaskIdx = tIdx;

    const course = ALL_COURSES[activeCourseKey];
    const mod = course.modules[mIdx];
    const item = mod.tasks[tIdx];

    document.getElementById("step-counter").textContent = `${tIdx + 1}/${mod.tasks.length}`;
    document.getElementById("progress-fill").style.width = `${(tIdx / mod.tasks.length) * 100}%`;

    document.getElementById("explain-tag").textContent = `${course.title} • M${mIdx + 1} Task ${tIdx + 1}`;
    document.getElementById("explain-title").textContent = themeText(item.title);
    document.getElementById("explain-body").textContent = themeText(item.explain);
    document.getElementById("explain-analogy").textContent = "💡 " + themeText(item.analogy);
    document.getElementById("explain-code").textContent = themeText(item.example);

    document.getElementById("task-tag").textContent = `CHALLENGE ${tIdx + 1} OF ${mod.tasks.length}`;
    document.getElementById("task-title").textContent = themeText(item.title);
    document.getElementById("task-prompt").textContent = themeText(item.prompt);
    document.getElementById("task-clue").textContent = "Rule Clue: " + themeText(item.clue);
    document.getElementById("task-clue").classList.add("hidden");

    taskInput.value = "";
    document.getElementById("feedback-msg").textContent = "";
    document.getElementById("next-task-btn").classList.add("hidden");

    document.getElementById("explain-slide").classList.remove("hidden");
    document.getElementById("task-slide").classList.add("hidden");
    switchTab("lesson-screen");
  }

  document.getElementById("start-task-btn").addEventListener("click", () => {
    document.getElementById("explain-slide").classList.add("hidden");
    document.getElementById("task-slide").classList.remove("hidden");
    setTimeout(() => taskInput.focus(), 100);
  });

  document.getElementById("peek-concept-btn").addEventListener("click", () => {
    document.getElementById("task-slide").classList.add("hidden");
    document.getElementById("explain-slide").classList.remove("hidden");
  });

  document.getElementById("toggle-clue-btn").addEventListener("click", () => {
    document.getElementById("task-clue").classList.toggle("hidden");
  });

  document.getElementById("run-task-btn").addEventListener("click", () => {
    const course = ALL_COURSES[activeCourseKey];
    const item = course.modules[activeModuleIdx].tasks[activeTaskIdx];
    const fb = document.getElementById("feedback-msg");
    const expected = themeText(item.match);
    const regex = new RegExp(expected, "i");

    if (regex.test(taskInput.value.trim())) {
      const taskId = `${activeCourseKey}_${activeModuleIdx}_${activeTaskIdx}`;
      if (!state.solvedIds.includes(taskId)) {
        state.solvedIds.push(taskId);
        state.xp += 15;
        saveState();
      }
      fb.style.color = "#15803D";
      fb.textContent = "✅ Nailed it! Progress saved (+15 XP)";
      document.getElementById("next-task-btn").classList.remove("hidden");
    } else {
      fb.style.color = "#B91C1C";
      fb.textContent = "❌ Not quite right, check your syntax, brackets, or spelling.";
    }
  });

  document.getElementById("next-task-btn").addEventListener("click", () => {
    const mod = ALL_COURSES[activeCourseKey].modules[activeModuleIdx];
    if (activeTaskIdx + 1 < mod.tasks.length) {
      startTask(activeModuleIdx, activeTaskIdx + 1);
    } else {
      openRoadmap(activeCourseKey);
    }
  });

  document.getElementById("roadmap-back-btn").addEventListener("click", () => {
    renderCourses();
    switchTab("home-screen");
  });

  document.getElementById("lesson-back-btn").addEventListener("click", () => openRoadmap(activeCourseKey));

  function updateProgressScreen() {
    const statsGrid = document.getElementById("stats-grid");
    if (!statsGrid) return;
    statsGrid.innerHTML = "";

    Object.keys(ALL_COURSES).forEach(key => {
      const c = ALL_COURSES[key];
      const done = getCourseSolvedCount(key);
      const total = getCourseTotalTasks(key);
      const box = document.createElement("div");
      box.className = "stat-box";
      box.innerHTML = `<strong>${done}/${total}</strong><span>${c.title} Tasks</span>`;
      statsGrid.appendChild(box);
    });

    const backupBox = document.getElementById("backup-code-box");
    if (backupBox) backupBox.value = btoa(JSON.stringify(state));
  }

  document.getElementById("copy-backup-btn").addEventListener("click", () => {
    const box = document.getElementById("backup-code-box");
    box.select();
    document.execCommand("copy");
    alert("Save code copied!");
  });

  document.getElementById("restore-backup-btn").addEventListener("click", () => {
    const code = prompt("Paste your saved backup code:");
    if (!code) return;
    try {
      const decoded = JSON.parse(atob(code.trim()));
      if (decoded && Array.isArray(decoded.solvedIds)) {
        state = decoded;
        saveState();
        applyTheme(state.category);
        renderCourses();
        alert("Progress restored successfully!");
      }
    } catch (e) {
      alert("Invalid backup code.");
    }
  });

  // Boot App
  saveState();
  if (state.onboarded) {
    applyTheme(state.category);
    renderCourses();
    showTopScreen("main-container");
    switchTab("home-screen");
  } else {
    showTopScreen("welcome-screen");
  }
});
