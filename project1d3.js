window.onload = function(){
var thedata = [1, 2, 3];
var p =d3.select("body").selectAll("p")
	.data(thedata)
	.enter()
	.append("p")
	.text(function(d, i){ return "i = " + i + " d = " + d; });
};