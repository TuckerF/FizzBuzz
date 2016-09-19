$(document).ready(function(){
	for(var numbers = 1; numbers <= 100; numbers++){
		if (numbers % 15 == 0)
			document.write("FizzBuzz" + "<br>" + "<br>");
		else if (numbers % 3 == 0)
			document.write("Fizz" + "<br>" + "<br>");
		else if (numbers % 5 == 0)
			document.write("Buzz" + "<br>" + "<br>");
		else
			document.write(numbers + "<br>" + "<br>");

	};
});