poopile = '💩';

var sendfnc = function(){
	var evt = new Event('input', {
		bubbles: true
	});

	var input = document.querySelector("div.input");
	input.innerHTML = poopile;
	input.dispatchEvent(evt);

	document.querySelector(".icon-send").click();
	poopile = poopile+'💩';
}

setInterval(function(){
  setTimeout(sendfnc(), 2000);
}, 2000);
