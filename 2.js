var sum = 0;

for (var i = 1; i <= 100; i++) {
  sum += i;
  if (sum >= 1000) {
    break;
  }
}
console.log(sum);
