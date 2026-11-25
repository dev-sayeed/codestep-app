document.addEventListener("DOMContentLoaded", () => {
  const CATEGORIES = {
    sports: {
      icon: "⚽",
      label: "Sports Arena",
      word: "Match",
      item: "Goal",
      num: 10,
      winEmoji: "🏆",
      winTitle: "Goal Scored!"
    },
    nature: {
      icon: "🌿",
      label: "Forest Canopy",
      word: "Forest",
      item: "Tree",
      num: 25,
      winEmoji: "🦋",
      winTitle: "Trail Blazed!"
    },
    food: {
      icon: "🍕",
      label: "Street Cafe",
      word: "Menu",
      item: "Pizza",
      num: 50,
      winEmoji: "👨‍🍳",
      winTitle: "Order Up!"
    },
    space: {
      icon: "🚀",
      label: "Deep Cosmos",
      word: "Orbit",
      item: "Rocket",
      num: 99,
      winEmoji: "🪐",
      winTitle: "Orbit Achieved!"
    }
  };

  const ALL_COURSES = {};
  if (typeof COURSE_HTML !== "undefined") ALL_COURSES.html = COURSE_HTML;
  if (typeof COURSE_CSS !== "undefined") ALL_COURSES.css = COURSE_CSS;
  if (typeof COURSE_PYTHON !== "undefined") ALL_COURSES.python = COURSE_PYTHON;
  if (typeof COURSE_C !== "undefined") ALL_COURSES.c = COURSE_C;
  if (typeof COURSE_CONVERSIONS !== "undefined") ALL_COURSES.conversions = COURSE_CONVERSIONS;

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
    const cat = CATEGORIES[catKey] || CATEGORIES.sports;
    document.body.setAttribute("data-theme", catKey);

    const labelEl = document.getElementById("active-theme-label");
    if (labelEl) labelEl.textContent = cat.label;

    const iconEl = document.getElementById("brand-world-icon");
    if (iconEl) iconEl.textContent = cat.icon;

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

  const getStartedBtn = document.getElementById("get-started-btn");
  if (getStartedBtn) {
    getStartedBtn.addEventListener("click", () => {
      showTopScreen("category-screen");
    });
  }

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

  document.querySelectorAll(".nav-tab").forEach(btn => {
    btn.addEventListener("click", () => {
      if (btn.dataset.tab === "home-screen") renderCourses();
      if (btn.dataset.tab === "progress-screen") updateProgressScreen();
      switchTab(btn.dataset.tab);
    });
  });

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

  // Builds a plain-English beginner concept note so terms are always explained
  function getConceptDefinition(courseKey, item) {
    if (item.concept) return themeText(item.concept);

    const text = (item.title + " " + item.explain + " " + item.example).toLowerCase();
    if (courseKey === "html") {
      if (text.includes("href") || text.includes("src") || text.includes("alt") || text.includes("placeholder") || text.includes("attribute") || text.includes("class=") || text.includes("id=")) {
        return "What is an Attribute? Extra settings placed inside an opening HTML tag (like href=\"...\" or src=\"...\") that tell the browser how the tag should behave.";
      }
      if (text.includes("<ul") || text.includes("<ol") || text.includes("<table") || text.includes("<select")) {
        return "What is Nesting? Placing child tags (like <li> or <td>) inside a parent wrapper tag so the browser knows they belong together.";
      }
      return "What is an HTML Tag? A keyword wrapped in angle brackets (< >) that tells the browser what role a piece of content plays on the page.";
    }
    if (courseKey === "css") {
      if (text.includes(".{") || text.includes("#{") || text.includes("selector")) {
        return "What is a Selector? The target name before the curly braces { } that tells CSS which HTML elements to style (.name targets a class; #name targets a unique ID).";
      }
      if (text.includes("padding") || text.includes("margin") || text.includes("border")) {
        return "What is the Box Model? Every HTML element sits inside a rectangular box with inner padding, a border edge, and outer margin spacing.";
      }
      if (text.includes("flex") || text.includes("grid")) {
        return "What is a Layout Container? Turning a parent box into flex or grid lets you arrange child cards in neat rows and columns automatically.";
      }
      return "What is a CSS Declaration? A property: value; pair inside curly braces that controls one visual rule like color or size.";
    }
    if (courseKey === "python") {
      if (text.includes("def ") || text.includes("return")) {
        return "What is a Function? A named, reusable block of code created with def that takes inputs, runs steps, and sends back an answer with return.";
      }
      if (text.includes("for ") || text.includes("while ")) {
        return "What is a Loop? A structure that repeats an indented block of code automatically until a list finishes or a condition turns False.";
      }
      if (text.includes("[") || text.includes("{")) {
        return "What is a Data Collection? Lists [ ] store ordered items by index number (starting at 0), while Dictionaries { } store labeled key: value pairs.";
      }
      return "What is a Variable? A named container in memory created with = that holds text (strings in quotes) or numbers for later use.";
    }
    if (courseKey === "c") {
      if (text.includes("*") || text.includes("&")) {
        return "What is a Pointer? A variable that stores the RAM memory address (&) of another variable instead of a normal value.";
      }
      if (text.includes("struct")) {
        return "What is a Struct? A custom C record that bundles multiple related variables (like an ID and count) under one name.";
      }
      if (text.includes("%d") || text.includes("%f") || text.includes("scanf")) {
        return "What is a Format Specifier? A placeholder like %d (integer) or %f (float) that tells printf or scanf what type of data to read or display.";
      }
      return "What is a C Data Type? C requires declaring the exact type (int, float, char) before every variable and ending statements with a semicolon (;).";
    }
    return "";
  }

  function renderExampleOutput(courseKey, codeStr) {
    const outBox = document.getElementById("output-box");
    const outRender = document.getElementById("output-render");
    outRender.className = "output-render";
    outRender.innerHTML = "";

    if (courseKey === "conversions") {
      outBox.classList.add("hidden");
      return;
    }

    if (courseKey === "html") {
      if (/<img/i.test(codeStr)) {
        outBox.classList.add("hidden");
        return;
      }
      outRender.innerHTML = codeStr;
      outRender.querySelectorAll("a").forEach(a => a.removeAttribute("href"));
      outBox.classList.remove("hidden");
      return;
    }

    if (courseKey === "css") {
      const styleMatch = codeStr.match(/\{([^}]+)\}/);
      if (!styleMatch || /display\s*:\s*none/i.test(codeStr) || /position\s*:\s*fixed/i.test(codeStr)) {
        outBox.classList.add("hidden");
        return;
      }
      const t = CATEGORIES[state.category] || CATEGORIES.sports;
      const sample = document.createElement("div");
      sample.style.cssText = styleMatch[1];
      if (/flex|grid/i.test(styleMatch[1])) {
        sample.innerHTML = `<span style="background:#E2E8F0;padding:3px 8px;border-radius:6px;">${t.word}</span><span style="background:#E2E8F0;padding:3px 8px;border-radius:6px;">${t.item}</span>`;
      } else {
        sample.textContent = `${t.word} Preview`;
      }
      outRender.appendChild(sample);
      outBox.classList.remove("hidden");
      return;
    }

    if (courseKey === "python") {
      const t = CATEGORIES[state.category] || CATEGORIES.sports;
      if (/print\s*\(\s*["']([^"']+)["']\s*\)/.test(codeStr)) {
        const m = codeStr.match(/print\s*\(\s*["']([^"']+)["']\s*\)/);
        outRender.classList.add("console-out");
        outRender.textContent = m[1];
        outBox.classList.remove("hidden");
        return;
      }
      if (/print\s*\(\s*len\s*\(\s*["']([^"']+)["']\s*\)\s*\)/.test(codeStr)) {
        const m = codeStr.match(/print\s*\(\s*len\s*\(\s*["']([^"']+)["']\s*\)\s*\)/);
        outRender.classList.add("console-out");
        outRender.textContent = String(m[1].length);
        outBox.classList.remove("hidden");
        return;
      }
      if (/\.upper\(\)/.test(codeStr)) {
        outRender.classList.add("console-out");
        outRender.textContent = t.word.toUpperCase();
        outBox.classList.remove("hidden");
        return;
      }
      if (/for\s+\w+\s+in\s+range\s*\(\s*3\s*\)/.test(codeStr)) {
        outRender.classList.add("console-out");
        outRender.textContent = "0\n1\n2";
        outRender.style.whiteSpace = "pre";
        outBox.classList.remove("hidden");
        return;
      }
      outBox.classList.add("hidden");
      return;
    }

    if (courseKey === "c") {
      const t = CATEGORIES[state.category] || CATEGORIES.sports;
      const printfStr = codeStr.match(/printf\s*\(\s*"([^"%\\]+)(?:\\n)?"\s*\)/);
      if (printfStr) {
        outRender.classList.add("console-out");
        outRender.textContent = printfStr[1];
        outBox.classList.remove("hidden");
        return;
      }
      if (/printf\s*\(\s*"%d"/.test(codeStr)) {
        outRender.classList.add("console-out");
        outRender.textContent = String(t.num);
        outBox.classList.remove("hidden");
        return;
      }
      if (/printf\s*\(\s*"%f"/.test(codeStr)) {
        outRender.classList.add("console-out");
        outRender.textContent = "4.500000";
        outBox.classList.remove("hidden");
        return;
      }
      outBox.classList.add("hidden");
    }
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
    document.getElementById("roadmap-title").textContent = `${course.title} Path`;
    document.getElementById("roadmap-desc").textContent = course.desc;

    const list = document.getElementById("module-list");
    list.innerHTML = "";

    course.modules.forEach((mod, mIdx) => {
      const solvedInMod = mod.tasks.filter((_, tIdx) =>
        state.solvedIds.includes(`${courseKey}_${mIdx}_${tIdx}`)
      ).length;

      // For Number Conversions, all 3 conversion parts are unlocked immediately so user can pick whichever conversion they need!
      const isAccessible = course.noTheme || mIdx === 0 || course.modules[mIdx - 1].tasks.every((_, tIdx) =>
        state.solvedIds.includes(`${courseKey}_${mIdx - 1}_${tIdx}`)
      );

      const badgeLabel = !isAccessible
        ? "🔒 Locked"
        : solvedInMod === mod.tasks.length
          ? "✅ Review"
          : solvedInMod > 0
            ? "Continue ▶"
            : "Start ▶";

      const item = document.createElement("button");
      item.type = "button";
      item.className = `module-item ${!isAccessible ? "locked" : ""}`;
      item.innerHTML = `
        <div class="module-info">
          <h4>${mIdx + 1}. ${mod.title}</h4>
          <p>${solvedInMod}/${mod.tasks.length} tasks completed</p>
        </div>
        <span class="module-badge">${badgeLabel}</span>
      `;

      if (isAccessible) {
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

  // Renders clickable pills at top of lesson so any solved/unlocked task can be reviewed anytime
  function renderTaskJumper(mod) {
    const jumper = document.getElementById("task-jumper");
    if (!jumper) return;
    jumper.innerHTML = "";

    mod.tasks.forEach((_, idx) => {
      const isSolved = state.solvedIds.includes(`${activeCourseKey}_${activeModuleIdx}_${idx}`);
      const prevSolved = idx === 0 || state.solvedIds.includes(`${activeCourseKey}_${activeModuleIdx}_${idx - 1}`);
      const canOpen = isSolved || prevSolved;

      const pill = document.createElement("button");
      pill.type = "button";
      pill.className = `jump-pill ${idx === activeTaskIdx ? "current" : isSolved ? "solved" : !canOpen ? "locked" : ""}`;
      pill.textContent = isSolved ? `✓ ${idx + 1}` : `${idx + 1}`;

      if (canOpen) {
        pill.addEventListener("click", () => startTask(activeModuleIdx, idx));
      }
      jumper.appendChild(pill);
    });
  }

  function startTask(mIdx, tIdx) {
    activeModuleIdx = mIdx;
    activeTaskIdx = tIdx;

    const course = ALL_COURSES[activeCourseKey];
    const mod = course.modules[mIdx];
    const item = mod.tasks[tIdx];
    const themedExample = themeText(item.example);

    renderTaskJumper(mod);

    document.getElementById("step-counter").textContent = `${tIdx + 1}/${mod.tasks.length}`;
    document.getElementById("progress-fill").style.width = `${((tIdx + 1) / mod.tasks.length) * 100}%`;

    document.getElementById("explain-tag").textContent = `${course.title} • Part ${mIdx + 1} (${tIdx + 1}/${mod.tasks.length})`;
    document.getElementById("explain-title").textContent = themeText(item.title);

    // Plain-English concept definition callout
    const conceptNote = getConceptDefinition(activeCourseKey, item);
    const calloutEl = document.getElementById("concept-callout");
    if (conceptNote) {
      calloutEl.textContent = "📘 " + conceptNote;
      calloutEl.classList.remove("hidden");
    } else {
      calloutEl.classList.add("hidden");
    }

    document.getElementById("explain-body").textContent = themeText(item.explain);
    document.getElementById("explain-analogy").textContent = "💡 " + themeText(item.analogy);
    document.getElementById("explain-code").textContent = themedExample;

    renderExampleOutput(activeCourseKey, themedExample);

    document.getElementById("task-tag").textContent = `CHALLENGE ${tIdx + 1} OF ${mod.tasks.length}`;
    document.getElementById("task-title").textContent = themeText(item.title);
    document.getElementById("task-prompt").textContent = themeText(item.prompt);
    document.getElementById("task-clue").textContent = "Rule Clue: " + themeText(item.clue);
    document.getElementById("task-clue").classList.add("hidden");

    taskInput.value = "";
    document.getElementById("feedback-msg").textContent = "";

    document.getElementById("explain-slide").classList.remove("hidden");
    document.getElementById("task-slide").classList.add("hidden");
    switchTab("lesson-screen");
  }

  document.getElementById("start-task-btn").addEventListener("click", () => {
    document.getElementById("explain-slide").classList.add("hidden");
    const taskSlide = document.getElementById("task-slide");
    taskSlide.classList.remove("hidden");
    setTimeout(() => taskInput.focus(), 100);
  });

  document.getElementById("peek-concept-btn").addEventListener("click", () => {
    document.getElementById("task-slide").classList.add("hidden");
    document.getElementById("explain-slide").classList.remove("hidden");
  });

  document.getElementById("toggle-clue-btn").addEventListener("click", () => {
    document.getElementById("task-clue").classList.toggle("hidden");
  });

  // Clean Celebration Pop-up (No extra lines)
  function openCelebrateModal(isNewSolve) {
    const cat = CATEGORIES[state.category] || CATEGORIES.sports;
    document.getElementById("modal-emoji").textContent = cat.winEmoji;
    document.getElementById("modal-pill").textContent = isNewSolve ? "+15 XP EARNED" : "COMPLETED";
    document.getElementById("modal-title").textContent = cat.winTitle;
    document.getElementById("celebrate-modal").classList.remove("hidden");
  }

  document.getElementById("modal-next-btn").addEventListener("click", () => {
    document.getElementById("celebrate-modal").classList.add("hidden");
    const mod = ALL_COURSES[activeCourseKey].modules[activeModuleIdx];
    if (activeTaskIdx + 1 < mod.tasks.length) {
      startTask(activeModuleIdx, activeTaskIdx + 1);
    } else {
      openRoadmap(activeCourseKey);
    }
  });

  document.getElementById("run-task-btn").addEventListener("click", () => {
    const course = ALL_COURSES[activeCourseKey];
    const item = course.modules[activeModuleIdx].tasks[activeTaskIdx];
    const fb = document.getElementById("feedback-msg");
    const expected = themeText(item.match);
    const regex = new RegExp(expected, "i");

    if (regex.test(taskInput.value.trim())) {
      const taskId = `${activeCourseKey}_${activeModuleIdx}_${activeTaskIdx}`;
      let isNewSolve = false;
      if (!state.solvedIds.includes(taskId)) {
        state.solvedIds.push(taskId);
        state.xp += 15;
        isNewSolve = true;
        saveState();
      }
      fb.textContent = "";
      openCelebrateModal(isNewSolve);
    } else {
      fb.style.color = "#DC2626";
      fb.textContent = "❌ Not quite right, check your answer and try again.";
      taskInput.classList.remove("shake-error");
      void taskInput.offsetWidth;
      taskInput.classList.add("shake-error");
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
      box.innerHTML = `<strong>${done}/${total}</strong><span>${c.title}</span>`;
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
