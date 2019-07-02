const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  if (key > 0 && key < 10) {
      process.stdout.write(`setting timer for ${key} seconds...`);
      setTimeout(() => process.stdout.write("BEEP!"), key * 1000);
  } else if (key === "b") {
    process.stdout.write("BEEP!");
  }
  if (key === '\u0003') {
    process.stdout.write(`Thanks for using me, ciao!`);
    process.exit();
  }
});

console.log('after callback');


