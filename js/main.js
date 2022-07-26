//Адаптив под explorer
$(window).resize(function(event){
	mainscreen();
})

function mainscreen(){
	let h = $(window).outerHeight();
	$('.mainscreen').css('min-height',h);
}
	mainscreen();

//Скролл на fullscreen

const collection = document.querySelectorAll('a.goto');

if(collection.length > 0){
	collection.forEach(link => {
		link.addEventListener("click", onMenuLink);
	});
}
function onMenuLink(e){
		const href = this.getAttribute('href').substring(1)
		const scrollTarget = document.getElementById(href)
		const topOffset = 0
		const elementPosition = scrollTarget.getBoundingClientRect().top
		const offsetPosition = elementPosition - topOffset

		window.scrollBy({
			top: offsetPosition,
         behavior: 'smooth'
		})
		e.preventDefault();
}
