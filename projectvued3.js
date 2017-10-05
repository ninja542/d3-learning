window.onload=function(){
	var vm = new Vue({
		data: {
			radius: 5
		},
		computed: {
			drawcircle: function(){
				d3.select("#svgcontainer").selectAll("circle").data(this.radius).enter().append("circle").attr("r", function(d){return d;}).style("fill", "green");
			}
		},
	});
	vm.$mount("#app1");
};