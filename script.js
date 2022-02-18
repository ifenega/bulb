
const toggle = document.querySelector('.toggle')
const navigation = document.querySelector('.navigation')
const img = document.querySelector('.fam');
const img2 = document.querySelector('.yam');
console.log (img.classList)

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active')
  navigation.classList.toggle('active')
  img.classList.toggle('active')
  toggle.classList.toggle('btn2')
  toggle.classList.toggle('btn')
  img2.classList.toggle('active')

  console.log(toggle.classList)
  console.log(navigation.classList)
})


//carousel 


let currentItem = 0
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const sliderInfo = document.querySelectorAll('.carousel-content')
console.log(sliderInfo)



document.querySelectorAll(".carousel-item").forEach(carousel => {
  const contents = carousel.querySelectorAll(".carousel-content");
  const buttonsHtml = Array.from(contents, ()=> {
    return `<span class="carousel_button"></span>`
  })

  carousel.insertAdjacentHTML("beforeend",`
      <div class="carousel-nav">
        ${buttonsHtml.join("")}
      </div>
  `)

  // making the buttons active

  const buttons = carousel.querySelectorAll(".carousel_button")

  buttons.forEach((button,i) => {
    
    prev.addEventListener('click', ()=> {
      contents.forEach(content => content.classList.remove('active'))
      buttons.forEach(button => button.classList.remove('active'))

      contents[i-1].classList.add('active')
      button.classList.add('active')
    })
    button.addEventListener('click', () => {
      // button.classList.toggle('active')
      contents.forEach(content => content.classList.remove('active'))
      buttons.forEach(button => button.classList.remove('active'))

      contents[i].classList.add('active')
      button.classList.add('active')

    })
  })
    contents[currentItem].classList.add('active')
    buttons[currentItem].classList.add('active')
})









