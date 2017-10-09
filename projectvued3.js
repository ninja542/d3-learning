window.onload=function(){
	var vm = new Vue({
		el: "#app1",
		data: {
			radius: 5
		},
		mounted: function(){
			var svg_container = d3.select("#app1").append("svg").attr("width", 500).attr("height", 500);
			svg_container.selectAll("circle").data(this.radius).enter().append("circle").attr("r", 20).style("fill", "green");
		},
		// methods: {
		// 	drawcircle: function(){
		// 		d3.select(svg_container).selectAll("circle").data(this.radius).enter().append("circle").attr("r", function(d){return d;}).style("fill", "green");
		// 	}
		// },
	});
};