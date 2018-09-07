window.onload=function(){
	var vm = new Vue({
		el: "#app1",
		data: {
			radius: [5]
		},
		mounted: function(){
			var svg_container = d3.select("#app1").append("svg").attr("width", 500).attr("height", 500);
			console.log(this.radius);
			circle = svg_container.selectAll("circle").data(this.radius).enter().append("circle")
				.attr("r", function(d){return d;})
				.attr("cx", 250)
				.attr("cy", 250)
				.style("fill", "green");
		},
		watch: {
			radius: function(newValue){
				circle.attr("r", this.radius);
			}
		},
	});
};