// 2023.09.01 --> 로그인 유저별 todoList 출력해보기

// 2023.08.30 / SaGo_Muncci / todo이게 momentum의 핵심기능이다. 중요!
// client에서는 화면을 기능(보여줄것,디자인)별로 부분 부분으로 나누고 뼈대를 세운다.(html)
// 부분마다 필요한 기능 및 데이터를 js로 개발한다.
// 작성한 뼈대 및 위치 조정, 디자인은 css로 한다.
// 지금 클라이언트단에서는 이렇게 받지만 todolist에 있는 데이터를 서버로 넘겨서 저장하고 출력해내야한다.
// client에서 입력하면 api로 서버에 맞게 컨트롤러에 접근하고 서비스타고 디비에 저장
const toDoForm = document.querySelector('#todo-form')
const toDoInput = toDoForm.querySelector('input')
const toDoList = document.querySelector('#todo-list')
const h1Greeting = document.querySelector('h1#greeting')

const TODOS_KEY = 'todos'

// 이렇게 하면 새로고침 할때마다 todos의 값은 빈값으로 시작한다. 그러나 localStorage에는 저장되어있다.
// 보이는것만 새로고침해서 빈 배열로 보이는 것이다.
//const todos = []
// 따라서 변수를 재할당 할수 있는 "let"으로 변경하자.
let todos = []

//newTodo --> toDoInput.value 에서
//        --> newTodoObj객체로 변경
function paintToDo(newTodo) {
  const liTodo = document.createElement('li')
  liTodo.id = newTodo.id
  const spanTodo = document.createElement('span')
  //spanTodo.innerText = newTodo
  spanTodo.innerText = newTodo.text //--> newTodoObj객체로 변경
  const toDoBtn = document.createElement('button')
  toDoBtn.innerText = '✖'
  toDoBtn.addEventListener('click', deleteToDo)
  console.log(spanTodo)
  toDoList.appendChild(liTodo)
  liTodo.appendChild(spanTodo)
  liTodo.appendChild(toDoBtn)
}

// **중요
// 나도 어떤 버튼을 누르는지 구분자가 필요하다고 생각했다.
// 내가 생각했던 방법은 클릭이벤트에 매개변수로 해당 클릭버튼의 부모 li태그 전체를 넘겨서
// 메서드에서 remove() 삭제함.
// handleToDoList의 매개변수인 event를 사용하는 방법이.. 생각도 못했다.
function deleteToDo(event) {
  //const btnParent = toDoBtn.parentElement
  console.log(event.target)
  console.dir(event.target.parentElement.innerText)
  //const rmBtnPerntLi = event.target.parentElement
  const rmBtnPerntLi = event.target.parentElement
  console.log(rmBtnPerntLi.id)
  console.log(typeof rmBtnPerntLi.id)
  rmBtnPerntLi.remove()

  // **JS에서 지우고 싶은 아이템은 제외한다
  // --> 지우고싶은 아이템을 제외하고 새로운 배열을 만드는 것이다.
  // 데이터 타입때문에 안지워짐
  //todos = todos.filter((todos) => todos.id !== rmBtnPerntLi.id)
  todos = todos.filter((todos) => todos.id !== parseInt(rmBtnPerntLi.id))
  // 지우고 변경된 todos를 다시 저장
  saveTodo()
}

function saveTodo() {
  //아래 코드는 문제점이있다. 로컬스토리지에 저장될때
  //배열로 저장되지 못하고 일반적인 텍스트 형태로 저장된다 --> '1,2,3,4'
  //localStorage.setItem('todos', todos)

  //JSON.stringify() : 어떤것이든 string으로 바꿔주는 기능이다.
  // 배열 형식으로 저장가능하다. --> '["1","2","3","4"]' 스트링이지만 이렇게 출력함 배열형식으로
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
}

function handleToDoList(event) {
  event.preventDefault()
  const newTodo = toDoInput.value

  const greetingText = h1Greeting.innerText.split(',')
  const userName = greetingText[1].replace(' ', '')
  console.log(greetingText[1].replace(' ', ''))

  console.log(newTodo)
  // localstorage에 저장한 후 삭제시 만약 newtodo의 값이 같으면
  // 클라이언트 측에서 버튼의 부모 엘리먼트의 정보를 target해서 해당 엘리먼트를 삭제할수 있으나
  // DB는 그렇지 않다.
  // 따라서 db에 저장시 키- 값 쌍인 객체를 생성해서 배열에 저장해주자.
  //todos.push(newTodo)
  const newTodoObj = {
    userName: userName,
    text: newTodo,
    id: Date.now(),
  }
  todos.push(newTodoObj)
  toDoInput.value = ''
  saveTodo()
  paintToDo(newTodoObj)
}

toDoForm.addEventListener('submit', handleToDoList) // --> sub밋을 눌러야 작동 새로고침하면 안탄다.

// **event와 마찬가지로, js에서 item은 parsedTodos 배열의 item을 가리킨다.
function sayhello(item) {
  console.log('itemSeq', item)
}

// 새로고침 하면 이것 부터 탄다
const saveTodos = localStorage.getItem(TODOS_KEY)
console.log(saveTodos)

if (saveTodos !== null) {
  const parsedTodos = JSON.parse(saveTodos)
  console.log(parsedTodos)
  // 이전에 저장되어있던것을 변수(let todos)에 재할당해주자.
  todos = parsedTodos

  const greetingText = h1Greeting.innerText.split(',')
  const userName = greetingText[1].replace(' ', '')

  console.log(parsedTodos)
  console.log(userName)

  /* 중요 */
  //parsedTodos.forEach((item) => console.log('itemSeq', item)) //-->  이것과
  //parsedTodos.forEach(paintToDo) //--> foreach 이것과

  // 이것은 같다
  for (let index = 0; index < parsedTodos.length; index++) {
    if (parsedTodos[index].userName === userName) {
      const element = parsedTodos[index]
      paintToDo(element)
    }
  }
}

// 내생각 대로 짜본것
//let toDoSeq = 0

// function paintToDo(newTodo) {
//   const liTodo = document.createElement('li')
//   const spanTodo = document.createElement('span')
//   const toDoBtn = document.createElement('button')
//   toDoBtn.innerText = '✖'
//   spanTodo.innerText = newTodo
//   console.log(spanTodo)
//   toDoList.appendChild(liTodo)
//   toDoSeq++
//   liTodo.setAttribute('id', 'todolist' + toDoSeq)
//   liTodo.appendChild(spanTodo)
//   liTodo.appendChild(toDoBtn)

//   toDoBtn.addEventListener('click', function () {
//     const btnParent = toDoBtn.parentElement
//     console.log(btnParent)
//     deleteToDo(btnParent)
//   })
// }

// function deleteToDo(btnParent) {
//   console.log(btnParent.id)
//   //document.removeElement('#' + btnParent.id)
//   btnParent.remove()
// }
