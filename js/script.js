
const navigasiNav = document.querySelector('.navigasi-nav');

document.querySelector('#humberger-menu').onclick = () => {
	navigasiNav.classList.toggle('active');
};

const humberger = document.querySelector('#humberger-menu');

document.addEventListener('click', function(e) {
	if (!humberger.contains(e.target) && !navigasiNav.contains(e.target)) {
		navigasiNav.classList.remove('active');
	}
});

ScrollReveal({
	reset:true, 
	distance: '100px',
	duration: 1800,
	delay: 200 
});


ScrollReveal().reveal('.about h2, .menu h2, .menu p, .kontak h2', {origin: 'top'});
ScrollReveal().reveal('.about .tentang, .menu .menucafe, .kontak .kontak1', {origin: 'bottom'});
ScrollReveal().reveal('', {origin: 'left'});
ScrollReveal().reveal('', {origin: 'right'});
