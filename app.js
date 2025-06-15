// Application Data
const scheduleData = {
  dailySchedule: [
    {"time": "05:30-06:00", "activity": "Morning Routine & Hydration", "category": "Health & Wellness", "color": "#87CEEB", "completed": false},
    {"time": "06:00-06:30", "activity": "Morning Workout (HIIT/Cardio)", "category": "Fitness", "color": "#FF6B6B", "completed": false},
    {"time": "06:30-07:00", "activity": "Post-Workout Stretch & Shower", "category": "Health & Wellness", "color": "#87CEEB", "completed": false},
    {"time": "07:00-07:30", "activity": "Healthy Breakfast", "category": "Nutrition", "color": "#FFA500", "completed": false},
    {"time": "07:30-08:00", "activity": "Personal Development Reading", "category": "Learning", "color": "#9370DB", "completed": false},
    {"time": "08:00-08:30", "activity": "Daily Planning & Goal Setting", "category": "Productivity", "color": "#20B2AA", "completed": false},
    {"time": "08:30-09:00", "activity": "Deep Work Block 1 (Engineering)", "category": "Engineering Work", "color": "#4682B4", "completed": false},
    {"time": "09:00-09:30", "activity": "Deep Work Block 1 (Engineering)", "category": "Engineering Work", "color": "#4682B4", "completed": false},
    {"time": "09:30-10:00", "activity": "Deep Work Block 1 (Engineering)", "category": "Engineering Work", "color": "#4682B4", "completed": false},
    {"time": "10:00-10:30", "activity": "Coffee Break & Light Movement", "category": "Break", "color": "#D3D3D3", "completed": false},
    {"time": "10:30-11:00", "activity": "Business Operations (CEO Tasks)", "category": "Business Management", "color": "#32CD32", "completed": false},
    {"time": "11:00-11:30", "activity": "Business Operations (CEO Tasks)", "category": "Business Management", "color": "#32CD32", "completed": false},
    {"time": "11:30-12:00", "activity": "Mid-Morning Healthy Snack", "category": "Nutrition", "color": "#FFA500", "completed": false},
    {"time": "12:00-12:30", "activity": "Team Communications & Meetings", "category": "Communication", "color": "#FFD700", "completed": false},
    {"time": "12:30-13:00", "activity": "Team Communications & Meetings", "category": "Communication", "color": "#FFD700", "completed": false},
    {"time": "13:00-13:30", "activity": "Healthy Lunch", "category": "Nutrition", "color": "#FFA500", "completed": false},
    {"time": "13:30-14:00", "activity": "Mindful Break/Walk", "category": "Health & Wellness", "color": "#87CEEB", "completed": false},
    {"time": "14:00-14:30", "activity": "Deep Work Block 2 (Engineering)", "category": "Engineering Work", "color": "#4682B4", "completed": false},
    {"time": "14:30-15:00", "activity": "Deep Work Block 2 (Engineering)", "category": "Engineering Work", "color": "#4682B4", "completed": false},
    {"time": "15:00-15:30", "activity": "Learning Time (New Skills)", "category": "Learning", "color": "#9370DB", "completed": false},
    {"time": "15:30-16:00", "activity": "Learning Time (New Skills)", "category": "Learning", "color": "#9370DB", "completed": false},
    {"time": "16:00-16:30", "activity": "Coffee Break & Networking", "category": "Break", "color": "#D3D3D3", "completed": false},
    {"time": "16:30-17:00", "activity": "Business Strategy & Planning", "category": "Business Management", "color": "#32CD32", "completed": false},
    {"time": "17:00-17:30", "activity": "Business Strategy & Planning", "category": "Business Management", "color": "#32CD32", "completed": false},
    {"time": "17:30-18:00", "activity": "Wrap-up & Tomorrow's Planning", "category": "Productivity", "color": "#20B2AA", "completed": false},
    {"time": "18:00-18:30", "activity": "Evening Workout (Strength/Yoga)", "category": "Fitness", "color": "#FF6B6B", "completed": false},
    {"time": "18:30-19:00", "activity": "Post-Workout Recovery", "category": "Health & Wellness", "color": "#87CEEB", "completed": false},
    {"time": "19:00-19:30", "activity": "Dinner", "category": "Nutrition", "color": "#FFA500", "completed": false},
    {"time": "19:30-20:00", "activity": "Personal Projects/Side Learning", "category": "Learning", "color": "#9370DB", "completed": false},
    {"time": "20:00-20:30", "activity": "Personal Projects/Side Learning", "category": "Learning", "color": "#9370DB", "completed": false},
    {"time": "20:30-21:00", "activity": "Relaxation & Family Time", "category": "Personal Time", "color": "#FFB6C1", "completed": false},
    {"time": "21:00-21:30", "activity": "Evening Reading", "category": "Learning", "color": "#9370DB", "completed": false},
    {"time": "21:30-22:00", "activity": "Wind Down Routine", "category": "Health & Wellness", "color": "#87CEEB", "completed": false},
    {"time": "22:00-22:30", "activity": "Sleep Preparation", "category": "Health & Wellness", "color": "#87CEEB", "completed": false}
  ],
  weeklyGoals: [
    {"category": "Engineering Work", "target": 12.5, "current": 0},
    {"category": "Business Management", "target": 10, "current": 0},
    {"category": "Learning", "target": 21, "current": 0},
    {"category": "Fitness", "target": 7, "current": 0},
    {"category": "Health & Wellness", "target": 21, "current": 0}
  ],
  tips: [
    "Start your day with hydration - drink a glass of water upon waking",
    "Use the Pomodoro Technique during deep work blocks for better focus",
    "Schedule your most challenging tasks during your peak energy hours",
    "Take regular breaks to prevent burnout and maintain productivity",
    "Prepare healthy snacks in advance to avoid unhealthy choices",
    "Use time-blocking to batch similar activities together",
    "Review and adjust your schedule weekly based on what works best",
    "Stay consistent with your sleep schedule to maintain energy levels"
  ]
};

// Data persistence functions
function saveToLocalStorage() {
  localStorage.setItem('dailySchedule', JSON.stringify(currentSchedule));
  localStorage.setItem('weeklyGoals', JSON.stringify(scheduleData.weeklyGoals));
}

function loadFromLocalStorage() {
  const savedSchedule = localStorage.getItem('dailySchedule');
  const savedGoals = localStorage.getItem('weeklyGoals');
  
  if (savedSchedule) {
    currentSchedule = JSON.parse(savedSchedule);
  }
  
  if (savedGoals) {
    scheduleData.weeklyGoals = JSON.parse(savedGoals);
  }
}

// State management
let currentEditingIndex = -1;
let currentSchedule = [...scheduleData.dailySchedule];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  loadFromLocalStorage(); // Load saved data
  initializeApp();
});

function initializeApp() {
  setupEventListeners();
  displayCurrentDate();
  renderTimeline();
  updateProgress();
  renderGoals();
  renderTips();
  renderCategoryBreakdown();
}

function setupEventListeners() {
  // Tab switching
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      switchTab(this.dataset.tab);
    });
  });

  // Schedule template selector
  document.getElementById('scheduleTemplate').addEventListener('change', function() {
    // For demo purposes, we'll keep the same schedule
    // In a real app, this would load different schedule templates
    console.log('Template changed to:', this.value);
  });

  // Modal event listeners
  document.getElementById('closeModal').addEventListener('click', closeModal);
  document.getElementById('cancelEdit').addEventListener('click', closeModal);
  document.getElementById('saveEdit').addEventListener('click', saveEdit);

  // Close modal when clicking outside
  document.getElementById('editModal').addEventListener('click', function(e) {
    if (e.target === this) {
      closeModal();
    }
  });
}

function displayCurrentDate() {
  const now = new Date();
  const options = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  document.getElementById('currentDate').textContent = now.toLocaleDateString('en-US', options);
}

function switchTab(tabName) {
  // Remove active class from all tabs and content
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

  // Add active class to selected tab and content
  document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
  document.getElementById(tabName).classList.add('active');
}

function renderTimeline() {
  const timeline = document.getElementById('timeline');
  timeline.innerHTML = '';

  currentSchedule.forEach((item, index) => {
    const timelineItem = document.createElement('div');
    timelineItem.className = `timeline-item ${item.completed ? 'completed' : ''}`;
    
    timelineItem.innerHTML = `
      <div class="time-slot">${item.time}</div>
      <div class="activity-info">
        <div class="category-indicator" style="background-color: ${item.color}"></div>
        <span class="activity-text">${item.activity}</span>
      </div>
      <div class="activity-category">${item.category}</div>
      <input type="checkbox" class="task-checkbox" ${item.completed ? 'checked' : ''} data-index="${index}">
    `;

    // Add click event for editing (except on checkbox)
    timelineItem.addEventListener('click', function(e) {
      if (e.target.type !== 'checkbox') {
        openEditModal(index);
      }
    });

    // Add checkbox event
    const checkbox = timelineItem.querySelector('.task-checkbox');
    checkbox.addEventListener('click', function(e) {
      e.stopPropagation();
      toggleTaskCompletion(index);
    });

    timeline.appendChild(timelineItem);
  });
}

function toggleTaskCompletion(index) {
  currentSchedule[index].completed = !currentSchedule[index].completed;
  renderTimeline();
  updateProgress();
  updateGoalsProgress();
  saveToLocalStorage(); // Save changes
}

function updateProgress() {
  const completedTasks = currentSchedule.filter(item => item.completed).length;
  const totalTasks = currentSchedule.length;
  const progressPercentage = Math.round((completedTasks / totalTasks) * 100);
  const hoursRemaining = totalTasks - completedTasks;

  document.getElementById('dailyProgress').style.width = `${progressPercentage}%`;
  document.getElementById('progressText').textContent = `${progressPercentage}% Complete`;
  document.getElementById('completedTasks').textContent = completedTasks;
  document.getElementById('hoursRemaining').textContent = (hoursRemaining * 0.5).toFixed(1);
}

function openEditModal(index) {
  currentEditingIndex = index;
  const item = currentSchedule[index];
  
  document.getElementById('editTime').value = item.time;
  document.getElementById('editActivity').value = item.activity;
  document.getElementById('editCategory').value = item.category;
  document.getElementById('editNotes').value = item.notes || '';
  
  document.getElementById('editModal').classList.add('active');
}

function closeModal() {
  document.getElementById('editModal').classList.remove('active');
  currentEditingIndex = -1;
}

function saveEdit() {
  if (currentEditingIndex >= 0) {
    const item = currentSchedule[currentEditingIndex];
    item.activity = document.getElementById('editActivity').value;
    item.category = document.getElementById('editCategory').value;
    item.notes = document.getElementById('editNotes').value;
    
    // Update color based on category
    item.color = getCategoryColor(item.category);
    
    renderTimeline();
    renderCategoryBreakdown();
    saveToLocalStorage(); // Save changes
    closeModal();
  }
}

function getCategoryColor(category) {
  const colorMap = {
    'Engineering Work': '#4682B4',
    'Business Management': '#32CD32',
    'Learning': '#9370DB',
    'Fitness': '#FF6B6B',
    'Health & Wellness': '#87CEEB',
    'Nutrition': '#FFA500',
    'Communication': '#FFD700',
    'Personal Time': '#FFB6C1',
    'Break': '#D3D3D3',
    'Productivity': '#20B2AA'
  };
  return colorMap[category] || '#D3D3D3';
}

function renderGoals() {
  const goalsGrid = document.getElementById('goalsGrid');
  goalsGrid.innerHTML = '';

  scheduleData.weeklyGoals.forEach(goal => {
    const progressPercentage = Math.round((goal.current / goal.target) * 100);
    
    const goalCard = document.createElement('div');
    goalCard.className = 'goal-card';
    goalCard.innerHTML = `
      <div class="goal-header">
        <div class="goal-category">${goal.category}</div>
        <div class="goal-percentage">${progressPercentage}%</div>
      </div>
      <div class="goal-progress">
        <div class="goal-progress-fill" style="width: ${progressPercentage}%; background-color: ${getCategoryColor(goal.category)};"></div>
      </div>
      <div class="goal-stats">
        <span>${goal.current} hours completed</span>
        <span>${goal.target} hours target</span>
      </div>
    `;
    
    goalsGrid.appendChild(goalCard);
  });
}

function updateGoalsProgress() {
  // Calculate current progress based on completed tasks
  const categoryHours = {};
  
  currentSchedule.forEach(item => {
    if (item.completed) {
      categoryHours[item.category] = (categoryHours[item.category] || 0) + 0.5;
    }
  });

  // Update goals with current progress (simplified for demo)
  scheduleData.weeklyGoals.forEach(goal => {
    goal.current = categoryHours[goal.category] || 0;
  });

  renderGoals();
}

function renderTips() {
  const tipsList = document.getElementById('tipsList');
  tipsList.innerHTML = '';

  scheduleData.tips.forEach(tip => {
    const tipItem = document.createElement('div');
    tipItem.className = 'tip-item';
    tipItem.textContent = tip;
    tipsList.appendChild(tipItem);
  });
}

function renderCategoryBreakdown() {
  const categoryList = document.getElementById('categoryBreakdown');
  categoryList.innerHTML = '';

  // Calculate time allocation per category
  const categoryTime = {};
  currentSchedule.forEach(item => {
    categoryTime[item.category] = (categoryTime[item.category] || 0) + 0.5;
  });

  // Sort categories by time allocation
  const sortedCategories = Object.entries(categoryTime)
    .sort(([,a], [,b]) => b - a);

  sortedCategories.forEach(([category, hours]) => {
    const categoryItem = document.createElement('div');
    categoryItem.className = 'category-item';
    categoryItem.innerHTML = `
      <div class="category-name">
        <div class="category-indicator" style="background-color: ${getCategoryColor(category)}"></div>
        ${category}
      </div>
      <div class="category-time">${hours}h</div>
    `;
    categoryList.appendChild(categoryItem);
  });
}

// Utility function to format time
function formatTime(timeString) {
  const [start, end] = timeString.split('-');
  return `${start} - ${end}`;
}

// Auto-update progress every minute (for demo purposes)
setInterval(() => {
  const now = new Date();
  const currentTime = now.getHours() * 60 + now.getMinutes();
  
  // Auto-mark past activities as completed (simplified logic)
  currentSchedule.forEach((item, index) => {
    const [startTime] = item.time.split('-');
    const [hours, minutes] = startTime.split(':').map(Number);
    const itemTime = hours * 60 + minutes;
    
    if (currentTime > itemTime + 30 && !item.completed) {
      // Optionally auto-complete past items
      // item.completed = true;
    }
  });
  
  updateProgress();
}, 60000);

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
  // ESC to close modal
  if (e.key === 'Escape') {
    closeModal();
  }
  
  // Ctrl/Cmd + S to save edit
  if ((e.ctrlKey || e.metaKey) && e.key === 's' && currentEditingIndex >= 0) {
    e.preventDefault();
    saveEdit();
  }
});