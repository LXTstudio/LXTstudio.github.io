var my_arrayFurniture = [

"	http://www.made.com/new-in	",
"	http://www.worldstores.co.uk/	",
"	http://www.habitat.co.uk/	"

];
var riFurniture = Math.floor(Math.random() * my_arrayFurniture.length); // Random Index position in the array
document.getElementById("IntroAnimation").src = my_arrayFurniture[riFurniture];
document.getElementById("IntroAnimation").src = fileFurniture;
var fileFurniture = my_arrayFurniture[riFurniture];