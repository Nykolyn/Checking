export const getAllTasks = state => state.tasks;

export const getTodayTomorrowTasks = state => state.tasks.tasks.todayTomorrow;
export const getNextAfterTasks = state => state.tasks.tasks.nextAfter;
export const getBurnedOutTasks = state => state.tasks.tasks.burnedOut;
export const getDoneTasks = state => state.tasks.tasks.done;

export const getTaskInEditMode = state => state.tasks.taskInEditMode;
