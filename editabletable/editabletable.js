var app = new Vue({
	el: "#app",
	data: {
		edit: false,
		coordinates: [
			{x: 4, y: 8},
			{x: 5, y: 9},
			{x: 6, y: 2},
			{x: 9, y: 10},
			{x: 8, y: 4}
		]
	},
	methods: {
		editCoordx: function(coordx){
			this.editCoordx = coordx;
		},
		addRow: function(e){
			this.coordinates.push({x: null, y: null});
		}
	},
	watch: {
		coordinates: {
			handler: function(val){
				//insert d3 chart code
				console.log(val);
			},
			deep: true
		}
	}
});