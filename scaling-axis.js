var data = d3.csv("http://127.0.0.1:8000/firstradius1.csv", function(d){
	// return{
	// 	time: d.Time,
	// 	potential: d.Potential,
	// 	current: d.Current
	// };
	console.log(d);
});
console.log(data);