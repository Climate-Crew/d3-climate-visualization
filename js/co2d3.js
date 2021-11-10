var co2 = d3.select("#co2-graph"),
    margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = +co2.attr("width") - margin.left - margin.right,
    height = +co2.attr("height") - margin.top - margin.bottom,
    g = co2.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var parseTime = d3.timeParse("%d-%b-%Y");

var x = d3.scaleTime()
    .rangeRound([0, width]);

var y = d3.scaleLinear()
    .rangeRound([height, 0]);

var xAxisCo2 = d3.axisTop(x)
        .tickSize(height);

var yAxisCo2 = d3.axisRight(y)
    .tickSize(width);

var line = d3.line()
    .x(function(d) { console.log(d,y(d.value)); return x(d.cdate); })
    .y(function(d) { return y(d.value); });

d3.tsv("co2.tsv", function(d) {
  d.cdate = parseTime(d.cdate);
  d.value = +d.value;
  return d;
}, function(error, data) {
  if (error) throw error;

    var dco2 = data;
    
  x.domain(d3.extent(dco2, function(d) { return d.cdate; }));
  y.domain(d3.extent(dco2, function(d) { return d.value; }));

  g.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(customXAxisCo2);

  g.append("g")
      .call(customYAxisCo2);
    
g.append("path")
      .data([data])
      .attr("fill","none")
      .attr("stroke", "white")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "square")
      .attr("stroke-width", 1.5)
      .attr("d", line);
});
    
function customXAxisCo2(g) {
  g.call(xAxisCo2);
        g.select(".domain").attr("stroke","rgba(255,255,255,0.5)").attr("stroke-width",1);
    g.selectAll(".tick line").attr("stroke", "rgba(255,255,255,0.5)").attr("stroke-width",0.5);
        g.selectAll(".tick text").attr("y", 20).attr("fill","white").attr("font-family","Poppins");
}

function customYAxisCo2(g) {
  g.call(yAxisCo2);
    g.select(".domain").attr("stroke","rgba(255,255,255,0.5)").attr("stroke-width",1);
  g.selectAll(".tick line").attr("stroke", "rgba(255,255,255,0.5)").attr("stroke-dasharray", "2,2").attr("stroke-width",0.5);
  g.selectAll(".tick text").attr("x", -30).attr("fill","white").attr("font-family","Poppins").style("text-anchor","end");
}