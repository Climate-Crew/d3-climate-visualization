
/*
 * Timeline - ES6 Class
 * @param  parentElement 	-- the HTML element in which to draw the visualization
 * @param  data             -- the data the timeline should use
 */

class Timeline {

	// constructor method to initialize Timeline object
	constructor(parentElement, data){
		this._parentElement = parentElement;
		this._data = data;

		// No data wrangling, no update sequence
		this._displayData = data[0];

		console.log("Timeline data loaded", this._displayData)
	}

	// create initVis method for Timeline class
	initVis() {

		// store keyword this which refers to the object it belongs to in variable vis
		let vis = this;

		vis.margin = {top: 0, right: 40, bottom: 30, left: 40};

		vis.width = document.getElementById(vis._parentElement).getBoundingClientRect().width - vis.margin.left - vis.margin.right;
		vis.height = document.getElementById(vis._parentElement).getBoundingClientRect().height  - vis.margin.top - vis.margin.bottom;

		// SVG drawing area
		vis.svg = d3_7.select("#" + vis._parentElement).append("svg")
			.attr("width", vis.width + vis.margin.left + vis.margin.right)
			.attr("height", vis.height + vis.margin.top + vis.margin.bottom)
			.append("g")
			.attr("transform", "translate(" + vis.margin.left + "," + vis.margin.top + ")");

		// Scales and axes
		vis.x = d3_7.scaleTime()
			.range([0, vis.width])
			.domain(d3_7.extent(vis._displayData, function(d) { return d.Year; }));

		vis.y = d3_7.scaleLinear()
			.range([vis.height, 0])
			.domain([0, d3_7.max(vis._displayData, function(d) { return d.Expenditures; })]);

		vis.xAxis = d3_7.axisBottom()
			.scale(vis.x);

		// SVG area path generator
		vis.area = d3_7.area()
			.x(function(d) { return vis.x(d.Year); })
			.y0(vis.height)
			.y1(function(d) { return vis.y(d.Expenditures); });

		// Draw area by using the path generator
		vis.svg.append("path")
			.datum(vis._displayData)
			.attr("fill", "#ccc")
			.attr("d", vis.area);

		// Initialize brush component
		let brush = d3_7.brushX()
			.extent([[0, 0], [vis.width, vis.height]])
			.on("brush", brushed);

        // TO-DO: Append brush component here
		vis.svg.append("g")
			.attr("class", "brush")
			.call(brush)
			.selectAll("rect")
			.attr("y", -6)
			.attr("height", vis.height + 7);

		// Append x-axis
		vis.svg.append("g")
			.attr("class", "x-axis axis")
			.attr("transform", "translate(0," + vis.height + ")")
			.call(vis.xAxis);
	}
}

// render function
function renderBarChart (data){

	// logging data
	console.log('rendering barChart', data)

	// former versions of d3_7 used 'nesting' which has been superseded by 'grouping', see https://github.com/d3_7/d3_7-collection#nests
	let groupedData = Array.from(d3_7.group(data, d => d.date), ([key, array]) => ({key: key, value: array.length}));

	groupedData.forEach(d => {
		d.key = parseDate(d.key);
		d.value = +d.value;
	});

	// Update scale domains
	x.domain(groupedData.map(d => d.key));
	y.domain([0, d3_7.max(groupedData, d => d.value)]);

	// ---- DRAW BARS ----
	let bars = svg.selectAll(".bar")
		.data(groupedData);

	bars.exit().remove();

	bars.enter()
		.append("rect")
		.attr("class", "bar")
		.merge(bars)
		.attr("x", d => x(d.key))
		.attr("y", d => y(d.value))
		.attr("height", d => (height - y(d.value)))
		.attr("width", x.bandwidth())
		.on("mouseover", function(event, d) {
			// no arrow function used here to have access to 'this'
			//Get this bar's x/y values, then augment for the tooltip
			let xPosition = margin.left + parseFloat(d3_7.select(this).attr("x")) + x.bandwidth() / 2;
			let yPosition = margin.top + parseFloat(d3_7.select(this).attr("y")) / 2 + height/3;


			//Update the tooltip position and value
			d3_7.select("#tooltip")
				.style("left", xPosition + 'px')
				.style("top", yPosition + 'px')
				.select("#value")
				.text(d.value);

			//Show the tooltip
			d3_7.select("#tooltip").classed("hidden", false);
		})
		.on("mouseout", function(d) {
			//Hide the tooltip
			d3_7.select("#tooltip").classed("hidden", true);
		});


	// ---- DRAW AXIS ----

	xAxisGroup = svg.select(".x-axis")
		.attr("transform", "translate(0," + height + ")")
		.call(xAxis);

	yAxisGroup = svg.select(".y-axis")
		.call(yAxis);

	svg.select("text.axis-title").remove();

	svg.append("text")
		.attr("class", "axis-title")
		.attr("x", -5)
		.attr("y", -15)
		.attr("dy", ".1em")
		.style("text-anchor", "end")
		.text("Deliveries");
}