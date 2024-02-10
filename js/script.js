
const navigasiNav = document.querySelector('.navigasi-nav');

document.querySelector('#humberger-menu').onclick = (e) => {
	navigasiNav.classList.toggle('active');
	e.preventDefault();
};

const humberger = document.querySelector('#humberger-menu');

document.addEventListener('click', function(e) {
	if (!humberger.contains(e.target) && !navigasiNav.contains(e.target)) {
		navigasiNav.classList.remove('active');
	}
});

// Togle class active search-form //

	const searchForm = document.querySelector('.search-form');
	const searchBox = document.querySelector('#search-box');

	document.querySelector('#search-button').onclick = (e) => {
		searchForm.classList.toggle('active');
		searchBox.focus();
		e.preventDefault();
	};

	const sb = document.querySelector('#search-button');

	document.addEventListener('click', function(e) {
		if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
			searchForm.classList.remove('active');
		}
	});

// closing Togle class active search-form//

ScrollReveal({
	reset:true, 
	distance: '100px',
	duration: 1800,
	delay: 200 
});


ScrollReveal().reveal('.about h2, .menu h2, .ourcontact h2', {origin: 'top'});
ScrollReveal().reveal('.about .cafe, .menu .menucafe, .menu p, .ourcontact .contact', {origin: 'bottom'});
ScrollReveal().reveal('', {origin: 'left'});
ScrollReveal().reveal('', {origin: 'right'});
