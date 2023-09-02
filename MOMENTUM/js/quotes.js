// 2023.08.30 배열에 객체를 넣었다.
const quotes = [
  {
    quote: '소크라테스 (Socrates)',
    author: '지혜는 자신의 무지를 아는 것이다.',
  },
  {
    quote: '아리스토텔레스 (Aristotle)',
    author:
      '우리를 반복하는 것이 덕을 만든다. 그러므로 우리는 행동하는 것이 아니라 행동이 우리를 만든다.',
  },
  {
    quote: '에피쿠로스 (Epicurus)',
    author: '불행은 결코 그릇이 아니라, 태도에서 비롯된다.',
  },
  {
    quote: '칸트 (Immanuel Kant)',
    author:
      '두 가지 것은 나로 하여금 놀랍게도 본질적으로 경외감을 느끼게 한다. 밤 하늘 위의 별과, 인간의 도덕적 의무.',
  },
  {
    quote: '니체 (Friedrich Nietzsche)',
    author: '그대가 목적을 갖고 있다면 그대는 거의 모든 수단을 갖게 된다.',
  },
  {
    quote: '산티아고 라모스 (Santayana)',
    author: '과거를 기억하지 못하는 사람들은 그 과거를 되풀이한다.',
  },
  {
    quote: '알베르 카뮈 (Albert Camus)',
    author: '인생은 야심과 무미건조함 사이에서의 균형을 찾는 것이다.',
  },
  {
    quote: '한나 아렌트 (Hannah Arendt)',
    author: '생각하는 법을 배우는 것은 모든 교육의 가장 중요한 목표이다.',
  },
  {
    quote: '칼 포퍼 (Karl Popper)',
    author:
      '진리를 찾으려고 시도하는 과정에서 오류를 범하는 것은 단지 지식의 증가이다.',
  },
  {
    quote: '존 로크 (John Locke)',
    author:
      '우리는 모든 것을 타고난 상태에서 받아들이며, 인간의 지식과 행동은 경험을 통해 형성된다.',
  },
]

const quote = document.querySelector('#quotes span:first-child')
const author = document.querySelector('#quotes span:last-child')

//console.log(quotes[0])

// Math.random() : 0~1사이의 숫자를 무작위로 출력해준다. 따라서 내가 출력하고 싶은 갯수중에서 랜덤으로 출력하려면
// 내가 출력하고 있는 갯수를 곱해주어야한다.

//Math.round() : 반올림

//Math.ceil() : 올림

//Math.floor() : 버림

//console.log(parseInt(Math.random() * quotes.length))
//parseInt()를 사용하여 아래와 같이 실수의 Number나 String 객체를 정수로 변환할 수 있다.
// 변환된 타입은 모두 Number입니다.

// quotes의 배열 순서 랜덤이 소수점이라서 정수로 변환
//const quotesSeq = Math.floor(Math.random() * quotes.length) --> 이렇게 사용 할 수도 있고(버림)
const quotesSeq = parseInt(Math.random() * quotes.length) // --> 이렇게 사용 할 수도 있다.
const todayQuote = quotes[quotesSeq]
const printQuote = todayQuote.author
const printAuthor = todayQuote.quote
console.log(quotesSeq)
console.log(quotes[quotesSeq].author)
console.log(quotes[quotesSeq].quote)

quote.innerText = printQuote
author.innerText = ' - ' + printAuthor
