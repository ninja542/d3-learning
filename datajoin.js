var numbers = [15, 8, 42, 4, 32];
var maxHeight = 100;
// var bars = d3.select("#chart").selectAll(".bar");
// bars.data(numbers)
// 		.style("height", function(d){ return d + "px";})
// 		.style("margin-top", function(d){return (maxHeight-d)+"px";});
// var labels = d3.select("#axis").selectAll(".label");
// labels.data(numbers).text(function(d){return d;});
function update() {
	var selection	= d3.select("#chart").selectAll(".bar").data(numbers)
		.style("height", function(d){ return d + "px";})
		.style("margin-top", function(d){return (maxHeight-d)+"px";});
	selection.enter().append("div")
		.attr("class", "bar")
		.style("height", function(d){ return d + "px";})
		.style("margin-top", function(d){return (maxHeight-d)+"px";})
		.on("click", function(e, i){
			numbers.splice(i, 1);
			update();
		});
	var labelSelection = d3.select("#axis").selectAll(".label")
		.data(numbers).text(function(d){return d;});
	labelSelection.enter().append("div").attr("class", "label").text(function(d){return d;});
	selection.exit().remove();
	labelSelection.exit().remove();
}
d3.select("button").on("click", function(e){
	if (numbers.length < 20){
		numbers.push(Math.round(Math.random() * maxHeight));
	}
	update();
});
update();