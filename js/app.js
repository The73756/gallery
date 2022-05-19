const sliderMain = new Swiper('.slider-main', {
	observer: true,
	observeParents: true,
	freeMode: true,
	centeredSlides: true,
	mousewheel: true,
	parallax: true,
	sensitivity: 10,
	breakpoints: {
		0: {
			slidesPerView: 1.2,
			spaceBetween: 20
		},
		680: {
			slidesPerView: 3.5,
			spaceBetween: 30
		}
	}
});

const sliderBg = new Swiper('.slider-bg', {
	observer: true,
	observeParents: true,
	centeredSlides: true,
	parallax: true,
	sensitivity: 10,
	slidesPerView: 3.5,
});
sliderMain.controller.control = sliderBg;

document.querySelectorAll('.slider__item').forEach(item => {  
	item.addEventListener('click', event =>{
		new GraphModal().open('first');
	})
});

let descr = document.querySelector('.descr');
sliderMain.on('slideChange', e => {
	sliderMain.activeIndex > 0 ? descr.classList.add('hidden') : descr.classList.remove('hidden')
});

swiper.update();

new SimpleBar(document.getElementById('simplebar'));
