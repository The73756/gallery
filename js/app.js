const sliderMain = new Swiper('.slider-main', {
	freeMode: true,
	centeredSlides: true,
	mousewheel: true,
	parallax: true,
	breakpoints: {
		0: {
			slidesPerView: 1.2,
			spaceBetween: 20
		},
		680: {
			slidesPerView: 2.5,
			spaceBetween: 30
		},

		1200: {
			slidesPerView: 3.5,
			spaceBetween: 30
		}
	}
});

let descr = document.querySelector('.descr');
sliderMain.on('slideChange', e => {
	sliderMain.activeIndex > 0 ? descr.classList.add('hidden') : descr.classList.remove('hidden')
});

const modal = new GraphModal();
new SimpleBar();
