const loginForm = document.querySelector('#login-form')
const loginInput = document.querySelector('#login-form input')

function onLoginSubmit(event) {
  // preventDefault() : 1에서 기본적으로 설정되어있는 새로고침 및 form을 submit하는 부분에서 딱 정지시킨다.
  // 그리고 함수호출이 아니라 작성한 함수의 매개변수에 1번째 매개변수를 입력후(event)
  // 그 매개변수를(event) 호출하면 우리가 submit한 것을 보여준다. --> event.preventDefault()
  // 지금 이상태가 컨밴션이다.
  event.preventDefault()
  console.log(event)
  //   const userName = loginInput.value
  //   console.log(userName)
}

// 1.input태그로 submit이 발동될때(아래 이벤트리스너가 발동될때) 새로고침후 form을 submit하도록 브라우저에 코딩이 되어있다.
loginForm.addEventListener('submit', onLoginSubmit)
