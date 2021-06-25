$(function(){
	$('.spoiler').click(handler);
	$('.mini-spoiler').click(miniSpoiler);
})

function handler(e) {
	let target = $(e.target);

	if ( target.is("div.spoiler")) {
		target.siblings('article').toggleClass('hidden-block');
		target.children('img').toggleClass('arrow-rotate');
	}
	if ( target.is("img") ){
		target.parent().siblings('article').toggleClass('hidden-block');
		target.toggleClass('arrow-rotate');
	}
	if ( target.is("span") ){
		target.parent().siblings('article').toggleClass('hidden-block');
		target.siblings('img').toggleClass('arrow-rotate');
	}
	if ( target.is("b") ){
		target.parent().parent().siblings('article').toggleClass('hidden-block');
		target.parent().siblings('img').toggleClass('arrow-rotate');
	}
}
function miniSpoiler(e) {
	let target = $(e.target);
	console.log(target)

	function offOn(element) {
		if(element.text() == 'Скрыть'){
			element.text('Показать полностью...')
		}else{
			element.text('Скрыть')
		}
	}

	if ( target.is("span.mini-spoiler")) {
		target.siblings('ul').children('li:not(:nth-of-type(1)):not(:nth-of-type(2))').toggleClass('hidden-block');
		offOn(target)
	}
}

/*
function dtAnim(entry) {
	console.log(entry);
	entry.forEach((change) => {
		if(change.isIntersecting){
			change.target.classList.add('dt-anim-show');
		}
	});
}

let observer = new IntersectionObserver(dtAnim, {threshold: [0.5]});
let elements = $('.dt-anim');
for(let key of elements) observer.observe(key);*/
