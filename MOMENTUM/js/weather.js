// 위치와 날씨 받기
//navigator , geolocation
// 매개변수를 2개 입력받아야 하는데 첫번째 인자는 정상적으로 작동했을때 실행할 함수,
// 두번째 인자는 오류가 발생했을때 실행할 함수
navigator.geolocation.getCurrentPosition(geolocationOk, geolocationError)

// 출력시 위도와 경도로 출력되기때문에 이것을 나라와 도시로 알려줄 api가 필요하다.
// openweathermap.org
// 가입 --> API --> currentWeather --> docApi
// apikey는 아이디에 마우스 호버하면 MyApiKey있는데 거기서 확인.
// apikey는 상수화 시키자
const API_KEY = ''

function geolocationOk(position) {
  const lat = position.coords.latitude
  const lon = position.coords.longitude
  console.log('당신의 위치는', lat, lon)

  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}7&lon=${lon}&appid=${API_KEY}&units=metric`
  console.log(URL)
  // fetch???? patch는 들어봤는데 fetch???
  //fetch : 서버에 요청하는 메서드 서버가 응답할때까지 기다린후 응답하면 우리가 받아옴. 따라서 then을 입력해줘야한다.
  fetch(URL).then((response) =>
    response.json().then((data) => {
      const city = document.querySelector('#weather span:first-child')
      const temp = document.querySelector('#weather span:nth-child(2)')
      const weather = document.querySelector('#weather span:nth-child(3)')
      console.log(data.weather[0].main, data.main.temp, data.name)
      city.innerText = data.name
      console.log(typeof data.main.temp)
      const temp1 = String(data.main.temp).split('.')
      console.log(temp1)
      temp.innerText = temp1[0] + '°C'
      //temp.innerText = data.main.temp + '°C'
      weather.innerText = data.weather[0].main
    }),
  )
}
function geolocationError() {
  alert('위치를 찾을 수 없습니다.')
}
