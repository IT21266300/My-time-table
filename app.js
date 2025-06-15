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
  
  // Update total tasks display
  document.getElementById('totalTasks').textContent = currentSchedule.length;
  
  // Initialize charts after a short delay to ensure DOM is ready
  setTimeout(() => {
    updatePieChart();
    updateWeeklyChart();
  }, 500);
  
  // Start notification checker
  setInterval(checkUpcomingTasks, 60000); // Check every minute
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
    loadScheduleTemplate(this.value);
  });

  // Add new activity button
  const addActivityBtn = document.getElementById('addActivity');
  if (addActivityBtn) {
    addActivityBtn.addEventListener('click', openAddModal);
  }
  
  // Export/Import functionality
  const exportBtn = document.getElementById('exportSchedule');
  const importBtn = document.getElementById('importSchedule');
  const importFile = document.getElementById('importFile');
  
  if (exportBtn) exportBtn.addEventListener('click', exportSchedule);
  if (importBtn) importBtn.addEventListener('click', () => importFile.click());
  if (importFile) importFile.addEventListener('change', importSchedule);

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
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
    btn.classList.remove('text-blue-600', 'border-blue-500');
    btn.classList.add('text-slate-500', 'border-transparent');
  });
  document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

  // Add active class to selected tab and content
  const activeTab = document.querySelector(`[data-tab="${tabName}"]`);
  activeTab.classList.add('active');
  activeTab.classList.remove('text-slate-500', 'border-transparent');
  activeTab.classList.add('text-blue-600', 'border-blue-500');
  document.getElementById(tabName).classList.add('active');

  // Initialize charts when switching to relevant tabs
  setTimeout(() => {
    if (tabName === 'weekly') {
      updateWeeklyChart();
    } else if (tabName === 'stats') {
      updatePieChart();
    }
  }, 100); // Small delay to ensure DOM is ready
}

function renderTimeline() {
  const timeline = document.getElementById('timeline');
  timeline.innerHTML = '';

  currentSchedule.forEach((item, index) => {
    const timelineItem = document.createElement('div');
    timelineItem.className = `flex flex-col sm:flex-row items-start sm:items-center p-3 sm:p-4 rounded-xl border transition-all duration-200 cursor-pointer hover:shadow-md ${
      item.completed 
        ? 'bg-green-50 border-green-200 shadow-sm' 
        : 'bg-white border-slate-200 hover:border-slate-300'
    }`;
    
    const categoryColors = {
      'Engineering Work': 'bg-blue-500',
      'Business Management': 'bg-green-500', 
      'Learning': 'bg-purple-500',
      'Fitness': 'bg-red-500',
      'Health & Wellness': 'bg-cyan-500',
      'Nutrition': 'bg-orange-500',
      'Communication': 'bg-yellow-500',
      'Personal Time': 'bg-pink-500',
      'Break': 'bg-gray-400',
      'Productivity': 'bg-teal-500'
    };

    timelineItem.innerHTML = `
      <div class="flex items-center space-x-3 sm:space-x-4 flex-1 w-full mb-2 sm:mb-0">
        <div class="flex flex-col items-center min-w-0 flex-shrink-0">
          <div class="text-xs sm:text-sm font-semibold text-slate-700">${item.time.split('-')[0]}</div>
          <div class="text-xs text-slate-500 hidden sm:block">${item.time.split('-')[1]}</div>
        </div>
        <div class="w-2 h-2 sm:w-3 sm:h-3 rounded-full ${categoryColors[item.category] || 'bg-gray-400'} flex-shrink-0"></div>
        <div class="flex-1 min-w-0">
          <div class="font-medium text-slate-900 text-sm sm:text-base truncate">${item.activity}</div>
          <div class="text-xs sm:text-sm text-slate-500">${item.category}</div>
        </div>
      </div>
      <div class="flex items-center space-x-3 w-full sm:w-auto justify-end">
        <input type="checkbox" class="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" ${item.completed ? 'checked' : ''} data-index="${index}">
        <button class="text-red-400 hover:text-red-600 p-1 rounded hover:bg-red-50 transition-colors" data-index="${index}" title="Delete activity">
          <svg class="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
          </svg>
        </button>
      </div>
    `;

    // Add click event for editing (except on checkbox and delete button)
    timelineItem.addEventListener('click', function(e) {
      if (e.target.type !== 'checkbox' && !e.target.closest('button')) {
        openEditModal(index);
      }
    });

    // Add checkbox event
    const checkbox = timelineItem.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('click', function(e) {
      e.stopPropagation();
      toggleTaskCompletion(index);
    });

    // Add delete button event
    const deleteBtn = timelineItem.querySelector('button[data-index]');
    deleteBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      deleteActivity(index);
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
  
  document.getElementById('editModal').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('editModal').classList.add('hidden');
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
    goalCard.className = 'bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg p-4 border border-slate-200';
    goalCard.innerHTML = `
      <div class="flex justify-between items-center mb-3">
        <div class="font-semibold text-slate-900">${goal.category}</div>
        <div class="text-lg font-bold text-blue-600">${progressPercentage}%</div>
      </div>
      <div class="w-full bg-slate-200 rounded-full h-2 mb-3">
        <div class="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500" style="width: ${progressPercentage}%;"></div>
      </div>
      <div class="flex justify-between text-sm text-slate-600">
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

  scheduleData.tips.forEach((tip, index) => {
    const tipItem = document.createElement('div');
    tipItem.className = 'flex items-start p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200';
    tipItem.innerHTML = `
      <div class="flex-shrink-0 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
        ${index + 1}
      </div>
      <div class="text-sm text-slate-700">${tip}</div>
    `;
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

  const categoryColors = {
    'Engineering Work': 'bg-blue-500',
    'Business Management': 'bg-green-500', 
    'Learning': 'bg-purple-500',
    'Fitness': 'bg-red-500',
    'Health & Wellness': 'bg-cyan-500',
    'Nutrition': 'bg-orange-500',
    'Communication': 'bg-yellow-500',
    'Personal Time': 'bg-pink-500',
    'Break': 'bg-gray-400',
    'Productivity': 'bg-teal-500'
  };

  sortedCategories.forEach(([category, hours]) => {
    const categoryItem = document.createElement('div');
    categoryItem.className = 'flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200';
    categoryItem.innerHTML = `
      <div class="flex items-center space-x-3">
        <div class="w-4 h-4 rounded-full ${categoryColors[category] || 'bg-gray-400'}"></div>
        <span class="font-medium text-slate-800">${category}</span>
      </div>
      <span class="font-semibold text-slate-600">${hours}h</span>
    `;
    categoryList.appendChild(categoryItem);
  });
  
  // Update charts
  updatePieChart();
  updateWeeklyChart();
}

// Add dynamic chart functionality
let pieChart = null;
let weeklyChart = null;

function updatePieChart() {
  const ctx = document.getElementById('pieChart');
  if (!ctx) return;
  
  // Calculate category data
  const categoryTime = {};
  currentSchedule.forEach(item => {
    categoryTime[item.category] = (categoryTime[item.category] || 0) + 0.5;
  });

  // Filter out categories with 0 time
  const filteredData = Object.entries(categoryTime)
    .filter(([, hours]) => hours > 0)
    .reduce((acc, [category, hours]) => {
      acc[category] = hours;
      return acc;
    }, {});

  const data = {
    labels: Object.keys(filteredData),
    datasets: [{
      data: Object.values(filteredData),
      backgroundColor: Object.keys(filteredData).map(cat => getCategoryColor(cat) + 'CC'), // Add some transparency
      borderColor: Object.keys(filteredData).map(cat => getCategoryColor(cat)),
      borderWidth: 2,
      hoverBorderWidth: 3,
      hoverBorderColor: '#fff'
    }]
  };

  if (pieChart) {
    pieChart.destroy();
  }

  pieChart = new Chart(ctx, {
    type: 'doughnut', // Changed to doughnut for modern look
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '50%', // Creates the doughnut hole
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            padding: 15,
            usePointStyle: true,
            font: {
              size: 12
            }
          }
        },
        title: {
          display: true,
          text: 'Daily Time Allocation',
          font: {
            size: 16,
            weight: 'bold'
          },
          padding: 20
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              const label = context.label || '';
              const value = context.parsed;
              const total = context.dataset.data.reduce((a, b) => a + b, 0);
              const percentage = ((value / total) * 100).toFixed(1);
              return `${label}: ${value}h (${percentage}%)`;
            }
          }
        }
      },
      layout: {
        padding: {
          top: 10,
          bottom: 10
        }
      }
    }
  });
}

function updateWeeklyChart() {
  const ctx = document.getElementById('weeklyChart');
  if (!ctx) return;

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const categories = ['Engineering Work', 'Business Management', 'Learning', 'Fitness', 'Health & Wellness'];
  
  // Calculate actual weekly data based on current schedule
  const weeklyData = {};
  categories.forEach(category => {
    weeklyData[category] = [];
    days.forEach(day => {
      // Calculate hours per category per day based on current schedule
      const hoursPerDay = currentSchedule
        .filter(item => item.category === category)
        .length * 0.5; // Each slot is 30 minutes
      
      // For demo purposes, we'll use the same data for each day
      // In a real app, you'd have different schedules for different days
      weeklyData[category].push(hoursPerDay);
    });
  });

  const datasets = categories.map(category => ({
    label: category,
    data: weeklyData[category],
    backgroundColor: getCategoryColor(category) + '80', // Add transparency
    borderColor: getCategoryColor(category),
    borderWidth: 1
  }));

  if (weeklyChart) {
    weeklyChart.destroy();
  }

  weeklyChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: days,
      datasets: datasets
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          stacked: true,
          grid: {
            display: false
          }
        },
        y: {
          stacked: true,
          beginAtZero: true,
          title: {
            display: true,
            text: 'Hours'
          },
          ticks: {
            stepSize: 2
          }
        }
      },
      plugins: {
        title: {
          display: true,
          text: 'Weekly Schedule Distribution',
          font: {
            size: 16,
            weight: 'bold'
          },
          padding: 20
        },
        legend: {
          position: 'bottom',
          labels: {
            padding: 15,
            usePointStyle: true,
            font: {
              size: 12
            }
          }
        }
      },
      layout: {
        padding: {
          top: 10,
          bottom: 10
        }
      }
    }
  });
}

// Schedule Templates
const scheduleTemplates = {
  weekday: [...scheduleData.dailySchedule], // Current schedule
  weekend: [
    {"time": "07:00-07:30", "activity": "Sleep In & Morning Routine", "category": "Health & Wellness", "color": "#87CEEB", "completed": false},
    {"time": "07:30-08:30", "activity": "Leisurely Breakfast", "category": "Nutrition", "color": "#FFA500", "completed": false},
    {"time": "08:30-10:00", "activity": "Personal Projects", "category": "Learning", "color": "#9370DB", "completed": false},
    {"time": "10:00-11:00", "activity": "Outdoor Activity/Walk", "category": "Fitness", "color": "#FF6B6B", "completed": false},
    {"time": "11:00-12:00", "activity": "Household Chores", "category": "Personal Time", "color": "#FFB6C1", "completed": false},
    {"time": "12:00-13:00", "activity": "Lunch & Rest", "category": "Nutrition", "color": "#FFA500", "completed": false},
    {"time": "13:00-15:00", "activity": "Hobby Time", "category": "Personal Time", "color": "#FFB6C1", "completed": false},
    {"time": "15:00-16:00", "activity": "Social Time/Family", "category": "Personal Time", "color": "#FFB6C1", "completed": false},
    {"time": "16:00-17:00", "activity": "Light Learning", "category": "Learning", "color": "#9370DB", "completed": false},
    {"time": "17:00-18:00", "activity": "Workout", "category": "Fitness", "color": "#FF6B6B", "completed": false},
    {"time": "18:00-19:00", "activity": "Dinner Prep & Eating", "category": "Nutrition", "color": "#FFA500", "completed": false},
    {"time": "19:00-21:00", "activity": "Entertainment/Relaxation", "category": "Personal Time", "color": "#FFB6C1", "completed": false},
    {"time": "21:00-22:00", "activity": "Wind Down", "category": "Health & Wellness", "color": "#87CEEB", "completed": false}
  ],
  intensive: [
    {"time": "05:00-05:30", "activity": "Early Morning Routine", "category": "Health & Wellness", "color": "#87CEEB", "completed": false},
    {"time": "05:30-06:00", "activity": "Quick Workout", "category": "Fitness", "color": "#FF6B6B", "completed": false},
    {"time": "06:00-06:30", "activity": "Power Breakfast", "category": "Nutrition", "color": "#FFA500", "completed": false},
    {"time": "06:30-09:00", "activity": "Deep Work Block 1", "category": "Engineering Work", "color": "#4682B4", "completed": false},
    {"time": "09:00-09:15", "activity": "Break", "category": "Break", "color": "#D3D3D3", "completed": false},
    {"time": "09:15-12:00", "activity": "Deep Work Block 2", "category": "Engineering Work", "color": "#4682B4", "completed": false},
    {"time": "12:00-12:30", "activity": "Quick Lunch", "category": "Nutrition", "color": "#FFA500", "completed": false},
    {"time": "12:30-15:30", "activity": "Business Focus Block", "category": "Business Management", "color": "#32CD32", "completed": false},
    {"time": "15:30-15:45", "activity": "Break", "category": "Break", "color": "#D3D3D3", "completed": false},
    {"time": "15:45-18:00", "activity": "Learning & Development", "category": "Learning", "color": "#9370DB", "completed": false},
    {"time": "18:00-18:30", "activity": "Workout", "category": "Fitness", "color": "#FF6B6B", "completed": false},
    {"time": "18:30-19:00", "activity": "Dinner", "category": "Nutrition", "color": "#FFA500", "completed": false},
    {"time": "19:00-20:00", "activity": "Wrap-up & Planning", "category": "Productivity", "color": "#20B2AA", "completed": false},
    {"time": "20:00-21:00", "activity": "Personal Time", "category": "Personal Time", "color": "#FFB6C1", "completed": false},
    {"time": "21:00-21:30", "activity": "Wind Down", "category": "Health & Wellness", "color": "#87CEEB", "completed": false}
  ]
};

function loadScheduleTemplate(templateName) {
  if (scheduleTemplates[templateName]) {
    currentSchedule = [...scheduleTemplates[templateName]];
    renderTimeline();
    updateProgress();
    renderCategoryBreakdown();
    saveToLocalStorage();
    showNotification(`Loaded ${templateName} schedule template`, 'success');
  }
}

// Notification system
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification notification--${type}`;
  notification.innerHTML = `
    <span>${message}</span>
    <button class="notification-close">&times;</button>
  `;
  
  document.body.appendChild(notification);
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    if (notification.parentNode) {
      notification.remove();
    }
  }, 5000);
  
  // Add close button functionality
  notification.querySelector('.notification-close').addEventListener('click', () => {
    notification.remove();
  });
}

// Export/Import functionality
function exportSchedule() {
  const data = {
    schedule: currentSchedule,
    goals: scheduleData.weeklyGoals,
    exportDate: new Date().toISOString()
  };
  
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement('a');
  a.href = url;
  a.download = `schedule-${new Date().toISOString().split('T')[0]}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  
  showNotification('Schedule exported successfully!', 'success');
}

function importSchedule(event) {
  const file = event.target.files[0];
  if (!file) return;
  
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = JSON.parse(e.target.result);
      if (data.schedule && Array.isArray(data.schedule)) {
        currentSchedule = data.schedule;
        if (data.goals) {
          scheduleData.weeklyGoals = data.goals;
        }
        renderTimeline();
        updateProgress();
        renderGoals();
        renderCategoryBreakdown();
        saveToLocalStorage();
        showNotification('Schedule imported successfully!', 'success');
      } else {
        throw new Error('Invalid file format');
      }
    } catch (error) {
      showNotification('Error importing schedule: Invalid file format', 'error');
    }
  };
  reader.readAsText(file);
}

function openAddModal() {
  currentEditingIndex = -1; // Indicates new activity
  
  // Set default values for new activity
  document.getElementById('editTime').value = '';
  document.getElementById('editActivity').value = '';
  document.getElementById('editCategory').value = 'Learning';
  document.getElementById('editNotes').value = '';
  
  // Make time field editable for new activities
  document.getElementById('editTime').readOnly = false;
  
  document.getElementById('editModal').classList.add('active');
}

// Enhanced save function
function saveEdit() {
  const time = document.getElementById('editTime').value;
  const activity = document.getElementById('editActivity').value;
  const category = document.getElementById('editCategory').value;
  const notes = document.getElementById('editNotes').value;
  
  if (!time || !activity) {
    showNotification('Please fill in all required fields', 'error');
    return;
  }
  
  if (currentEditingIndex >= 0) {
    // Editing existing activity
    const item = currentSchedule[currentEditingIndex];
    item.activity = activity;
    item.category = category;
    item.notes = notes;
    item.color = getCategoryColor(category);
    showNotification('Activity updated successfully!', 'success');
  } else {
    // Adding new activity
    const newActivity = {
      time: time,
      activity: activity,
      category: category,
      notes: notes,
      color: getCategoryColor(category),
      completed: false
    };
    
    // Insert in chronological order
    const insertIndex = findInsertPosition(time);
    currentSchedule.splice(insertIndex, 0, newActivity);
    showNotification('New activity added successfully!', 'success');
  }
  
  renderTimeline();
  renderCategoryBreakdown();
  saveToLocalStorage();
  closeModal();
}

function findInsertPosition(timeSlot) {
  const [startTime] = timeSlot.split('-');
  const [hours, minutes] = startTime.split(':').map(Number);
  const timeInMinutes = hours * 60 + minutes;
  
  for (let i = 0; i < currentSchedule.length; i++) {
    const [scheduleStartTime] = currentSchedule[i].time.split('-');
    const [scheduleHours, scheduleMinutes] = scheduleStartTime.split(':').map(Number);
    const scheduleTimeInMinutes = scheduleHours * 60 + scheduleMinutes;
    
    if (timeInMinutes < scheduleTimeInMinutes) {
      return i;
    }
  }
  
  return currentSchedule.length;
}

// Enhanced close modal function
function closeModal() {
  document.getElementById('editModal').classList.remove('active');
  document.getElementById('editTime').readOnly = true; // Reset readonly state
  currentEditingIndex = -1;
}

// Time-based notifications
function checkUpcomingTasks() {
  const now = new Date();
  const currentTime = now.getHours() * 60 + now.getMinutes();
  
  currentSchedule.forEach((item, index) => {
    if (!item.completed && !item.notified) {
      const [startTime] = item.time.split('-');
      const [hours, minutes] = startTime.split(':').map(Number);
      const itemTime = hours * 60 + minutes;
      
      // Notify 5 minutes before task
      if (currentTime >= itemTime - 5 && currentTime < itemTime) {
        showNotification(`Upcoming: ${item.activity} in 5 minutes`, 'info');
        item.notified = true;
      }
      
      // Auto-complete overdue tasks (optional)
      if (currentTime > itemTime + 30) {
        // Uncomment to enable auto-completion
        // item.completed = true;
      }
    }
  });
}

// Enhanced auto-update progress every minute
setInterval(() => {
  const now = new Date();
  const currentTime = now.getHours() * 60 + now.getMinutes();
  
  updateProgress();
  checkUpcomingTasks();
  
  // Update current date if it's a new day
  displayCurrentDate();
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

// Delete activity function
function deleteActivity(index) {
  if (confirm('Are you sure you want to delete this activity?')) {
    currentSchedule.splice(index, 1);
    renderTimeline();
    updateProgress();
    renderCategoryBreakdown();
    saveToLocalStorage();
    showNotification('Activity deleted successfully!', 'success');
  }
}