const calculator = {
  add: function (a, b) {
    return a + b
  },

  minus: function (a, b) {
    return a - b
  },

  multify: function (a, b) {
    return a * b
  },

  divide: function (a, b) {
    return a / b
  },

  powerof: function (a, b) {
    return a ** b
  },
}

const a = 2
const b = 3

const rsltAdd = calculator.add(a, b)
const rsltMinus = calculator.minus(a, b)
const rsltMultify = calculator.multify(a, b)
const rsltDivide = calculator.divide(a, b)
const rsltPowerOf = calculator.powerof(a, b)

const resltArr = [rsltAdd, rsltMinus, rsltMultify, rsltDivide, rsltPowerOf]
// resltArr.push = rsltAdd
// resltArr.push = rsltMinus
// resltArr.push = rsltMultify
// resltArr.push = rsltDivide
// resltArr.push = rsltPowerOf

console.log(resltArr)

for (let index = 0; index < resltArr.length; index++) {
  const element = resltArr[index]

  console.log(element)
}
