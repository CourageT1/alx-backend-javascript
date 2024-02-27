// 3-read_file_async.js

const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n');
        const counts = {};
        const lists = {};

        for (const line of lines) {
          const [firstName, lastName, age, field] = line.split(',');
          if (field) {
            counts[field] = (counts[field] || 0) + 1;
            lists[field] = lists[field] || [];
            lists[field].push(firstName);
          }
        }

        console.log("Number of students:", lines.length);

        for (const field in counts) {
          console.log(`Number of students in ${field}: ${counts[field]}. List: ${lists[field].join(', ')}`);
        }

        resolve();
      }
    });
  });
}

module.exports = countStudents;
