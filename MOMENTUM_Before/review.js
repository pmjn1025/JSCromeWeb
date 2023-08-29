// 2023.08.25 / 박민준 / 자바스크립트 필기

// 예전에 자바스크립트 변수 사용시 데이터 타입을 var로 통일
var a = 'some'
// string이든, int타입이든 let에 담길수 있고 변수 재할당이 가능
let b = 2
// string이든, int타입이든 const에 담길수 있고 변수 재할당 불가
const c = 3

const arrSome = '변수로 배열 추가'

// 배열선언
const arr = [1, 2, 3, 4, 5, '배열', arrSome]

// 배열에서 해당 아이템 선택
console.log(arr[5])

arr[5] = '변경'

console.log(arr[5])

// 배열에 데이터 추가(push는 이미 추가된 배열 마지막에 추가함)
arr.push('배열추가')

// 추가된 데이터 출력
console.log(arr[6])
console.log(arr[7])

// boolean
const isSome = false

if (isSome) {
  console.log('True입니다.')
} else {
  console.log('False입니다.')
}

// null, undifined

// 객체 선언
const player = {
  name: 'park',
  age: 34,
  email: 'pmjn1025@naver.com',
}

console.log(player.name + ' ' + player.age + ' ' + player.email)

// 함수사용
function sayHello(name, age) {
  console.log('hello! my name is ' + name + ' my age is ' + age)
  //alert('hello! my name is ' + name + ' my age is ' + age)
}

sayHello('park', 34)
sayHello('ham', 33)
sayHello('lee', 30)
sayHello('choi', 29)

// 객체 사용시 메서드 활용법
let someName = 'ham'
let someAge = '30'

const player1 = {
  name: someName,
  age: someAge,
  sayHello1: function (otherName) {
    console.log('hello! nice to meet you ' + otherName)
  },
  email: 'pmjn1025@naver.com',
}
console.log(player1.name)
player1.hobby = 'exercise'
console.log(player1.hobby)

player1.sayHello1('nico')

// **return**
// 함수사용시 결과값을 반환하려면 retrun을 입력하여야한다.
// Java에서 하던것처럼 단 데이터 타입을 맞추어서 return하지 않는것 같다.
// return에 명시한 값만 호출한다.
const foreignAge = 34

function calkorAge(foreignAge) {
  // age + 2  --> undifined 출력
  return foreignAge + 2
}

const korAge = calkorAge(foreignAge)
console.log(korAge)

//calculator
const calculator = {
  add: function (a, b) {
    return a + b
    console.log('hello') // **출력안됨 return문에서 호출한 값을반환해서 더이상 읽지 않음
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

const a1 = 2
const b1 = 3

const rsltAdd = calculator.add(a1, b1)
const rsltMinus = calculator.minus(a1, b1)
const rsltMultify = calculator.multify(a1, b1)
const rsltDivide = calculator.divide(a1, b1)
const rsltPowerOf = calculator.powerof(a1, b1)

const resltArr = [rsltAdd, rsltMinus, rsltMultify, rsltDivide, rsltPowerOf]
// resltArr.push = rsltAdd
// resltArr.push = rsltMinus
// resltArr.push = rsltMultify
// resltArr.push = rsltDivide
// resltArr.push = rsltPowerOf

for (let index = 0; index < resltArr.length; index++) {
  const element = resltArr[index]

  console.log(element)
}
//=========================================================
// 조건문
// prompt : 고전적인 사용자 입력창
// parseInt : stirng to int
// NaN : Not a Number
const conAge = parseInt(prompt('how old are you?')) // <----여기서 멈춤
// js에서 타입을 보는 방법 : typeof
console.log(typeof conAge) // --> 출력된 값의 데이터 타입은 숫자

console.log(conAge) // 입력된 값은 문자
//  **isNaN : 입력된 값이 숫자인지 문자인지 판별
console.log(isNaN(conAge))

if (!isNaN(conAge)) {
  if (conAge >= 20 && conAge <= 60) {
    console.log('술을 구매가능합니다.')
  } else if (conAge < 20) {
    console.log('술을 구매할수 없습니다.')
  } else if (conAge > 60 && conAge <= 80) {
    console.log('운동이 필요합니다..')
  } else {
    console.log('건강에 유의하세요')
  }
} else {
  console.log('숫자를 입력해주세요')
}

// 1. ==는 동등연산자, 값만 같으면 true이다
// 2. ===는 일치연산저, 값과 값의 종류(Data Type)가 모두 같은지를 비교해서, 같으면

//document
//--> document객체는 html의 태그를 가져올수있다!
// 즉 js html은 서로 연동할수 있다. 아니 이미 연동되어있다. 따라서 연동할 환경설정이 필요없다.
// 결국 js로 html의 데이터를 가져오고 사용할수 있는것이다!
// document로 html 테그를 가져오는 예시
//document.title = 'hi'
//document.body
