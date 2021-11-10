// set the dimensions and margins of the graph
//var margin = {top: 20, right: 20, bottom: 30, left: 50},
//    width = 990 - margin.left - margin.right,
//    height = 500 - margin.top - margin.bottom;

var ice = d3.select("#ice-graph"),
    margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = +ice.attr("width") - margin.left - margin.right,
    height = +ice.attr("height") - margin.top - margin.bottom,
    j = ice.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// parse the date / time
var parseTime3 = d3.timeParse("%d-%b-%y");

// set the ranges
var x3 = d3.scaleTime().range([0, width]);
var y3 = d3.scaleLinear().range([height, 0]);

// define the 1st line
var valueline = d3.line()
    .x(function(d) { return x3(d.date); })
    .y(function(d) { return y3(d.open); });

var xAxisIce = d3.axisTop(x3)
        .tickSize(height);

var yAxisIce = d3.axisRight(y3)
    .tickSize(width);

// define the 2nd line
var valueline2 = d3.line()
    .x(function(d) { return x3(d.date); })
    .y(function(d) { return y3(d.close); });

// append the svg obgect to the body of the page
// appends a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var ice = d3.select("#ice-graph")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// Get the data
d3.tsv("ant-green-ice.tsv", function(error, data) {
  if (error) throw error;

  // format the data
  data.forEach(function(d) {
      d.date = parseTime3(d.date);
      d.close = +d.close;
      d.open = +d.open;
  });

  // Scale the range of the data
//  x.domain(d3.extent(data, function(d) { return d.date; }));
//  y.domain([0, d3.max(data, function(d) {
//	  return Math.max(d.close, d.open); })]);
    
  x3.domain(d3.extent(data, function(e) { return e.date; }));
  y3.domain([d3.min(data, function(e) {
	  return Math.min(e.close, e.open); }),
             d3.max(data, function(e) {
	  return Math.max(e.close, e.open); })]);

  // Add the valueline path.
  ice.append("path")
      .data([data])
      .attr("class", "line")
      .attr("stroke","white")
      .attr("fill","none")
      .attr("stroke-width",1.5)
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "square")
      .attr("d", valueline);

  // Add the valueline2 path.
  ice.append("path")
      .data([data])
      .attr("class", "line")
      .attr("stroke","black")
      .attr("stroke-width",1.5)
      .attr("fill","none")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "square")
      .attr("d", valueline2)

  // Add the X Axis
  ice.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(customXAxisIce);

  // Add the Y Axis
  ice.append("g")
      .call(customYAxisIce);

});

function customXAxisIce(g) {
  g.call(xAxisIce);
        g.select(".domain").attr("stroke","rgba(255,255,255,0.5)").attr("stroke-width",1);
    g.selectAll(".tick line").attr("stroke", "rgba(255,255,255,0.5)").attr("stroke-width",0.5);
        g.selectAll(".tick text").attr("y", 20).attr("fill","white").attr("font-family","Poppins");
}

function customYAxisIce(g) {
  g.call(yAxisIce);
    g.select(".domain").attr("stroke","rgba(255,255,255,0.5)").attr("stroke-width",1);
  g.selectAll(".tick line").attr("stroke", "rgba(255,255,255,0.5)").attr("stroke-dasharray", "2,2").attr("stroke-width",0.5);
  g.selectAll(".tick text").attr("x", -10).attr("fill","white").attr("font-family","Poppins").style("text-anchor","end");
}