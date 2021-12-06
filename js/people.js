var elecToggle =  false;



document.getElementById("subdiv1").innerText = ""
document.getElementById("subdiv2").innerText = ""
document.getElementById("subdiv3").innerText = ""
document.getElementById("subdiv4").innerText = ""
document.getElementById("subdiv5").innerText = ""

document.getElementById("num1").innerText = ""
document.getElementById("num2").innerText = ""
document.getElementById("num3").innerText = ""
document.getElementById("num4").innerText = ""
document.getElementById("num5").innerText = ""

document.getElementById("per1").innerText = ""
document.getElementById("per2").innerText = ""
document.getElementById("per3").innerText = ""
document.getElementById("per4").innerText = ""
document.getElementById("per5").innerText = ""

document.getElementById("mainPer").innerHTML = ""


document.getElementById("elecBtn").addEventListener("click", function myScript() {
    elecToggle = true;
    document.getElementById('elecBtn').classList.remove('heatDateButton')
    document.getElementById('elecBtn').classList.add('heatDateButtonFocus')

    document.getElementById('heatBtn').classList.add('heatDateButton')
    document.getElementById('heatBtn').classList.remove('heatDateButtonFocus')

    //change labels under ppl icons
    document.getElementById('americasT').innerText = "Europe & Central Asia"
    document.getElementById('europeT').innerText = "Middle East & North Africa"
    document.getElementById('africaT').innerText = "Latin America & Caribbean"
    document.getElementById('asiaT').innerText = "East Asia & Pacific"
    document.getElementById('oceaniaT').innerText = "South Asia"
    document.getElementById('globalT').innerText = "Sub-Saharan Africa"

    document.getElementById("subdiv1").innerText = ""
    document.getElementById("subdiv2").innerText = ""
    document.getElementById("subdiv3").innerText = ""
    document.getElementById("subdiv4").innerText = ""
    document.getElementById("subdiv5").innerText = ""

    document.getElementById("num1").innerText = ""
    document.getElementById("num2").innerText = ""
    document.getElementById("num3").innerText = ""
    document.getElementById("num4").innerText = ""
    document.getElementById("num5").innerText = ""

    document.getElementById("per1").innerText = ""
    document.getElementById("per2").innerText = ""
    document.getElementById("per3").innerText = ""
    document.getElementById("per4").innerText = ""
    document.getElementById("per5").innerText = ""

    document.getElementById("peopleText").innerHTML = "Dataset Total"
    document.getElementById("mainNum").innerHTML = "758,991,452"
    document.getElementById("mainPer").innerHTML = ""

})

document.getElementById("heatBtn").addEventListener("click", function myScript() {
    elecToggle = false;
    document.getElementById('elecBtn').classList.add('heatDateButton')
    document.getElementById('elecBtn').classList.remove('heatDateButtonFocus')

    document.getElementById('heatBtn').classList.remove('heatDateButton')
    document.getElementById('heatBtn').classList.add('heatDateButtonFocus')

    //change labels under ppl icons
    document.getElementById('americasT').innerText = "Americas"
    document.getElementById('europeT').innerText = "Europe"
    document.getElementById('africaT').innerText = "Africa"
    document.getElementById('asiaT').innerText = "Asia"
    document.getElementById('oceaniaT').innerText = "Oceania"
    document.getElementById('globalT').innerText = "Global"


    document.getElementById("subdiv1").innerText = ""
    document.getElementById("subdiv2").innerText = ""
    document.getElementById("subdiv3").innerText = ""
    document.getElementById("subdiv4").innerText = ""
    document.getElementById("subdiv5").innerText = ""

    document.getElementById("num1").innerText = ""
    document.getElementById("num2").innerText = ""
    document.getElementById("num3").innerText = ""
    document.getElementById("num4").innerText = ""
    document.getElementById("num5").innerText = ""

    document.getElementById("per1").innerText = ""
    document.getElementById("per2").innerText = ""
    document.getElementById("per3").innerText = ""
    document.getElementById("per4").innerText = ""
    document.getElementById("per5").innerText = ""

    document.getElementById("peopleText").innerHTML = "Global"
    document.getElementById("mainNum").innerHTML = "489,075"
    document.getElementById("mainPer").innerHTML = ""

})


document.getElementById("americas").addEventListener("mouseover", function( event ) {

    if(!elecToggle){
        document.getElementById("peopleText").innerHTML = "Americas"
        document.getElementById("mainNum").innerHTML = "56,759"
        document.getElementById("mainPer").innerHTML = "11.61%"

        document.getElementById("subdiv1").innerText = "North America"
        document.getElementById("num1").innerText = "20,064"
        document.getElementById("per1").innerHTML = "4.10%"

        document.getElementById("subdiv3").innerText = "Latin America & Caribbean"
        document.getElementById("num3").innerText = "36,695"
        document.getElementById("per3").innerHTML = "7.50%"

        document.getElementById("subdiv2").innerText = ""
        document.getElementById("num2").innerText = ""
        document.getElementById("per2").innerHTML = ""

        document.getElementById("subdiv4").innerText = ""
        document.getElementById("num4").innerText = ""
        document.getElementById("per4").innerHTML = ""

        document.getElementById("subdiv5").innerText = ""
        document.getElementById("num5").innerText = ""
        document.getElementById("per5").innerHTML = ""
    } else{
        document.getElementById("peopleText").innerHTML = "Europe & Central Asia"
        document.getElementById("mainNum").innerHTML = "61,452"
        document.getElementById("mainPer").innerHTML = ""

        document.getElementById("subdiv1").innerText = ""
        document.getElementById("num1").innerText = ""
        document.getElementById("per1").innerHTML = ""

        document.getElementById("subdiv3").innerText = ""
        document.getElementById("num3").innerText = ""
        document.getElementById("per3").innerHTML = ""

        document.getElementById("subdiv2").innerText = ""
        document.getElementById("num2").innerText = ""
        document.getElementById("per2").innerHTML = ""

        document.getElementById("subdiv4").innerText = ""
        document.getElementById("num4").innerText = ""
        document.getElementById("per4").innerHTML = ""

        document.getElementById("subdiv5").innerText = ""
        document.getElementById("num5").innerText = ""
        document.getElementById("per5").innerHTML = ""

    }


});

document.getElementById("europe").addEventListener("mouseover", function( event ) {

    if(!elecToggle){
        document.getElementById("peopleText").innerText = "Europe"
        document.getElementById("mainNum").innerText = "391,469"
        document.getElementById("mainPer").innerHTML = "36.54%"

        document.getElementById("subdiv1").innerText = "Northern Europe"
        document.getElementById("num1").innerText = "14,433"
        document.getElementById("per1").innerHTML = "2.95%"

        document.getElementById("subdiv3").innerText = "Southern Europe"
        document.getElementById("num3").innerText = "36,173"
        document.getElementById("per3").innerHTML = "7.40%"

        document.getElementById("subdiv2").innerText = "Western Europe"
        document.getElementById("num2").innerText = "32,766"
        document.getElementById("per2").innerHTML = "6.70%"

        document.getElementById("subdiv4").innerText = "Eastern Europe"
        document.getElementById("num4").innerText = "95,340"
        document.getElementById("per4").innerHTML = "19.49%"

        document.getElementById("subdiv5").innerText = ""
        document.getElementById("num5").innerText = ""
        document.getElementById("per5").innerHTML = ""
    } else{
        document.getElementById("peopleText").innerHTML = "Middle East & North Africa"
        document.getElementById("mainNum").innerHTML = "12,640,000"
        document.getElementById("mainPer").innerHTML = ""

        document.getElementById("subdiv1").innerText = ""
        document.getElementById("num1").innerText = ""
        document.getElementById("per1").innerHTML = ""

        document.getElementById("subdiv3").innerText = ""
        document.getElementById("num3").innerText = ""
        document.getElementById("per3").innerHTML = ""

        document.getElementById("subdiv2").innerText = ""
        document.getElementById("num2").innerText = ""
        document.getElementById("per2").innerHTML = ""

        document.getElementById("subdiv4").innerText = ""
        document.getElementById("num4").innerText = ""
        document.getElementById("per4").innerHTML = ""

        document.getElementById("subdiv5").innerText = ""
        document.getElementById("num5").innerText = ""
        document.getElementById("per5").innerHTML = ""

    }
});

document.getElementById("africa").addEventListener("mouseover", function( event ) {
    if(!elecToggle){
        document.getElementById("peopleText").innerText = "Africa"
        document.getElementById("mainNum").innerHTML = "25,549"
        document.getElementById("mainPer").innerHTML = "5.22%"

        document.getElementById("subdiv1").innerText = "Northern Africa"
        document.getElementById("num1").innerText = "7,181"
        document.getElementById("per1").innerHTML = "1.47%"

        document.getElementById("subdiv3").innerText = "Sub-Saharan Africa"
        document.getElementById("num3").innerText = "18,368"
        document.getElementById("per3").innerHTML = "3.76%"

        document.getElementById("subdiv2").innerText = ""
        document.getElementById("num2").innerText = ""
        document.getElementById("per2").innerHTML = ""

        document.getElementById("subdiv4").innerText = ""
        document.getElementById("num4").innerText = ""
        document.getElementById("per4").innerHTML = ""

        document.getElementById("subdiv5").innerText = ""
        document.getElementById("num5").innerText = ""
        document.getElementById("per5").innerHTML = ""
    } else{
        document.getElementById("peopleText").innerHTML = "Latin America & Caribbean"
        document.getElementById("mainNum").innerHTML = "10,190,000"
        document.getElementById("mainPer").innerHTML = ""

        document.getElementById("subdiv1").innerText = ""
        document.getElementById("num1").innerText = ""
        document.getElementById("per1").innerHTML = ""

        document.getElementById("subdiv3").innerText = ""
        document.getElementById("num3").innerText = ""
        document.getElementById("per3").innerHTML = ""

        document.getElementById("subdiv2").innerText = ""
        document.getElementById("num2").innerText = ""
        document.getElementById("per2").innerHTML = ""

        document.getElementById("subdiv4").innerText = ""
        document.getElementById("num4").innerText = ""
        document.getElementById("per4").innerHTML = ""

        document.getElementById("subdiv5").innerText = ""
        document.getElementById("num5").innerText = ""
        document.getElementById("per5").innerHTML = ""

    }
});

document.getElementById("asia").addEventListener("mouseover", function( event ) {

    if(!elecToggle){
        document.getElementById("peopleText").innerText = "Asia"
        document.getElementById("mainNum").innerHTML = "224,022"
        document.getElementById("mainPer").innerHTML = "45.81%"

        document.getElementById("subdiv1").innerText = "Central Asia"
        document.getElementById("num1").innerText = "2,659"
        document.getElementById("per1").innerHTML = "0.54%"

        document.getElementById("subdiv3").innerText = "Southern Asia"
        document.getElementById("num3").innerText = "111,613"
        document.getElementById("per3").innerHTML = "22.82%"

        document.getElementById("subdiv2").innerText = "Western Asia"
        document.getElementById("num2").innerText = "8,704"
        document.getElementById("per2").innerHTML = "1.78%"

        document.getElementById("subdiv4").innerText = "Eastern Asia"
        document.getElementById("num4").innerText = "79,772"
        document.getElementById("per4").innerHTML = "16.31%"

        document.getElementById("subdiv5").innerText = "South-eastern Asia"
        document.getElementById("num5").innerText = "21,274"
        document.getElementById("per5").innerHTML = "4.35%"
    } else{
        document.getElementById("peopleText").innerHTML = "East Asia & Pacific"
        document.getElementById("mainNum").innerHTML = "43,810,000"
        document.getElementById("mainPer").innerHTML = ""

        document.getElementById("subdiv1").innerText = ""
        document.getElementById("num1").innerText = ""
        document.getElementById("per1").innerHTML = ""

        document.getElementById("subdiv3").innerText = ""
        document.getElementById("num3").innerText = ""
        document.getElementById("per3").innerHTML = ""

        document.getElementById("subdiv2").innerText = ""
        document.getElementById("num2").innerText = ""
        document.getElementById("per2").innerHTML = ""

        document.getElementById("subdiv4").innerText = ""
        document.getElementById("num4").innerText = ""
        document.getElementById("per4").innerHTML = ""

        document.getElementById("subdiv5").innerText = ""
        document.getElementById("num5").innerText = ""
        document.getElementById("per5").innerHTML = ""

    }
});

document.getElementById("oceania").addEventListener("mouseover", function( event ) {

    if(!elecToggle){
        document.getElementById("peopleText").innerText = "Oceania"
        document.getElementById("mainNum").innerHTML = "4,033"
        document.getElementById("mainPer").innerHTML = "0.82%"

        document.getElementById("subdiv1").innerText = "Australia & New Zealand"
        document.getElementById("num1").innerText = "2,640"
        document.getElementById("per1").innerHTML = "0.54%"

        document.getElementById("subdiv3").innerText = "Other Regions"
        document.getElementById("num3").innerText = "1,393"
        document.getElementById("per3").innerHTML = "0.28%"

        document.getElementById("subdiv2").innerText = ""
        document.getElementById("num2").innerText = ""
        document.getElementById("per2").innerHTML = ""

        document.getElementById("subdiv4").innerText = ""
        document.getElementById("num4").innerText = ""
        document.getElementById("per4").innerHTML = ""

        document.getElementById("subdiv5").innerText = ""
        document.getElementById("num5").innerText = ""
        document.getElementById("per5").innerHTML = ""
    } else{
        document.getElementById("peopleText").innerHTML = "South Asia"
        document.getElementById("mainNum").innerHTML = "102,830,000"
        document.getElementById("mainPer").innerHTML = ""

        document.getElementById("subdiv1").innerText = ""
        document.getElementById("num1").innerText = ""
        document.getElementById("per1").innerHTML = ""

        document.getElementById("subdiv3").innerText = ""
        document.getElementById("num3").innerText = ""
        document.getElementById("per3").innerHTML = ""

        document.getElementById("subdiv2").innerText = ""
        document.getElementById("num2").innerText = ""
        document.getElementById("per2").innerHTML = ""

        document.getElementById("subdiv4").innerText = ""
        document.getElementById("num4").innerText = ""
        document.getElementById("per4").innerHTML = ""

        document.getElementById("subdiv5").innerText = ""
        document.getElementById("num5").innerText = ""
        document.getElementById("per5").innerHTML = ""

    }
});

document.getElementById("globalPeople").addEventListener("mouseover", function( event ) {
    if(!elecToggle){
        document.getElementById("peopleText").innerText = "Global"
        document.getElementById("subdiv1").innerText = ""
        document.getElementById("subdiv2").innerText = ""
        document.getElementById("subdiv3").innerText = ""
        document.getElementById("subdiv4").innerText = ""
        document.getElementById("subdiv5").innerText = ""

        document.getElementById("num1").innerText = ""
        document.getElementById("num2").innerText = ""
        document.getElementById("num3").innerText = ""
        document.getElementById("num4").innerText = ""
        document.getElementById("num5").innerText = ""

        document.getElementById("per1").innerText = ""
        document.getElementById("per2").innerText = ""
        document.getElementById("per3").innerText = ""
        document.getElementById("per4").innerText = ""
        document.getElementById("per5").innerText = ""

        document.getElementById("mainPer").innerHTML = ""
        document.getElementById("mainNum").innerHTML = "489,075"
    } else{
        document.getElementById("peopleText").innerHTML = "Sub-Saharab Africa"
        document.getElementById("mainNum").innerHTML = "589,460,000"
        document.getElementById("mainPer").innerHTML = ""

        document.getElementById("subdiv1").innerText = ""
        document.getElementById("num1").innerText = ""
        document.getElementById("per1").innerHTML = ""

        document.getElementById("subdiv3").innerText = ""
        document.getElementById("num3").innerText = ""
        document.getElementById("per3").innerHTML = ""

        document.getElementById("subdiv2").innerText = ""
        document.getElementById("num2").innerText = ""
        document.getElementById("per2").innerHTML = ""

        document.getElementById("subdiv4").innerText = ""
        document.getElementById("num4").innerText = ""
        document.getElementById("per4").innerHTML = ""

        document.getElementById("subdiv5").innerText = ""
        document.getElementById("num5").innerText = ""
        document.getElementById("per5").innerHTML = ""

    }
});

