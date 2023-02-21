class GuessingGame {
  constructor(min, max, num) {
    this.min = min;
    this.max = max;
    this.num = num;
  }

  setRange(min, max) {
    let arr = [min, ...max];
    let middle = arr[arr.length / 2];
    console.log(middle);
    return middle;
  }

  // console.log(arr);

  guess(arr) {
    return arr;
  }
  // middle, num, max
  lower() {
    if (this.num < this.middle) {
      this.max = this.middle;
      return this.max;
    }
  }
  // middle, num, min
  greater() {
    if (this.num > this.middle) {
      this.min = this.middle;
      return this.min;
    }
  }
}
console.log(new GuessingGame(0, 15, 10));
// module.exports = GuessingGame;

function setRange(min, max) {
  let arr = [];
  for (let i = min; i < max + 1; i++) {
    arr.push(i);
  }
  console.log(arr);

  // new arr(min, ...max);
  let middle = arr[Math.round(arr.length / 2)];
  console.log(middle);
  return middle;
}
console.log(setRange(3, 15));

//-------------------------------------------------

class GuessingGame {
  constructor(min, max, num) {
    this.min = min;
    this.max = max;
    this.num = num;
  }
  setRange(min, max) {
    let middle = 0;
    let arr = [];
    for (let i = this.min; i < this.max + 1; i++) {
      arr.push(i);
    }
    middle = arr[Math.round(arr.length / 2)];

    console.log(middle);
    for (let i = 0; i < arr.length; i++) {
      //   this.setRange();

      if (this.num === this.middle) {
        return this.num;
      }

      //   return this.num;

      // return middle;
    }
    let lower = GuessingGame.lower;
    console.log(lower);

    this.greater();
  }

  get guess() {
    return this.setRange();
  }

  lower() {
    if (this.num < this.middle) {
      this.max = this.middle;
      return this.max;
    }
  }

  greater() {
    if (this.num > this.middle) {
      this.min = this.middle;
      return this.min;
    }
  }
}
const number = new GuessingGame(3, 15, 10);
console.log(number.guess);

// module.exports = GuessingGame;
