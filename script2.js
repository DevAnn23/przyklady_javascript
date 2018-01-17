window.onload = function () {

	var paint = document.querySelector(".paint");
	var paintColor = document.querySelector(".paint-color");
	var body = document.querySelector(".body-index2");
	var paintSize = document.querySelector(".paint-size");
	var buttonRect = document.querySelector(".button-rect");
	var buttonCircle = document.querySelector(".button-circle");
	var paintSizeVal = document.querySelector(".paint-size-val");
	var active = false;
	var borderRad = 0;

	paintSizeVal.innerText = paintSize.value;

	paintSize.oninput = function () {
		paintSizeVal.innerHTML = this.value;
	}
	paintColor.oninput = function () {
		this.innerHTML = this.value;
	}

	const drawRect = function (e) {
		if (active === false) return;
		const x = e.clientX + 12;
		const y = e.clientY + 2;
		const span = document.createElement("span");
		span.style.top = y + "px";
		span.style.left = x + "px";
		span.style.borderRadius = borderRad;
		span.style.height = paintSize.value + "px";
		span.style.width = paintSize.value + "px";
		body.appendChild(span);
		span.style.backgroundColor = paintColor.value;
	}

	const drawCircle = function (e) {
		if (active === false) return;
		const x = e.clientX + 12;
		const y = e.clientY + 2;
		const span = document.createElement("span");
		span.style.top = y + "px";
		span.style.left = x + "px";
		span.style.borderRadius = "50%";
		span.style.height = paintSize.value + "px";
		span.style.width = paintSize.value + "px";
		body.appendChild(span);
		span.style.backgroundColor = paintColor.value;

	}
	const drawActive = function () {
		active = true;
	}
	const drawNotActive = function () {
		active = false;
	}
	buttonCircle.onclick = function () {
		paint.removeEventListener("mousemove", drawRect);
		paint.addEventListener("mousemove", drawCircle);
	}
	buttonRect.onclick = function () {
		paint.removeEventListener("mousemove", drawCircle);
		paint.addEventListener("mousemove", drawRect);
		paintSizeVal.innerHTML = paintSize.value;
	}
	paint.addEventListener("mousedown", drawActive);
	paint.addEventListener("mouseup", drawNotActive);

};
