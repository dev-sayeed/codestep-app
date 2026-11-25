let state = JSON.parse(localStorage.getItem("codestep_v3")) || {
  xp: 0,
  category: null,
  unlockedModules: { html: 0, css: 0, python: 0, c: 0 }
};

let currentCourseKey = null;
let currentModuleIdx = 0;
let stepIndex = 0;
let stepSolved = false;

const categoryScreen = document.getElementById("category-screen");
const homeScreen = document.getElementById("home-screen");
const roadmapScreen = document.getElementById("roadmap-screen");
const lessonScreen = document.getElementById("lesson-screen");
const completeScreen = document.getElementById("complete-screen");
const taskInput = document.getElementById("task-input");
const taskHint = document.getElementById("task-hint");

// Block Copy, Cut, Paste, and Context Menu
["copy", "cut", "paste", "contextmenu"].forEach(evt => {
  document.getElementById("code-box").addEventListener(evt, e => e.preventDefault());
  taskInput.addEventListener(evt, e => {
    e.preventDefault();
    const feedback = document.getElementById("feedback-msg");
    feedback.style.color = "#B45309";
    feedback.textContent = "⚠️ Copy/paste is disabled—type it out to build real memory!";
  });
});

function saveState() {
  localStorage.setItem("codestep_v3", JSON.stringify(state));
  document.getElementById("xp-display").textContent = `⭐ ${state.xp} XP`;
}

function applyCategoryTheme(catKey) {
  state.category = catKey;
  document.body.setAttribute("data-theme", catKey);
  document.getElementById("active-theme-label").textContent = CATEGORIES[catKey].label;
  saveState();
}

function showScreen(screenEl) {
  [categoryScreen, homeScreen, roadmapScreen, lessonScreen, completeScreen].forEach(s =>
    s.classList.remove("active")
  );
  screenEl.classList.add("active");
}

document.querySelectorAll(".cat-card").forEach(btn => {
  btn.onclick = () => {
    applyCategoryTheme(btn.dataset.cat);
    renderHome();
  };
});

document.getElementById("change-theme-btn").onclick = () => showScreen(categoryScreen);

function renderHome() {
  saveState();
  const grid = document.getElementById("course-grid");
  grid.innerHTML = "";

  Object.keys(COURSES).forEach(key => {
    const course = COURSES[key];
    const totalMods = course.modules.length;
    const completedMods = Math.min(state.unlockedModules[key] || 0, totalMods);

    const card = document.createElement("button");
    card.className = "course-card";
    card.innerHTML = `
      <div class="course-icon" style="background:${course.bg}; color:${course.color};">${course.badge}</div>
      <h3>${course.title}</h3>
      <p>${course.desc}</p>
      <div class="course-status">${completedMods}/${totalMods} Modules Unlocked</div>
    `;
    card.onclick = () => openRoadmap(key);
    grid.appendChild(card);
  });

  showScreen(homeScreen);
}

function openRoadmap(courseKey) {
  currentCourseKey = courseKey;
  const course = COURSES[courseKey];
  const unlockedIdx = state.unlockedModules[courseKey] || 0;

  document.getElementById("roadmap-title").textContent = `${course.title} Full Curriculum`;
  document.getElementById("roadmap-desc").textContent = course.desc;

  const list = document.getElementById("module-list");
  list.innerHTML = "";

  course.modules.forEach((mod, idx) => {
    const isLocked = idx > unlockedIdx;
    const isDone = idx < unlockedIdx;

    const item = document.createElement("button");
    item.className = `module-item ${isLocked ? "locked" : ""}`;
    item.innerHTML = `
      <div class="module-info">
        <h4>${mod.title}</h4>
        <p>${mod.summary}</p>
      </div>
      <span class="module-badge">${isLocked ? "🔒 Locked" : isDone ? "✅ Done" : "Start ▶"}</span>
    `;

    if (!isLocked) {
      item.onclick = () => startModule(idx);
    }
    list.appendChild(item);
  });

  showScreen(roadmapScreen);
}

function startModule(modIdx) {
  currentModuleIdx = modIdx;
  stepIndex = 0;
  renderStep();
  showScreen(lessonScreen);
}

function renderStep() {
  stepSolved = false;
  const course = COURSES[currentCourseKey];
  const mod = course.modules[currentModuleIdx];
  const cat = state.category || "sports";
  const totalSteps = mod.lessons.length + 1;
  const isTaskStep = stepIndex === mod.lessons.length;

  document.getElementById("lesson-lang-tag").textContent = `${course.title} • M${currentModuleIdx + 1}`;
  document.getElementById("step-counter").textContent = `${stepIndex + 1}/${totalSteps}`;
  document.getElementById("progress-fill").style.width = `${(stepIndex / totalSteps) * 100}%`;

  const feedback = document.getElementById("feedback-msg");
  feedback.textContent = "";
  document.getElementById("next-btn").classList.add("hidden");

  const codeBox = document.getElementById("code-box");
  const quizArea = document.getElementById("quiz-area");
  const taskArea = document.getElementById("task-area");

  if (!isTaskStep) {
    const lesson = mod.lessons[stepIndex];
    document.getElementById("stage-badge").textContent = "CONCEPT";
    document.getElementById("lesson-title").textContent = lesson.title;
    document.getElementById("lesson-explanation").textContent = lesson.explanation;
    document.getElementById("lesson-analogy").textContent = "💡 " + lesson.analogy;

    codeBox.classList.remove("hidden");
    document.getElementById("lesson-code").textContent = lesson.examples[cat];

    quizArea.classList.remove("hidden");
    taskArea.classList.add("hidden");

    document.getElementById("quiz-question").textContent = lesson.question;
    const optionsContainer = document.getElementById("quiz-options");
    optionsContainer.innerHTML = "";

    lesson.options.forEach((opt, idx) => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.textContent = opt;
      btn.onclick = () => {
        if (stepSolved) return;
        if (idx === lesson.answer) {
          stepSolved = true;
          btn.classList.add("correct");
          feedback.style.color = "#15803D";
          feedback.textContent = "✅ Correct! +10 XP";
          state.xp += 10;
          saveState();
          document.getElementById("next-btn").classList.remove("hidden");
        } else {
          btn.classList.add("wrong");
          feedback.style.color = "#B91C1C";
          feedback.textContent = "❌ Not quite—re-read the explanation above!";
        }
      };
      optionsContainer.appendChild(btn);
    });
  } else {
    // Final Module Coding Challenge: Hide example code so learner builds from memory!
    const task = mod.tasks[cat];
    document.getElementById("stage-badge").textContent = `${cat.toUpperCase()} CHALLENGE`;
    document.getElementById("lesson-title").textContent = `${CATEGORIES[cat].emoji} Write It From Scratch`;
    document.getElementById("lesson-explanation").textContent = "No sample code shown here—apply the rules you learned in this module.";
    document.getElementById("lesson-analogy").textContent = "🧠 Recall the syntax rules carefully before running your code.";

    codeBox.classList.add("hidden");
    quizArea.classList.add("hidden");
    taskArea.classList.remove("hidden");

    taskInput.value = "";
    taskHint.textContent = "Rule Clue: " + task.clue;
    taskHint.classList.add("hidden");
    document.getElementById("task-prompt").textContent = task.prompt;

    document.getElementById("toggle-clue-btn").onclick = () => {
      taskHint.classList.toggle("hidden");
    };

    document.getElementById("run-task-btn").onclick = () => {
      if (stepSolved) return;
      const userCode = taskInput.value.trim();
      if (task.validate(userCode)) {
        stepSolved = true;
        feedback.style.color = "#15803D";
        feedback.textContent = "🎉 Spot on! Module unlocked +30 XP";
        state.xp += 30;
        saveState();
        document.getElementById("next-btn").classList.remove("hidden");
      } else {
        feedback.style.color = "#B91C1C";
        feedback.textContent = "❌ Syntax or logic mismatch—check brackets, quotes, or semicolons.";
      }
    };
  }
}

document.getElementById("next-btn").onclick = () => {
  const course = COURSES[currentCourseKey];
  const mod = course.modules[currentModuleIdx];
  const totalSteps = mod.lessons.length + 1;

  if (stepIndex + 1 < totalSteps) {
    stepIndex++;
    renderStep();
  } else {
    if ((state.unlockedModules[currentCourseKey] || 0) <= currentModuleIdx) {
      state.unlockedModules[currentCourseKey] = currentModuleIdx + 1;
    }
    saveState();
    document.getElementById("progress-fill").style.width = "100%";
    const cat = state.category || "sports";
    document.getElementById("complete-emoji").textContent = CATEGORIES[cat].emoji;
    document.getElementById("complete-title").textContent = `${mod.title} Cleared!`;
    document.getElementById("complete-summary").textContent =
      `You solved the ${cat} challenge from scratch. Total XP: ${state.xp}`;
    showScreen(completeScreen);
  }
};

document.getElementById("roadmap-back-btn").onclick = renderHome;
document.getElementById("back-btn").onclick = () => openRoadmap(currentCourseKey);
document.getElementById("home-return-btn").onclick = () => openRoadmap(currentCourseKey);

// Boot
saveState();
if (state.category && CATEGORIES[state.category]) {
  applyCategoryTheme(state.category);
  renderHome();
} else {
  showScreen(categoryScreen);
}