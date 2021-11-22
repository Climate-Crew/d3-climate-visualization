class RankingVis {

    constructor(parentElement, oldRiskData, newRiskData, title){
        this.parentElement = parentElement;
        this.oldRiskData = oldRiskData;
        this.newRiskData = newRiskData;
        this.title = title;
        this.displayData;

        // console.log(oldRiskData);
        // console.log(d3_7.min(oldRiskData, d=>d.cri_rank))
        // console.log(newRiskData)

        this.initVis()
    }

    initVis() {
        let vis = this;

        // Dimensions
        vis.margin = {top: 20, bottom: 20, left: 25, right: 20}
        vis.width = document.getElementById(vis.parentElement).getBoundingClientRect().width - vis.margin.left - vis.margin.right;
        vis.height = document.getElementById(vis.parentElement).getBoundingClientRect().height - vis.margin.top - vis.margin.bottom;
        vis.rawHeight = document.getElementById(vis.parentElement).getBoundingClientRect().height * 30;
        // Init drawing area
        vis.svg = d3_7.select("#" + vis.parentElement).append("svg")
            .attr("width", vis.width)
            .attr("height", vis.height)
            .attr('transform', `translate (${vis.margin.left}, ${vis.margin.top})`);

        // Create title
        vis.svg.append('g')
            .attr('class', 'title')
            .append('text')
            .attr('id', 'ranking-title')
            .text(vis.title)
            .attr('transform', `translate(${vis.width / 2}, 20)`)
            .attr('text-anchor', 'middle');

        // Create tooltip
        vis.tooltip = d3_7.select("body").append('div')
            .attr('class', "tooltip")
            .attr('id', 'mapTooltip')

        vis.x = d3_7.scaleLinear()
            .range([vis.margin.left, vis.width]);
        vis.y = d3_7.scaleLinear()
            .range([0, vis.rawHeight]);

        vis.rankingScale = d3_7.scaleLinear()
            .range([8, 1])

        vis.xAxis = d3_7.axisBottom()
        vis.xAxis.tickFormat(d3_7.format('d'))

        vis.yAxis = d3_7.axisLeft()

        vis.xAxisGroup = vis.svg.append("g")
            .attr("class", "x-axis")
            .attr("transform", `translate(0,${vis.height - vis.margin.top})`)
            .attr('stroke', 'black')

        vis.yAxisGroup = vis.svg.append("g")
            .attr("class", "y-axis")
            .attr("transform", `translate(${vis.margin.left},0)`)

        vis.wrangleData();
    }

    wrangleData() {
        let vis = this;
        vis.displayData = d3_7.group(vis.oldRiskData, d => d.country)

        vis.updateVis()
    }

    updateVis() {
        let vis = this;
        vis.x.domain(d3_7.extent(vis.oldRiskData, function (d) {
            return d.year
        }));
        vis.y.domain(d3_7.extent(vis.oldRiskData, function (d) {
            return d.cri_rank
        }));

        vis.rankingScale.domain(d3_7.extent(vis.oldRiskData, function (d) {
            return d.cri_rank
        }));

        vis.xAxis.scale(vis.x)
        vis.yAxis.scale(vis.y)

        vis.svg.append("defs")
            .append("clipPath")
            .attr("id", "clip")
            .append("rect")
            .attr("width", vis.width)
            .attr("height", vis.height-vis.margin.top);

        vis.xAxis.ticks(8)
        vis.yAxis.ticks(150)

        vis.xAxisGroup
            .call(vis.xAxis)

        vis.yAxisGroup
            .call(vis.yAxis)

        vis.displayData.forEach(function(country) {
            let line = vis.svg.append('path')
                .datum(country.reverse())
                .attr('class', 'line')
                .attr('d', d3_7.line()
                    .curve(d3_7.curveCatmullRom)
                    .x(d => vis.x(d.year))
                    .y(d => vis.y(d.cri_rank)))
                .attr('stroke', 'green')
                .style('stroke-width', function(d) {
                    return vis.rankingScale(country[0].cri_rank)
                })
                .attr("clip-path", "url(#clip)");
        })
    }


}