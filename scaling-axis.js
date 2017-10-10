var eeData = d3.csvParseRows("https://raw.githubusercontent.com/ninja542/d3-learning/master/firstradius1.csv", function(d){
	return {
		time: +d.Time,
		potential: +d.Potential,
		current: +d.Current
	};
});
console.log(eeData);