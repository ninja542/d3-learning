var initialScaleData = [0, 1000, 3000, 2000, 5000, 4000, 7000, 6000, 9000, 8000, 10000];
var newScaleData = [];
var linearScale = d3.scaleLinear().domain([d3.min(initialScaleData), d3.max(initialScaleData)]).range([0, 100]);
for (var i = 0; i < initialScaleData.length; i++){
	newScaleData[i] = linearScale(initialScaleData[i]);
}

console.log(newScaleData);