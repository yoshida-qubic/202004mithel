
'use strict';

const w = $(window).width();
const spwidth = 767;
const tabletwidth = 1025;

{
	const openMenu = document.getElementById('menu_open');
	const Nav = document.querySelector('header nav');

	openMenu.addEventListener('click', function () {
		openMenu.classList.toggle('active');
		Nav.classList.toggle('active');
	});
}


$(function () {

	// JQueryの範囲

	// スクロール時にフェードイン
	$(window).on('scroll load', function(){
		$('.fadein').each(function(){
			let targetElement = $(this).offset().top;
			let scroll = $(window).scrollTop();
			let windowHeight = $(window).height();
			if (w > spwidth) {
				if (scroll > targetElement - windowHeight + 200) {
					$(this).css('opacity', '1');
					$(this).css('transform', 'translateY(0)');
				}
			} else {
				if (scroll > targetElement - windowHeight - 200) {
					$(this).css('opacity', '1');
					$(this).css('transform', 'translateY(0)');
				}
			}
		});
	});

});