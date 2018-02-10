window.onload = function () {

	"use strict";
	var paint = document.querySelector(".paint"),
		paintColor = document.querySelector(".paint-color"),
		body = document.querySelector(".body-index2"),
		paintSize = document.querySelector(".paint-size"),
		buttonRect = document.querySelector(".button-rect"),
		buttonCircle = document.querySelector(".button-circle"),
		paintSizeVal = document.querySelector(".paint-size-val"),
		active = false,
		borderRad = 0;

	paintSizeVal.innerText = paintSize.value;

	paintSize.oninput = function () {
		paintSizeVal.innerHTML = this.value;
	};
	paintColor.oninput = function () {
		this.innerHTML = this.value;
	};

	var drawRect = function (e) {
		if (active === false) return;
		var x = e.clientX + 12;
		var y = e.clientY + 2;
		var span = document.createElement("span");
		span.style.top = y + "px";
		span.style.left = x + "px";
		span.style.borderRadius = borderRad;
		span.style.height = paintSize.value + "px";
		span.style.width = paintSize.value + "px";
		body.appendChild(span);
		span.style.backgroundColor = paintColor.value;
	};

	var drawCircle = function (e) {
		if (active === false) return;
		var x = e.clientX + 12;
		var y = e.clientY + 2;
		var span = document.createElement("span");
		span.style.top = y + "px";
		span.style.left = x + "px";
		span.style.borderRadius = "50%";
		span.style.height = paintSize.value + "px";
		span.style.width = paintSize.value + "px";
		body.appendChild(span);
		span.style.backgroundColor = paintColor.value;

	};
	var drawActive = function () {
		active = true;
	};
	var drawNotActive = function () {
		active = false;
	};
	buttonCircle.onclick = function () {
		paint.removeEventListener("mousemove", drawRect);
		paint.addEventListener("mousemove", drawCircle);
	};
	buttonRect.onclick = function () {
		paint.removeEventListener("mousemove", drawCircle);
		paint.addEventListener("mousemove", drawRect);
		paintSizeVal.innerHTML = paintSize.value;
	};
	paint.addEventListener("mousedown", drawActive);
	paint.addEventListener("mouseup", drawNotActive);

};
