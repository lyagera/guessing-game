class GuessingGame {
  constructor(min, max, result) {
    this.result = result;
    this.max = max;
    this.min = min;
    // console.log(number);
    this.middle = 0;
  }
  // this method accepts min and max value of range of number to guess
  setRange(min, max) {
    let arr = [];
    // console.log(min, max);

    // console.log(this.min, this.max);
    // console.log(Math.round((this.max + this.min) / 2));

    // return Math.round((max + min) / 2);
    for (let i = min; i < max; i++) {
      arr.push(i);
    }
    this.arr = arr;
    // // console.log(arr, this.arr);
    // console.log(arr.length);
    return arr;
    // return this.arr;
    // for (let i = 0; i < arr.length; i++) {
    //   //   this.setRange();
  }
  //write code returns solution candidate (you make an assumption based on range and previous assumptions)

  guess() {
    // setRange();
    // console.log(undefined === this.min, undefined === this.max);
    let middle;
    if (this.max === undefined && this.min === undefined) {
      this.middle = Math.round(this.arr.length / 2);
    } else if (this.min === undefined) {
      //  &&&& this.max === this.middle
      this.middle = Math.round(this.middle / 2);
    } else if (this.max === undefined) {
      // && this.miidle === this.min
      // console.log(
      //   "min " + this.min,
      //   "mid " + this.middle,
      //   "max " + this.max,
      //   "arr " + this.arr.length
      // );

      this.middle = Math.round((this.min + this.arr.length) / 2);
    } else {
      this.middle = Math.round((this.min + this.max) / 2);
    }
    // console.log(this.middle, this.max === this.middle);
    // console.log(this.middle);|| this.min === this.middle
    // return this.middle;
    this.result = this.middle;
    // console.log(
    //   this.result,
    //   "min " + this.min,
    //   "max " + this.max,
    //   "mid " + this.middle,
    //   "arr " + this.arr.length,
    //   "/ " + (this.min + this.arr.length) / 2
    // );

    // console.log("result " + this.middle);
    return this.result;
  }

  lower() {
    // console.log("num " + number);
    // this.min = this.middle;
    // console.log(this.min);
    // return this.min;
    this.max = this.middle;
    // console.log(this.setRange);

    // console.log("max" + this.max);

    return this.max;
    // console.log(number);
  }

  greater() {
    // this.max = this.middle;
    // console.log(this.max);
    // return this.max;
    this.min = this.middle;
    // console.log(
    //   this.max === undefined,
    //   this.miidle === this.min,
    //   "min " + this.min,
    //   "mid " + this.middle,
    //   "max " + this.arr.length
    // );
    return this.min;
  }
  // return middle
}
const result = new GuessingGame();
// const qwe = guessing.setRange(0, 10);
// console.log(qwe);
console.log(result);

module.exports = GuessingGame;
