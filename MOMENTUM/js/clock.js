const clock = document.querySelector('h2#clock')
//clock.innerText = 'clock'

// 출력시 렌덤으로 색상 변경
function getRandomColor() {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

// padStart(n,'String') 문자열 길이가 n까지잡고 문자열 길이가 n이 아니면 앞에 string문자열을 추가해준다. 01 02 03 04 05
// padEnd(n,'String') 문자열 길이가 n까지잡고 문자열 길이가 n이 아니면 뒤에 string문자열을 추가해준다.   10 20 30 40 50
// 사용시 **String으로 형변환
function getClock() {
  const date = new Date()
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const seconds = String(date.getSeconds()).padStart(2, '0')

  console.log(`${date.getHours()} : ${date.getMinutes()} :${date.getSeconds()}`)
  const randomColor = getRandomColor()
  clock.style.color = randomColor
  clock.innerText = `${hours} : ${minutes} :${seconds}`
  //clock.innerText = hour + ':' + minute + ':' + seconds.padStart(2, '0')
}
getClock()
// 반복해서 화면에 출력해주는 setInterval 매개변수는 2개 하나는 출력하려는 함수, 하나는 시간(간격) 밀리세컨드
setInterval(getClock, 1000)

// 설정한 시간에 한번 출력 setTimeout 매개변수는 2개 하나는 출력하려는 함수, 하나는 시간 밀리세컨드
//setTimeout(sayHello, 5000)
