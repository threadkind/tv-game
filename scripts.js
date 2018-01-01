document.getElementById("buttonContainer").addEventListener("click", function(){

	var random = (Math.random() * 360) + 360;
	var wheel = document.getElementById("wheel");
	var spin = "rotate(" + random + "deg)";

	wheel.removeAttribute("style");
	wheel.style.transition = "transform 3s ease-in-out";
	wheel.style.transform = spin;
});

