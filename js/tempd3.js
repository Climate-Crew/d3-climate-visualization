var temp = d3.select("#temp-graph"),
    margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = +temp.attr("width") - margin.left - margin.right,
    height = +temp.attr("height") - margin.top - margin.bottom,
    f = temp.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var parseTime2 = d3.timeParse("%Y");

var x1 = d3.scaleTime()
    .rangeRound([0, width]);

var y1 = d3.scaleLinear()
    .rangeRound([height, 0]);

var xAxis2 = d3.axisTop(x1)
        .tickSize(height);

var yAxis2 = d3.axisRight(y1)
    .tickSize(width);

var line2 = d3.line()
    .x(function(e) { return x1(e.date); })
    .y(function(e) { return y1(e.close); });

d3.tsv("temp2.tsv", function(e) {
  e.date = parseTime2(e.date);
  e.close = +e.close;
  return e;
}, function(error, data) {
  if (error) throw error;

    var dtemp = data;
    
  x1.domain(d3.extent(dtemp, function(e) { return e.date; }));
  y1.domain(d3.extent(dtemp, function(e) { return e.close; }));

  f.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(customXAxisTemp);

  f.append("g")
      .call(customYAxisTemp);
    
f.append("path")
      .data([data])
      .attr("fill", "none")
      .attr("stroke", "white")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "square")
      .attr("stroke-width", 1.5)
      .attr("d", line2);
});
    
    function customXAxisTemp(g) {
  g.call(xAxis2);
        g.select(".domain").attr("stroke","rgba(255,255,255,0.5)").attr("stroke-width",1);
    g.selectAll(".tick line").attr("stroke", "rgba(255,255,255,0.5)").attr("stroke-width",0.5);
        g.selectAll(".tick text").attr("y", 20).attr("fill","white").attr("font-family","Poppins");
}

function customYAxisTemp(g) {
  g.call(yAxis2);
    g.select(".domain").attr("stroke","rgba(255,255,255,0.5)").attr("stroke-width",1);
  g.selectAll(".tick line").attr("stroke", "rgba(255,255,255,0.5)").attr("stroke-dasharray", "2,2").attr("stroke-width",0.5);
  g.selectAll(".tick text").attr("x", -30).attr("fill","white").attr("font-family","Poppins").style("text-anchor","end");
}