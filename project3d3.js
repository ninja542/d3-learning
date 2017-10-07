var jsonRectangles = [
{ "x_axis": 10, "y_axis": 30, "height": 20, "width":20, "color" : "green" },
{ "x_axis": 160, "y_axis": 60, "height": 20, "width":20, "color" : "purple" },
{ "x_axis": 70, "y_axis": 90, "height": 20, "width":20, "color" : "red" }];
var max_x = 0;
var max_y = 0;

for(var i = 0; i<jsonRectangles.length; i++){
	var temp_x, temp_y;
	var temp_x = jsonRectangles[i].x_axis + jsonRectangles[i].width;
	var temp_y = jsonRectangles[i].y_axis + jsonRectangles[i].height;
	if (temp_x > max_x){
		max_x = temp_x;
	}
	if (temp_y > max_y){
		max_y = temp_y;
	}
}
var svg_container = d3.select("body").append("svg").attr("width", max_x+20+30).attr("height", max_y+20).attr("transform", "translate(30,30)");
var rectangles = svg_container.selectAll("rect")
	.data(jsonRectangles)
	.enter()
	.append("rect");
var rectangleAttributes = rectangles.attr("x", function(d){return d.x_axis;})
	.attr("y", function(d){return d.y_axis;})
	.attr("height", function(d){return d.height;})
	.attr("width", function(d){return d.width;})
	.style("fill", function(d){return d.color;});
var xAxisScale = d3.scaleLinear().domain([0, max_x]).range([0, max_x]);
var xAxis = d3.axisBottom(xAxisScale);
var xAxisGroup = svg_container.append("g").call(xAxis);
var yAxisScale = d3.scaleLinear().domain([0, max_y]).range([0, max_y]);
var yAxis = d3.axisRight(yAxisScale);
var yAxisGroup = svg_container.append("g").call(yAxis);
// yAxisGroup.attr("transform", "rotate(90)");