//const loginForm = document.querySelector('#login-form')
// const loginInput = loginForm.querySelector('input')
// const loginButton = loginForm.querySelector('button')
//console.log(loginForm)

const loginInput = document.querySelector('#login-form input')
const loginButton = document.querySelector('#login-form button')

console.log(loginInput)
console.dir(loginInput)
console.log(loginButton)
// 2023.08.29 / 박민준 / js를 사용하는 것은 좋지만 html에서 기본적으로 제공하는 간단하게 처리할 수 있는 기능들은
// 사용하자. html <div> --> <Form> - <Input> 태그로 사용

// 아이디 정규식
//const pattern = new RegExp('^[a-zA-Z][0-9a-zA-Z]{4,7}$')

// function LoginBtnClick() {
//   const value = loginInput.value
//   console.log(value)
//   // if (value === '') {
//   //   alert('아이디를 입력해주세요')
//   // }
//   // if (pattern.test(value)) {
//   //   console.log(pattern.test(value))
//   //   alert('hello!' + value)
//   // } else {
//   //   console.log(pattern.test(value))
//   //   alert('아이디는 영문 숫자조합으로 5~8자리입니다.')
//   // }
// ===============================================================
//   if (value === '') {
//     alert('이름을 입력해주세요')
//   } else if (value.length > 15) {
//     // length : 문자열길이, 자동완성기능에 안뜸
//     alert('이름의 길이는 최대 15자리 입니다.')
//   } else {
//     alert('hello! ' + loginInput.value)
//   }

//   //  **value: input 값을 가져올때 사용
//   //console.log('hello!', loginInput.value)
// }

//loginButton.addEventListener('click', LoginBtnClick)
