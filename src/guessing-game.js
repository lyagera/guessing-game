class GuessingGame {
  constructor() {}
  setRange(min, max) {
    let arr = [];
    for (let i = min; i < max; i++) {
      arr.push(i);
    }
    this.arr = arr;
  }

  guess() {
    if (this.max === undefined && this.min === undefined) {
      this.middle = Math.round(this.arr.length / 2);
    } else if (this.min === undefined) {
      this.middle = Math.round(this.middle / 2);
    } else if (this.max === undefined) {
      this.middle = Math.round((this.min + this.arr.length) / 2);
    } else {
      this.middle = Math.round((this.min + this.max) / 2);
    }
    this.result = this.middle;
    return this.result;
  }

  lower() {
    this.max = this.middle;
  }

  greater() {
    this.min = this.middle;
  }
}

module.exports = GuessingGame;
