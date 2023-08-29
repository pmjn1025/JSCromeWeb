const h1 = document.querySelector('div.hello:first-child h1')
console.log(h1)
console.dir(h1)

function handleH1Click() {
  const clickName = 'clicked'
  // 이렇게 하면 최초 설정한 sexy-font가 사라진다.
  //   if (h1.className === 'clicked') {
  //     h1.className = ''
  //   } else {
  //     h1.className = 'clicked'
  //   }

  //*classList : 클래스들을 추가 제거할 수있는 배열과 비슷
  // classList.contains(), classList.add() classList.remove()등이 있다.
  //   if (h1.classList.contains(clickName)) {
  //     h1.classList.remove(clickName)
  //   } else {
  //     h1.classList.add(clickName)
  //   }

  // classList와 동일한 기능을 사용하는 toggle.
  h1.classList.toggle(clickName)
}

h1.addEventListener('click', handleH1Click)
