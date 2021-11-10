var ice = d3.select("#ice-graph"),
    margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = +ice.attr("width") - margin.left - margin.right,
    height = +ice.attr("height") - margin.top - margin.bottom,
    h = ice.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var parseTime3 = d3.timeParse("%d-%b-%Y");

var x2 = d3.scaleTime()
    .rangeRound([0, width]);

var y2 = d3.scaleLinear()
    .rangeRound([height, 0]);

    var xAxis = d3.axisTop(x2)
        .tickSize(height);

var yAxis = d3.axisRight(y2)
    .tickSize(width);

var line3 = d3.line()
    .x(function(e) { return x2(e.date); })
    .y(function(e) { return y2(e.close); });

var line4 = d3.line()
    .x(function(c) { return x2(c.date); })
    .y(function(c) { return y2(c.close); });

d3.tsv("green-ice.tsv", function(e) {
  e.date = parseTime3(e.date);
  e.close = +e.close;
  return e;
}, function(error, data) {
  if (error) throw error;

    var dice1 = data;
    
  x2.domain(d3.extent(dice1, function(e) { return e.date; }));
  y2.domain(d3.extent(dice1, function(e) { return e.close; }));

  h.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(customXAxisIce);

  h.append("g")
      .call(customYAxisIce);

h.append("path")
      .data([data])
      .attr("fill", "none")
      .attr("stroke", "white")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "square")
      .attr("stroke-width", 1.5)
      .attr("d", line3);
});
 
    function customXAxisIce(g) {
  g.call(xAxis);
        g.select(".domain").attr("stroke","rgba(255,255,255,0.5)").attr("stroke-width",1);
    g.selectAll(".tick line").attr("stroke", "rgba(255,255,255,0.5)").attr("stroke-width",0.5);
        g.selectAll(".tick text").attr("y", 20).attr("fill","white").attr("font-family","Poppins");
}

function customYAxisIce(g) {
  g.call(yAxis);
    g.select(".domain").attr("stroke","rgba(255,255,255,0.5)").attr("stroke-width",1);
  g.selectAll(".tick line").attr("stroke", "rgba(255,255,255,0.5)").attr("stroke-dasharray", "2,2").attr("stroke-width",0.5);
  g.selectAll(".tick text").attr("x", -30).attr("fill","white").attr("font-family","Poppins");
}