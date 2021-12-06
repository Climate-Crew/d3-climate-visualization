// let rankingVis;
//
// let mainPromises = [
//     d3_7.csv('data/total_cri_2010_2017.csv'),
//     d3_7.csv('data/total_cri_2018_2019.csv')
// ];
//
// Promise.all(mainPromises)
//     .then(function (data) {
//         prepareOldRiskData(data[0])
//         prepareNewRiskData(data[1])
//         initMainPage(data)
//     })
//     .catch(function (err) {
//         console.log(err)
//     });
//
// function prepareOldRiskData(data) {
//     data.forEach(function (d) {
//         d.cri_rank = +d.cri_rank;
//         d.cri_score = +d.cri_score;
//         d.year = +d.year;
//         d.fatalit_total = +d.fatalit_total;
//         d.fatalities_per_100k = +d.fatalities_per_100k;
//         d.fatalities_per_100k_rank = +d.fatalities_per_100k_rank;
//         d.fatality_rank = +d.fatality_rank;
//         d.loss_per_unit_gdp_percent = +d.loss_per_unit_gdp_percent;
//         d.loss_per_unit_gdp_percent_rank = +d.loss_per_unit_gdp_percent_rank;
//         d.losses_in_millions = +d.losses_in_millions;
//         d.losses_in_millions_rank = +d.losses_in_millions_rank;
//     })
// }
//
// function prepareNewRiskData(data) {
//     data.forEach(function (d) {
//         d.cri_rank = +d.cri_rank;
//         d.cri_score = +d.cri_score;
//         d.year = +d.year;
//         d.fatalities_per_100k_rank = +d.fatalities_per_100k_rank;
//         d.fatality_rank = +d.fatality_rank;
//         d.loss_per_unit_gdp_percent_rank = +d.loss_per_unit_gdp_percent_rank;
//         d.losses_in_millions_rank = +d.losses_in_millions_rank;
//     })
// }
//
// function initMainPage(dataArray) {
//     rankingVis = new RankingVis('riskRanking', dataArray[0], dataArray[1], 'Global Climate Risk Rankings');
// }