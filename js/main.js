(() =>{
	console.log('fired!');

	const button1 		= 	document.querySelector('.button1'),
		  button2 		= 	document.querySelector('.button2'),
		  cover1 		= 	document.querySelector('.cover1'),
		  cover2 		= 	document.querySelector('.cover2'),
		  return1 		= 	document.querySelector('.return1'),
		  return2 		= 	document.querySelector('.return2');

	function openCover1() {
		cover1.classList.add('cover1-on');
	}

	function closeCover1() {
		cover1.classList.remove('cover1-on');
	}

	function openCover2() {
		cover2.classList.add('cover2-on');
	}

	function closeCover2() {
		cover2.classList.remove('cover2-on');
	}

	button1.addEventListener('click', openCover1);

	return1.addEventListener('click', closeCover1);

	button2.addEventListener('click', openCover2);

	return2.addEventListener('click', closeCover2);


})();