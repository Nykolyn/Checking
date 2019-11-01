// sort Today Tasks
export const sortTodayTomorrowTasks = arr => {
  if (arr.length >= 0) {
    arr.sort(
      (a, b) =>
        a.time.localeCompare(b.time) ||
        (a.time !== 'All Day' || b.time !== 'All Day'
          ? a.time > b.time
            ? 1
            : -1
          : a.priority > b.priority
          ? 1
          : -1) ||
        a.priority - b.priority,
    );
  }
  return arr;
};

// sort next 7 Tasks
export const sortNextAfterTasks = arr => {
  if (arr.length >= 0) {
    arr.sort(
      (a, b) =>
        a.date.localeCompare(b.date) ||
        (a.time !== 'All Day' || b.time !== 'All Day'
          ? a.time > b.time
            ? 1
            : -1
          : a.priority > b.priority
          ? -1
          : 1) ||
        b.priority - a.priority,
    );
  }
  return arr;
};

// sort Burned Out Tasks
export const sortBurnedOutTasks = arr => {
  if (arr.length >= 0) {
    arr.sort(
      (a, b) =>
        b.date.localeCompare(a.date) ||
        b.time - a.time ||
        b.priority - a.priority,
    );
  }
  return arr;
};

// sort Done Tasks
export const sortDoneTasks = arr => {
  if (arr.length >= 1) {
    arr.sort((a, b) => (a.date > b.date ? -1 : 1));
  }
  return arr;
};


