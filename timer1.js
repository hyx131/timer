let arr = process.argv.slice(2);

const timer = function(arr) {
  for (let item of arr) {
    if (item > 0) {
      setTimeout(() => process.stdout.write(item), parseInt(item) * 1000);
    }
  }
};

timer(arr);


