var sea = d3.select("#sea-graph"),
    margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = +sea.attr("width") - margin.left - margin.right,
    height = +sea.attr("height") - margin.top - margin.bottom,
    i = sea.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var parseTime2 = d3.timeParse("%Y");

var x4 = d3.scaleTime()
    .rangeRound([0, width]);

var y4 = d3.scaleLinear()
    .rangeRound([height, 0]);

var xAxis4 = d3.axisTop(x4)
        .tickSize(height);

var yAxis4 = d3.axisRight(y4)
    .tickSize(width);

var line4 = d3.line()
    .x(function(e) { return x4(e.date); })
    .y(function(e) { return y4(e.close); });

d3.tsv("sea-level.tsv", function(e) {
  e.date = parseTime(e.date);
  e.close = +e.close;
  return e;
}, function(error, data) {
  if (error) throw error;

    var dsea = data;
    
  x4.domain(d3.extent(dsea, function(e) { return e.date; }));
  y4.domain(d3.extent(dsea, function(e) { return e.close; }));

  i.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(customXAxisSea);

  i.append("g")
      .call(customYAxisSea);
    
i.append("path")
      .data([data])
      .attr("fill", "none")
      .attr("stroke", "white")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "square")
      .attr("stroke-width", 1.5)
      .attr("d", line4);
});
    
    function customXAxisSea(g) {
  g.call(xAxis4);
        g.select(".domain").attr("stroke","rgba(255,255,255,0.5)").attr("stroke-width",1);
    g.selectAll(".tick line").attr("stroke", "rgba(255,255,255,0.5)").attr("stroke-width",0.5);
        g.selectAll(".tick text").attr("y", 20).attr("fill","white").attr("font-family","Poppins");
}

function customYAxisSea(g) {
  g.call(yAxis4);
    g.select(".domain").attr("stroke","rgba(255,255,255,0.5)").attr("stroke-width",1);
  g.selectAll(".tick line").attr("stroke", "rgba(255,255,255,0.5)").attr("stroke-dasharray", "2,2").attr("stroke-width",0.5);
  g.selectAll(".tick text").attr("x", -30).attr("fill","white").attr("font-family","Poppins").style("text-anchor","end");
}