window.onload = function(){
	var circleradii = [40, 20, 10];
	var svgcontainer = d3.select("body").append("svg")
		.attr("width", 600)
		.attr("height", 100);
	var circles = svgcontainer.selectAll("circle")
		.data(circleradii)
		.enter()
		.append("circle");
	var circleattr = circles
		.attr("cx", 50)
		.attr("cy", 50)
		.attr("r", function(d){return d;})
		.attr("fill", function(d){
			var returncolor;
			if(d===40){
				returncolor = "green";}
			else if (d===20){
				returncolor = "purple";}
			else if (d ===10){
				returncolor = "blue";}
			return returncolor;
		});
	var spacecircles = [30, 70, 110];
	var jsoncircles = [{
		"x_axis": 30,
		"y_axis": 30,
		"radius": 20,
		"color": "green"
	}, {
		"x_axis": 70,
		"y_axis": 70,
		"radius": 20,
		"color": "purple"
	}, {
		"x_axis": 110,
		"y_axis": 110,
		"radius": 20,
		"color": "red"
	}];
	var svgcontainersquare = d3.select("body").append("svg")
		.attr("width", 200)
		.attr("height", 200)
		.style("border", "1px solid black");
	var positioncircles = svgcontainersquare.selectAll("circle")
		.data(jsoncircles)
		.enter()
		.append("circle");
	var positioncircleattr = positioncircles
		.attr("cx", function(d){return d.x_axis;})
		.attr("cy", function(d){return d.y_axis;})
		.attr("r", function(d){return d.radius;})
		.style("fill", function(d){return d.color;});
};
// var circleradii = [40, 20, 10];
// var jsoncircleradii = [
// {
// 	"radius": 40,
// 	"color": "green"
// }, {
// 	"radius": 20,
// 	"color": "purple"
// }, {
// 	"radius": 10,
// 	"color": "blue"
// }];
// var svgcontainer = d3.select("body").append("svg")
// 	.attr("width", 600)
// 	.attr("height", 100);
// var circles = svgcontainer.selectAll("circle")
// 	.data(jsoncircleradii)
// 	.enter()
// 	.append("circle");
// var circleattr = circles
// 	.attr("cx", 50)
// 	.attr("cy", 50)
// 	.attr("r", function(d){return d.radius;})
// 	.attr("fill", function(d){return d.color});