// ** 이미지 경로 아니다. 하드코딩으로 이미지이름을 입력해준것일 뿐이다. String이다.
// const images = [
//   'gautier-salles.jpg',
//   'jurre-houtkamp.jpg',
//   'reuben-mcfeeters.jpg',
// ]

const images = ['jurre-houtkamp.jpg', 'reuben-mcfeeters.jpg']

const todayImgSeq = Math.floor(Math.random() * images.length)
const todayImg = images[todayImgSeq]
console.log(todayImg)

// document.createElement() 태그를 생성하는 부분
const bgImg = document.createElement('img')

// 여기서 진짜 경로가 추가된다.
bgImg.src = `img/${todayImg}`
// 백그라운드 아이디 설정
bgImg.id = 'background'

console.log(bgImg)

// body 태그 내 마지막에 img태그 추가
document.body.appendChild(bgImg)

// body 태그 내 첫번째에 img태그 추가
//document.body.prependChild(bgImg)
