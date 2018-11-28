window.onload = function () {
	$('input[type=range]').on('input', function (e) {
		var min = e.target.min,
			max = e.target.max,
			val = e.target.value;
	
		$(e.target).css({
			'backgroundSize': (val - min) * 100 / (max - min) + '% 100%'
		});
	}).trigger('input');

	function changeBg () {
		var inputBg = document.querySelector(".input-bg"),
		placeholder = document.querySelector(".placeholder"),
		valueWidth = document.querySelector(".valueWidth");
        placeholder.style.width = inputBg.value + "px";
        valueWidth.innerHTML = inputBg.value + "&deg; C";
	
		function updateValue() {
			placeholder.style.width = this.value + "px";
			valueWidth.innerHTML = this.value + "&deg; C";
		}
	
		inputBg.addEventListener('change', updateValue);
		inputBg.addEventListener('mousemove', updateValue);
	}
	changeBg();

};