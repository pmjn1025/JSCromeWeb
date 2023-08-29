const h1 = document.querySelector('div.hello:first-child h1')
console.log(h1)
console.dir(h1)

function handleH1Click() {
  //   console.log(h1.style.color)
  //   h1.style.color = 'blue'
  //   console.log(h1.style.color)

  const currentColor = h1.style.color
  let newColor

  if (h1.style.color === 'blue') {
    newColor = 'tomato'
  } else {
    newColor = 'blue'
  }

  h1.style.color = newColor
}

h1.addEventListener('click', handleH1Click)
