

// set the dimensions and margins of the graph
	const margin1 = {top: 30, right: 30, bottom: 70, left: 60},
	width1 = 860 - margin1.left - margin1.right,
	height1 = 700 - margin1.top - margin1.bottom;

	//width = window.innerWidth - margin.left - margin.right - 200;
	//height = window.innerHeight - margin.top - margin.bottom - 20;

	//width1 = document.getElementById(vis.parentElement).getBoundingClientRect().width1 - vis.margin1.left - vis.margin1.right;
	//height1 = document.getElementById(vis.parentElement).getBoundingClientRect().height1 - vis.margin1.top - vis.margin1.bottom

	// append the svg object to the body of the page
	const svg1 = d3.select("#CDD")
	.append("svg")
	.attr("width", width1 + margin1.left + margin1.right)
	.attr("height", height1 + margin1.top + margin1.bottom)
	.append("g")
	.attr("transform", `translate(${margin1.left}, ${margin1.top})`);

	// Initialize the X axis
	const x = d3.scaleBand()
	.range([ 0, width1+50])
	.padding(1);
	const xAxis = svg1.append("g")
	.attr("transform", `translate(0, ${height1})`)

	// Initialize the Y axis
	const y = d3.scaleLinear()
	.range([ height1, 0]);
	const yAxis = svg1.append("g")
	.attr("class", "myYaxis")


	// A function that create / update the plot for a given variable:
	function update(selectedVar) {

	// Parse the Data
	d3.csv("data/CDD_cities.csv").then( function(data) {

		// X axis
		x.domain(data.map(function(d) { return d.City; }))
		xAxis.transition().duration(1000).call(d3.axisBottom(x))

		// Add Y axis
		y.domain([0, d3.max(data, function(d) { return +d[selectedVar] }) ]);
		yAxis.transition().duration(1000).call(d3.axisLeft(y));

		// variable u: map data to existing circle
		const j = svg1.selectAll(".myLine")
			.data(data)
		// update lines
		j
			.join("line")
			.attr("class", "myLine")
			.transition()
			.duration(1000)
			.attr("x1", function(d) { return x(d.City); })
			.attr("x2", function(d) { return x(d.City); })
			.attr("y1", y(0))
			.attr("y2", function(d) { return y(d[selectedVar]); })
			.attr("stroke", "grey")


		// variable u: map data to existing circle
		const u = svg1.selectAll("circle")
			.data(data)
		// update bars
		u
			.join("circle")
			.transition()
			.duration(1000)
			.attr("cx", function(d) { return x(d.City); })
			.attr("cy", function(d) { return y(d[selectedVar]); })
			.attr("r", 8)
			.attr("fill", "#faa345");



	})

}

	// Initialize plot
	update('2050 CDD')
