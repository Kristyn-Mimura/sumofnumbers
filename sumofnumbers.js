const testList = [1, 2, 3, 4, 5];

function sumFor(list) {
  let sum = 0;
  for (const num of list) {
    sum += num;
  }
  return sum;
}

function sumWhile(list) {
  let sum = 0;
  let count = 0;
  while (count < list.length) {
    sum += list[count];
    count++;
  }
  return sum;
}

function sumRecursion(list) {
  if (list.length === 0) {
    return 0;
  }
  return (list[0] + sumRecursion(list.slice(1, list.legnth)));
}

function sumTheSimpleWay(list) {
  return _.reduce(list, function (memo, num) {
    return memo + num;
  }, 0);
}

console.log(testList);
console.log(sumFor(testList));
console.log(sumWhile(testList));
console.log(sumRecursion(testList));
console.log(sumTheSimpleWay(testList));
