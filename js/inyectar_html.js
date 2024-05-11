
console.log("hola");



for (let i = 1; i <= 3; i++) {
	console.log(i);
	const nums = document.createElement("h2");
	nums.classList.add("nums");
	nums.textContent = "<div> div numero : " + i + "</div>";	
	numeros.appendChild(nums);
  }