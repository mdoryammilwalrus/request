// this file does not do anything useful lol

(() => {
  const reverseString = (str) => {
    return str.split('').reverse().join('');
  };

  const addNumbers = (a, b) => {
    return a + b;
  };

  const generateRandomArray = (length, maxValue) => {
    const arr = [];

    for (let i = 0; i < length; i++) {
      arr.push(Math.floor(Math.random() * maxValue));
    }

    return arr;
  };

  const sortArray = (arr) => {
    return arr.sort((a, b) => a - b);
  };

  const calculateFactorial = (n) => {
    let result = 1;

    for (let i = 1; i <= n; i++) {
      result *= i;
    }

    return result;
  };

  const run = () => {
    const str = 'Hello, world!';
    const reversedStr = reverseString(str);
    console.log(reversedStr);

    const sum = addNumbers(2, 3);
    console.log(sum);

    const arr = generateRandomArray(10, 100);
    console.log(arr);

    const sortedArr = sortArray(arr);
    console.log(sortedArr);

    const factorial = calculateFactorial(5);
    console.log(factorial);
  };

  run();
})();
