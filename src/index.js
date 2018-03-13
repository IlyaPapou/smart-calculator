class SmartCalculator {
      constructor(initialValue) {
        this.val = String(initialValue)
    }

    add(number) {
        this.val += '+' + number
        return this
    }

    subtract(number) {
        this.val += '-' + number
        return this
    }

    multiply(number) {
        this.val += '*' + number
        return this
    }

    devide(number) {
        this.val += '/' + number
        return this
    }

    pow(number) {
        this.val += '**' + number
        return this
    }

    toString() {
        return eval(this.val)
    }
}

module.exports = SmartCalculator;
