
    function calculateFactorial(n) {

        var fieldForNumber = document.getElementById('fieldForNumber'),
            calculateButton = document.getElementById('calculateButton'),
            result = document.getElementById('result'),
            multiplier = 1;


        for (var i = 1; i <= n; i++) {

            multiplier *= i;
        }

        result.innerHTML = multiplier;

        if (isNaN(n) || (n < 0) || ( n === "" )) {
            result.innerHTML = "Invalid number";
        }

    }
    calculateButton.onclick = function () {

        calculateFactorial(fieldForNumber.value);

    };