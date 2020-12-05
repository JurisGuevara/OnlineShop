





document.getElementsByClassName('show-cards-btn')[0].onclick = function(){
	document.getElementsByClassName('show-cards-btn')[0].style.display = 'none'
	for(i=0; i<28; i++){
		document.querySelectorAll('.hidden-card')[i].style.display = 'block'
	}
}





