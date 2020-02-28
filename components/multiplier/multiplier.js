const multiply = (x, y) => { return x * y }

const multiplier = new Vue({
  el: '#multiplier',
  data: {
    guest: 'Emmett',
    firstNumber: 5,
    secondNumber: 3
  },
  computed: {
    result2: function () {
      const i = parseInt(this.firstNumber)
      const j = parseInt(this.secondNumber)
      return `${this.guest}, your product is ${multiply(i, j)}.`
    }
  }
})