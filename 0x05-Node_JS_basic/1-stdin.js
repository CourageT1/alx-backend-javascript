// 1-stdin.js

process.stdout.write("Welcome to Holberton School, what is your name?\n");

process.stdin.setEncoding('utf8');

process.stdin.on('data', function(data) {
  const input = data.trim();
  if (input) {
    console.log("Your name is:", input);
  } else {
    console.log("Your name is: (no input)");
  }
  console.log("This important software is now closing");
  process.exit();
});
