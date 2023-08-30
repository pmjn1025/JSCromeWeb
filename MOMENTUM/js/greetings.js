//element 찾기
//event를 listen
//그 event에 반응하기
// 1.유저가 form에 아이디를 입력하면 받아오고 싶다.
const loginForm = document.querySelector('#login-form')
const loginInput = document.querySelector('#login-form input')
const greetingH1 = document.querySelector('#greeting')
const logoutBtn = document.querySelector('#logout')

// ****** 자주 쓰이는 데이터(String,number)는 상수화 시켜서 관리(어디에 적용되어있는지 잘보기) ******
const HIDDEN_CLASSNAME = 'hidden'
const USERNAME_KEY = 'userName'

// 3. localStorage에 userName이 있으면, h1태그로 아니면 form태그 그대로 보여줌(로그인 한번하면 계속 로그인되는것 구현)

const saveUserName = localStorage.getItem(USERNAME_KEY)

if (saveUserName === null) {
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME)
  loginForm.addEventListener('submit', onLoginSubmit) // submit 이벤트 클릭 대기
} else {
  // show the h1(greeting)
  paintGreeting(saveUserName)
}

// log-in 버튼을 누르면 html 조건에 의해서 이버튼을 실행할지 안할지 검사함.
// html input의 조건에 맞으면 이 메서드를 실행하게 하고 아니면 html단에서 막음
function onLoginSubmit(event) {
  event.preventDefault()
  console.log(event)
  const userName = loginInput.value
  //2. 데이터를 받으면 html에서의 form디자인을 없애고 싶다.
  //1) form을 지우기
  //2) form을 안보이게 처리하기
  //2) 방식 채용 style.css에 확인하기(hidden)

  // 이부분에서 js로 정규식을 사용하거나 html input태그단에서 정규식을 사용하자.
  if (userName === '123') {
    alert('123은 안됩니다.')
    return
  }

  //const some = localStorage.getItem(USERNAME_KEY)
  loginForm.classList.add(HIDDEN_CLASSNAME)

  // **localStorage : 내컴퓨터의 웹브라우저에 저장 --> 나중에는 이정보를 서버에 보내서 서버의 DB에 저장해야함.
  localStorage.setItem(USERNAME_KEY, userName)

  console.log(userName)
  //console.log(some)

  //greetingH1.innerText = 'Hello! ' + userName
  paintGreeting(userName)
  //paintGreeting(saveUserName)
  //console.log(event)
}

// 4.중복된 코드들을 함수화
function paintGreeting(userName) {
  greetingH1.classList.remove(HIDDEN_CLASSNAME)
  greetingH1.innerText = `hello! ${userName}` // --> 이걸 잘쓰자
  logoutBtn.classList.remove(HIDDEN_CLASSNAME)
  logoutBtn.addEventListener('click', onLogout)
}

function onLogout() {
  const nowLoginId = localStorage.getItem(USERNAME_KEY)
  console.log(nowLoginId)
  localStorage.removeItem(USERNAME_KEY, nowLoginId)
  location.reload()
}
