export const formatDate = (date) => {
  const dateObject = new Date(date);

  // Get the month, day, and year values from the date object
  const month = dateObject.getMonth() + 1;
  const day = dateObject.getDate();
  const year = dateObject.getFullYear();

  // Create a string in the mm/dd/yyyy format
  const dateString = `${year.toString()}-${month
    .toString()
    .padStart(2, "0")}-${day.toString().padStart(2, "0")}`;

  return dateString;
};

export const topEmployees = (tasks) => {
  const nameCounts = {};

  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    const name = task.assignee;
    if (!nameCounts[name]) {
      nameCounts[name] = 0;
    }
    nameCounts[name]++;
  }

  const sortedCounts = Object.fromEntries(
    Object.entries(nameCounts).sort((a, b) => b[1] - a[1])
  );

  const rows = [];

  for (const name in sortedCounts) {
    const count = sortedCounts[name];
    rows.push(`assignee: ${name}, tasks: ${count}`);
  }

  return rows;
};
