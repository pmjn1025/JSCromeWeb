//1. element 찾기
//2. event를 listen
//3. 그 event에 반응하기

//Js on the WebBrowser
// const title = document.getElementById('title')
// console.log(title)
// console.dir(title) // **중요함.

//title.innerHTML = 'got you'
//title.innerText = 'got you'

// Q1. js로 html을 수정하는가?
//document에서 js로 element를 굳이 저렇게 가져오는 이유를 좀 더 자세히 설명해줄 수 있나요?
// 예를 들어 title을 변경할 거라면 html에서 바로 변경하면 되는데 굳이 js에서 변경하는 이유가
// 아직 잘 와 닿지가 않네요ㅠㅠ
// 혹시 앞으로 html에서 변경하는 것만으로는 부족한 무언가를 js에서 해야돼서 이렇게 하는 것인가요?

//A1
//계속 공부하시다 보면 느끼시겠지만 나중에 서버와 통신을 하거나 다른 복잡한 일들을 처리할 때
// js 파일에서 처리하게 되는데
//그때 HTML의 element들을 자유자재로 다룰 수 있게 되야 여러 복잡한 처리를 원할하게 할 수 있게 됩니다.

//document.querySelector(.className) --> 이코드를 대부분 사용한다.
//document.querySelectorAll(.className) --> 이코드를 대부분 사용한다.
//document.querySelector(#idName)

const title = document.querySelector('div.hello:first-child h1')
console.log(title)
console.dir(title)
title.style.color = 'blue'
// title.addEventListener('click', clickEvent)

// function clickEvent(eventNum) {
//   if (eventNum === 'event1') {
//     alert('clicked1')
//   } else if (eventNum === 'event2') {
//     alert('clicked2')
//   } else {
//     alert('click')
//   }
// }

title.addEventListener('click', function () {
  clickEvent('event1') // 클릭 이벤트 발생 시 'event1' 인자 전달
})

title.addEventListener('mouseenter', mouseEnter)
title.addEventListener('mouseleave', mouseLeave)

function mouseEnter() {
  title.innerText = 'mouse in !'
}

function mouseLeave() {
  title.innerText = 'mouse out !'
}

function clickEvent(eventNum) {
  if (eventNum === 'event1') {
    alert('clicked1')
    title.style.color = 'green'
  } else if (eventNum === 'event2') {
    alert('clicked2')
    sech1.style.color = 'yellow'
  } else {
    alert('click')
  }
}

const secondHelloDiv = document.querySelectorAll('.hello')[1] // 두 번째 div 선택
console.log(secondHelloDiv)
const sech1 = secondHelloDiv.querySelector('h1')
sech1.style.color = 'red'
// sech1.addEventListener('click', clickEvent)
sech1.addEventListener('click', function () {
  clickEvent('event2') // 클릭 이벤트 발생 시 'event1' 인자 전달
})

//console.dir에 나오는 프로퍼티중에 on으로 시작되는것은 event를 뜻한다.
// 사용할때는 on을 빼고 사용

window.addEventListener('offline', offline)
window.addEventListener('online', online)

function offline() {
  alert('wifi is gone!')
}

function online() {
  alert('wifi is good!')
}
