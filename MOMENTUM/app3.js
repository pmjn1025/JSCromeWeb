// event.prevent 복습(a태그로)
const link = document.querySelector('a')

function hanldeLinkClick(event) {
  event.preventDefault()
  console.log(event)
  console.dir(event)
  //alert('clicked')
}

link.addEventListener('click', hanldeLinkClick)
