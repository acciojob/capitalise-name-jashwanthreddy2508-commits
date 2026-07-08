//your JS code here. If required.
function toupper(str) {
	return str.toUpperCase()
}
const input= document.getElementById("fname");
input.addEventListener("blur", function () {
	input.value= toupper(this.value)
	
})