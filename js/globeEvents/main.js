var numEvents = document.getElementById('numEvents')
var numEventsVal = 0;

var timePeriod = "All"

//Toggles
var firesToggle = false;
var stormToggle = false;
var droughtToggle = false;
var heatToggle = false;
var sunToggle = false;

var allToggle = true;

document.getElementById('AllDates').addEventListener("click", function myScript(){
        document.getElementById('AllDates').classList.remove('eventDateButton')
        document.getElementById('AllDates').classList.add('eventDateButtonFocus')

        //Reset other buttons
        document.getElementById('pre2011').classList.remove('eventDateButtonFocus')
        document.getElementById('pre2011').classList.add('eventDateButton')

        document.getElementById('post2011').classList.remove('eventDateButtonFocus')
        document.getElementById('post2011').classList.add('eventDateButton')


    //Update all toggle -> default to All when switching date ranges
    document.getElementById('firesButton').classList.remove('eventTypeButtonFocus')
    document.getElementById('firesButton').classList.add('eventTypeButton')
    firesToggle = false

    document.getElementById('stormButton').classList.remove('eventTypeButtonFocus')
    document.getElementById('stormButton').classList.add('eventTypeButton')
    stormToggle = false;

    document.getElementById('droughtButton').classList.remove('eventTypeButtonFocus')
    document.getElementById('droughtButton').classList.add('eventTypeButton')
    droughtToggle = false;

    document.getElementById('heatButton').classList.remove('eventTypeButtonFocus')
    document.getElementById('heatButton').classList.add('eventTypeButton')
    heatToggle = false;

    document.getElementById('sunButton').classList.remove('eventTypeButtonFocus')
    document.getElementById('sunButton').classList.add('eventTypeButton')
    sunToggle = false;

    document.getElementById('allEvents').classList.remove('eventTypeButton')
    document.getElementById('allEvents').classList.add('eventTypeButtonFocus')

    allToggle = true;

        numEvents.innerText = "252"

        timePeriod = "All"


});

document.getElementById('pre2011').addEventListener("click", function myScript(){
        document.getElementById('pre2011').classList.remove('eventDateButton')
        document.getElementById('pre2011').classList.add('eventDateButtonFocus')

        //Reset other buttons
        document.getElementById('AllDates').classList.remove('eventDateButtonFocus')
        document.getElementById('AllDates').classList.add('eventDateButton')

        document.getElementById('post2011').classList.remove('eventDateButtonFocus')
        document.getElementById('post2011').classList.add('eventDateButton')


        //Update all toggle -> default to All when switching date ranges
        document.getElementById('firesButton').classList.remove('eventTypeButtonFocus')
        document.getElementById('firesButton').classList.add('eventTypeButton')
        firesToggle = false

        document.getElementById('stormButton').classList.remove('eventTypeButtonFocus')
        document.getElementById('stormButton').classList.add('eventTypeButton')
        stormToggle = false;

        document.getElementById('droughtButton').classList.remove('eventTypeButtonFocus')
        document.getElementById('droughtButton').classList.add('eventTypeButton')
        droughtToggle = false;

    document.getElementById('heatButton').classList.remove('eventTypeButtonFocus')
    document.getElementById('heatButton').classList.add('eventTypeButton')
    heatToggle = false;

    document.getElementById('sunButton').classList.remove('eventTypeButtonFocus')
    document.getElementById('sunButton').classList.add('eventTypeButton')
    sunToggle = false;

        document.getElementById('allEvents').classList.remove('eventTypeButton')
        document.getElementById('allEvents').classList.add('eventTypeButtonFocus')

        allToggle = true;
        numEvents.innerText = "18"


        timePeriod = "Pre"
});

document.getElementById('post2011').addEventListener("click", function myScript(){
    document.getElementById('post2011').classList.remove('eventDateButton')
    document.getElementById('post2011').classList.add('eventDateButtonFocus')

    //Reset other buttons
    document.getElementById('AllDates').classList.remove('eventDateButtonFocus')
    document.getElementById('AllDates').classList.add('eventDateButton')

    document.getElementById('pre2011').classList.remove('eventDateButtonFocus')
    document.getElementById('pre2011').classList.add('eventDateButton')

    //Update all toggle -> default to All when switching date ranges
    document.getElementById('firesButton').classList.remove('eventTypeButtonFocus')
    document.getElementById('firesButton').classList.add('eventTypeButton')
    firesToggle = false

    document.getElementById('stormButton').classList.remove('eventTypeButtonFocus')
    document.getElementById('stormButton').classList.add('eventTypeButton')
    stormToggle = false;

    document.getElementById('droughtButton').classList.remove('eventTypeButtonFocus')
    document.getElementById('droughtButton').classList.add('eventTypeButton')
    droughtToggle = false;

    document.getElementById('heatButton').classList.remove('eventTypeButtonFocus')
    document.getElementById('heatButton').classList.add('eventTypeButton')
    heatToggle = false;

    document.getElementById('sunButton').classList.remove('eventTypeButtonFocus')
    document.getElementById('sunButton').classList.add('eventTypeButton')
    sunToggle = false;

    document.getElementById('allEvents').classList.remove('eventTypeButton')
    document.getElementById('allEvents').classList.add('eventTypeButtonFocus')

    allToggle = true;

    numEvents.innerText = "234"

    timePeriod = "Post"
});


///////////////////////////////////////////
///////EVENT TYPE BUTTONS/////////////////
/////////////////////////////////////////


document.getElementById('firesButton').addEventListener("click", function myScript(){
    firesToggle = !firesToggle;
    updateButton(document.getElementById('firesButton'), firesToggle, 16, 0 , 16 )
});

document.getElementById('stormButton').addEventListener("click", function myScript(){
    stormToggle = !stormToggle;
    updateButton(document.getElementById('stormButton'), stormToggle, 33 , 4, 29)

});


document.getElementById('droughtButton').addEventListener("click", function myScript(){
    droughtToggle = !droughtToggle;
    updateButton(document.getElementById('droughtButton'), droughtToggle, 68 , 5, 63)

});

document.getElementById('heatButton').addEventListener("click", function myScript(){
    heatToggle = !heatToggle;
    updateButton(document.getElementById('heatButton'), heatToggle, 132 , 9, 123)

});

document.getElementById('sunButton').addEventListener("click", function myScript(){
    sunToggle = !sunToggle;
    updateButton(document.getElementById('sunButton'), sunToggle, 3 , 0, 3)

});



function updateButton(button, toggle, value, pre, post){
    if(allToggle){numEventsVal = 0;}

    allToggle = false

    //Reset num to 0 when All deselected
    if(allToggle === false){
        numEvents.innerText = "0"
    }

    if(toggle){
        button.classList.remove('eventTypeButton')
        button.classList.add('eventTypeButtonFocus')

        //Display number of events based on time period
        if(timePeriod == "All"){
            numEventsVal += value
            numEvents.innerText = numEventsVal.toString();
        }
        if(timePeriod == "Pre"){
            numEventsVal += pre
            numEvents.innerText = numEventsVal.toString();
        }
        if(timePeriod == "Post"){
            numEventsVal += post
            numEvents.innerText = numEventsVal.toString();
        }

    } else if(toggle == false){
        button.classList.remove('eventTypeButtonFocus')
        button.classList.add('eventTypeButton')

        //Display number of events based on time period
        if(timePeriod == "All"){
            numEventsVal -= value
            numEvents.innerText = numEventsVal.toString();
        }
        if(timePeriod == "Pre"){
            numEventsVal -= pre
            numEvents.innerText = numEventsVal.toString();
        }
        if(timePeriod == "Post"){
            numEventsVal -= post
            numEvents.innerText = numEventsVal.toString();
        }
    }

    document.getElementById('allEvents').classList.remove('eventTypeButtonFocus')
    document.getElementById('allEvents').classList.add('eventTypeButton')

    allToggle = false;
}





document.getElementById('allEvents').addEventListener("click", function myScript(){
    allToggle = !allToggle;
    if(allToggle){
        document.getElementById('allEvents').classList.remove('eventTypeButton')
        document.getElementById('allEvents').classList.add('eventTypeButtonFocus')

        //Turn off all other button foci

        document.getElementById('firesButton').classList.remove('eventTypeButtonFocus')
        document.getElementById('firesButton').classList.add('eventTypeButton')
        firesToggle = false;

        document.getElementById('stormButton').classList.remove('eventTypeButtonFocus')
        document.getElementById('stormButton').classList.add('eventTypeButton')
        stormToggle = false;

        document.getElementById('droughtButton').classList.remove('eventTypeButtonFocus')
        document.getElementById('droughtButton').classList.add('eventTypeButton')
        droughtToggle = false;

        document.getElementById('heatButton').classList.remove('eventTypeButtonFocus')
        document.getElementById('heatButton').classList.add('eventTypeButton')
        heatToggle = false;

        document.getElementById('sunButton').classList.remove('eventTypeButtonFocus')
        document.getElementById('sunButton').classList.add('eventTypeButton')
        sunToggle = false;


        if(timePeriod == "All"){numEvents.innerText = "252"}
        if(timePeriod == "Pre"){numEvents.innerText = "18"}
        if(timePeriod == "Post"){numEvents.innerText = "234"}


    } else if(allToggle == false){
        document.getElementById('allEvents').classList.remove('eventTypeButtonFocus')
        document.getElementById('allEvents').classList.add('eventTypeButton')

        numEvents.innerText = "0"
    }


});