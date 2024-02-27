// 2-read_file.js

const fs = require('fs');

function countStudents(path) {
  try {
    // Read the database file synchronously
    const data = fs.readFileSync(path, 'utf8');

    // Split the data into lines
    const lines = data.trim().split('\n');

    // Initialize objects to store counts for each field
    const counts = {};
    const lists = {};

    // Iterate over each line and count students in each field
    for (const line of lines) {
      const [firstName, lastName, age, field] = line.split(',');
      if (field) {
        counts[field] = (counts[field] || 0) + 1;
        lists[field] = lists[field] || [];
        lists[field].push(firstName);
      }
    }

    // Log the total number of students
    console.log("Number of students:", lines.length);

    // Log the number of students in each field and their first names
    for (const field in counts) {
      console.log(`Number of students in ${field}: ${counts[field]}. List: ${lists[field].join(', ')}`);
    }
  } catch (error) {
    // Handle error if the database is not available
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
