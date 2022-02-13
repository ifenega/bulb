
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