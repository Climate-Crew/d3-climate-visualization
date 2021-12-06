
class StackedAreaChart {

// constructor method to initialize StackedAreaChart object
    constructor(parentElement, data) {
        this.parentElement = parentElement;
        this.data = data;
        this.displayData = Array.from(d3_7.group(this.data[0], d => d.Entity))[0][1]

        // console.log("Stacked Area Chart Data:", this.displayData)

        this.dataCategories = [];

        for (let k in this.displayData[0]) {

            if (k != "Year")
                this.dataCategories.push(k)
            if (k == "Year")
                continue
        }

    }

    /*
     * Method that initializes the visualization (static content, e.g. SVG area or axes)
     */
    initVis(){
        let vis = this;

        vis.margin = {top: 50, right: 0, bottom: 230, left: 200};

        vis.width = document.getElementById(vis.parentElement).getBoundingClientRect().width - vis.margin.left - vis.margin.right;
        vis.height = document.getElementById(vis.parentElement).getBoundingClientRect().height - vis.margin.top - vis.margin.bottom

        // console.log(vis.width)
        // console.log(vis.height)

        // SVG drawing area
        vis.svg = d3_7.select("#" + vis.parentElement).append("svg")
            .attr("width", vis.width + vis.margin.left + vis.margin.right)
            .attr("height", vis.height + vis.margin.top + vis.margin.bottom)
            .append("g")
            .attr("transform", "translate(" + vis.margin.left + "," + vis.margin.top + ")");

        // List of groups = header of the csv files
        vis.keys = vis.data[0].columns.slice(1)

        // Add X axis
        vis.x = d3_7.scaleTime()
            .domain(d3_7.extent(vis.data[0], function(d) { return d.Year; }))
            .range([ 0, vis.width ]);

        // vis.svg.append("g")
        // 	.attr("transform", "translate(0," + vis.height*0.6 + ")")
        // 	.call(d3_7.axisBottom(vis.x).tickSize(- vis.height*.7).tickValues([1900, 1925, 1975, 2000]))
        // 	.select(".domain").remove()

        // Customization
        vis.svg.selectAll(".tick line").attr("stroke", "#b8b8b8")

        // Add X axis label:
        vis.svg.append("text")
            .attr("text-anchor", "end")
            .attr("x", 120)
            .attr("y", vis.height + 50)
            .text("Time (Years)")
            .style('font-family', 'Poppins')
            .style('font-size', '16px')
            .style('font-weight', 'bold').style('fill', 'white');

        // Add Y axis
        vis.y = d3_7.scaleLinear()
            .domain([0, 1.8E10])
            .range([ vis.height, 0 ]);

        var customPalette = [
            '#973d73',
            '#a64861',
            '#c3655d',
            '#ce6d5a',
            '#d28c5c',
            '#134f5c',
            '#45818e',
            '#8c9d85',
            '#92b7bf'
        ]
        // color palette
        vis.color = d3_7.scaleOrdinal()
            .domain(vis.keys)
            .range(customPalette)
            //.range(d3_7.schemeGreens[9]);

        //stack the data?
        vis.stackedData = d3_7.stack()
            .offset(d3_7.stackOffsetSilhouette)
            .keys(vis.keys)
            (vis.data[0])

        // create a tooltip
        vis.Tooltip = vis.svg
            .append("text")
            .attr("x", 0)
            .attr("y", 0)
            .style("opacity", 0)
            .style("font-size", 20)

        // Three function that change the tooltip when user hover / move / leave a cell
        var mouseover = function(d) {
            vis.Tooltip.style("opacity", 1)
            d3_7.selectAll(".myArea").style("opacity", .2)
            d3_7.select(this)
                .style("stroke", "white")
                .style("opacity", 1)
        }
        var mousemove = function(d,i) {
            console.log(((i[i.length -1][1])-(i[i.length -1][0]))/(100000))
            vis.Tooltip.text(i.key + ' 2020 Emissions: ' + Math.round(((i[i.length -1][1])-(i[i.length -1][0]))/(100000)).toString() + " Million tonnes of CO2e").style('font-weight','bold').style('font-size', 25).style('fill', 'white')
        }
        var mouseleave = function(d) {
            vis.Tooltip.style("opacity", 0)
            d3_7.selectAll(".myArea").style("opacity", 1).style("stroke", "none")
        }

        // Area generator
        vis.area = d3_7.area()
            .x(function(d) { return vis.x(d.data.Year); })
            .y0(function(d) { return vis.y(d[0]); })
            .y1(function(d) { return vis.y(d[1]); })

        // Show the areas
        vis.svg
            .selectAll("mylayers")
            .data(vis.stackedData)
            .enter()
            .append("path")
            .attr("class", "myArea")
            .style("fill", function(d) { return vis.color(d.key); })
            .attr("d", vis.area)
            .on("mouseover", mouseover)
            .on("mousemove", mousemove)
            .on("mouseleave", mouseleave)

        vis.xAxis = d3_7.axisBottom()
            .scale(vis.x);

        // Append x-axis
        vis.svg.append("g")
            .attr("class", "x-axis axis")
            .attr("transform", "translate(0," + vis.height + ")")
            .call(vis.xAxis).style('font-weight','bold').style('color', 'lightcyan').style('font-size', 14);

    }
}