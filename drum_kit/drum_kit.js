
function playSound(event){
	var audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
	var key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
	if (audio==null) return ;
	audio.currentTime=0; //to rewind the audio to start
	audio.play();
	key.classList.add('playing');
	
}

function removetransition(event) {
 this.classList.remove('playing');
}

const keys=document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener("transitionend", removetransition)); //key denotes its an element and => denotes you can continue the loop assuming key an elemtnt
 window.addEventListener('keydown',playSound);


