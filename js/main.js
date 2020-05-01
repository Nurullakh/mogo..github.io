const links = document.querySelectorAll('a[href*="#"]')

links.forEach((link) => {
	link.addEventListener('click', function(e) {
		e.preventDefault()
		const blockId = link.getAttribute('href')
		document.querySelector('' + blockId).scrollIntoView({
			behavior: "smooth",
			block: "start"
		})
	})
})

const accordionBtn = document.querySelectorAll('.accordion__header')
let n = 0
accordionBtn.forEach(btn => {
	btn.addEventListener('click', e => {
		if (btn.parentElement.classList.contains('active')) {
			document.querySelectorAll('.accordion__item').forEach(item => {
				item.classList.remove('active')
			})
		} else {
			document.querySelectorAll('.accordion__item').forEach(item => {
				item.classList.remove('active')
			})
			btn.parentElement.classList.add('active')
		}

	})
})
let slider = document.querySelectorAll('.slider')
let prev = document.querySelector('.reviews-slider .prev')
let next = document.querySelector('.reviews-slider .next')
let prevTwo = document.querySelector('.work .prev')
let nextTwo = document.querySelector('.work .next')
let sliderText = document.querySelectorAll('.reviews-slider .slider__text')
let sliderTextTwo = document.querySelectorAll('.work .slider__text')

let indexOne = 0
let indexTwo = 0
slider.forEach(s=>{
	s.addEventListener('click', (e) => {
		e.preventDefault()
		if (e.target === prev) {
			if (indexOne === 0) {
				indexOne = sliderText.length-1
				sliderText[0].classList.remove('active')
				sliderText[indexOne].classList.add('active')
			} else {
				sliderText[indexOne].classList.remove('active')
				indexOne--
				sliderText[indexOne].classList.add('active')
			}
		}
		if (e.target === next) {
			if (indexOne === sliderText.length-1) {
				sliderText[indexOne].classList.remove('active')
				indexOne = 0
				sliderText[indexOne].classList.add('active')
			} else {
				sliderText[indexOne].classList.remove('active')
				indexOne++
				sliderText[indexOne].classList.add('active')
			}

		}
		if (e.target === prevTwo) {
			if (indexTwo === 0) {
				indexTwo = sliderTextTwo.length-1
				sliderTextTwo[0].classList.remove('active')
				sliderTextTwo[indexTwo].classList.add('active')
			} else {
				sliderTextTwo[indexTwo].classList.remove('active')
				indexTwo--
				sliderTextTwo[indexTwo].classList.add('active')
			}
		}
		if (e.target === nextTwo) {
			if (indexTwo === sliderTextTwo.length-1) {
				sliderTextTwo[indexTwo].classList.remove('active')
				indexTwo = 0
				sliderTextTwo[indexTwo].classList.add('active')
			} else {
				sliderTextTwo[indexTwo].classList.remove('active')
				indexTwo++
				sliderTextTwo[indexTwo].classList.add('active')
			}

		}
	})
})
