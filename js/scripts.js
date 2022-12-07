(function() {
	'use strict';

	window.addEventListener('scroll', () => {
		if ( document.querySelector('.header') ) {
			const header = document.querySelector('.header');

			document.documentElement.scrollTop <= 0 ?
				header.classList.remove('_scroll') : header.classList.add('_scroll');
		}
	});

	if ( document.querySelector('.header__burger')
		&& document.querySelector('.header-mobile') ) {
		const headerBurger = document.querySelector('.header__burger'),
			headerMobile = document.querySelector('.header-mobile');

		headerBurger.addEventListener('click', (e) => {
			e.stopPropagation();
			headerBurger.classList.toggle('_active');
			headerMobile.classList.toggle('_active');
		})

		document.addEventListener('click', (e) => {
			if ( !headerMobile.querySelector('.header-mobile__content').contains(e.target) ) {
				headerBurger.classList.remove('_active');
				headerMobile.classList.remove('_active');
			}
		});
	}

	if ( document.querySelector('.carousel__init') ) {
		let carousel = document.querySelectorAll('.carousel__init');

		carousel.forEach((item) => {
			let itemCarousel = item.closest('.carousel'),
				itemNavs = itemCarousel.querySelector('.carousel__navs'),
				itemControls = itemCarousel.querySelector('.carousel__controls'),
				itemNav = itemCarousel.querySelectorAll('.carousel__nav');

			tns({
				container: item,
				items: 4,
				loop: false,
				gutter: 30,
				mouseDrag: true,
				swipeAngle: false,
				speed: 1000,
				nav: true,
				navContainer: itemNavs,
				controls: true,
				controlsContainer: itemControls,
				responsive: {
					0: {
						items: 1,
						fixedWidth: 270,
						gutter: 20
					},
					575: {
						items: 2,
						fixedWidth: false,
						gutter: 30
					},
					767: {
						items: 3
					},
					991: {
						items: 4
					}
				},
				onInit: (info) => {
					itemNav.forEach((nav, navIt) => {
						navIt < info.pages ?
							nav.classList.add('_show') : nav.classList.remove('_show');
					});
				}
			});
		});
	}

	if ( document.querySelector('.search__input')
		&& document.querySelector('.search__reset') ) {
		const searchInput = document.querySelector('.search__input'),
			searchReset = document.querySelector('.search__reset');

		searchInput.addEventListener('keyup', () => {
			searchInput.value ?
				searchReset.classList.add('_active') : searchReset.classList.remove('_active');
		});

		searchReset.addEventListener('click', () => {
			searchReset.classList.remove('_active');
		})
	}

	if ( document.querySelector('.header__search')
		&& document.querySelector('.search') ) {
		const headerSearch = document.querySelector('.header__search'),
			search = document.querySelector('.search'),
			searchWrap = document.querySelector('.search__wrap .container');

		headerSearch.addEventListener('click', () => {
			search.classList.toggle('_active');
		})

		document.addEventListener('click', (e) => {
			if ( !headerSearch.contains(e.target) && !searchWrap.contains(e.target) ) {
				search.classList.remove('_active');
			}
		});
	}

	if ( document.querySelector('.product__count') ) {
		const productCount = document.querySelectorAll('.product__count');

		productCount.forEach((item) => {
			let productCountInput = item.querySelector('.product__count-input'),
				productCountPlus = item.querySelector('.product__count-button._plus'),
				productCountMinus = item.querySelector('.product__count-button._minus');

			productCountPlus.addEventListener('click', () => {
				productCountInput.value++;
			});

			productCountMinus.addEventListener('click', () => {
				productCountInput.value > 1 ? productCountInput.value-- : '';
			});
		});
	}

	if ( document.querySelector('.dropdown li span') ) {
		const dropdownListControl = document.querySelectorAll('.dropdown li span');

		dropdownListControl.forEach((item) => {
			item.addEventListener('click', () => {
				let itemLi = item.closest('li'),
					sublist = itemLi.querySelector('ul');

				itemLi.classList.toggle('_active');
				sublist.classList.toggle('_active');
			})
		})
	}

	if ( document.querySelector('.product') ) {
		const products = document.querySelectorAll('.product');

		products.forEach((item) => {
			item.addEventListener('mouseenter', () => {
				item.classList.add('_active');
			});

			item.addEventListener('mouseleave', () => {
				setTimeout(() => {
					item.classList.remove('_active');
				}, 200)
			});
		});
	}

	if ( document.querySelector('.product-page__gallery-init') ) {
		tns({
			container: '.product-page__gallery-init',
			items: 1,
			loop: false,
			gutter: 0,
			mouseDrag: true,
			swipeAngle: false,
			speed: 1000,
			nav: true,
			navContainer: '.product-page__thumbs',
			controls: false
		});
	}

	/*window.addEventListener("DOMContentLoaded", () => {
		[].forEach.call( document.querySelectorAll('input[type="tel"]'), (input) => {
			let keyCode;

			function mask(event) {
				event.keyCode && (keyCode = event.keyCode);
				let pos = this.selectionStart;
				if (pos < 3) event.preventDefault();
				let matrix = "+7 (___) ___-__-__",
					i = 0,
					def = matrix.replace(/\D/g, ""),
					val = this.value.replace(/\D/g, ""),
					new_value = matrix.replace(/[_\d]/g, function(a) {
						return i < val.length ? val.charAt(i++) || def.charAt(i) : a
					});
				i = new_value.indexOf("_");
				if (i != -1) {
					i < 5 && (i = 3);
					new_value = new_value.slice(0, i)
				}
				let reg = matrix.substr(0, this.value.length).replace(/_+/g,
					function(a) {
						return "\\d{1," + a.length + "}"
					}).replace(/[+()]/g, "\\$&");
				reg = new RegExp("^" + reg + "$");
				if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
				if (event.type == "blur" && this.value.length < 5)  this.value = ""
			}

			input.addEventListener("input", mask, false);
			input.addEventListener("focus", mask, false);
			input.addEventListener("blur", mask, false);
			input.addEventListener("keydown", mask, false);
		});
	});*/

})()