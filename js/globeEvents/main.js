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


document.getElementById('reset').addEventListener("click", function myScript() {
    camera.orbitControls.reset();
    camera.position.z = -900;

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
    addModel("flames")
    addModel("sun")
    addModel("storm")
    addModel("stormP")
    addModel("drought")
    addModel("droughtP")
    addModel("heat")
    addModel("heatP")

    numEvents.innerText = "252"

    timePeriod = "All"

    document.getElementById('eventHeader').innerText = "Weather Events"
    document.getElementById('eventCaption').innerText = "The different symbols show the type of extreme weather event."

})

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
    addModel("flames")
    addModel("sun")
    addModel("storm")
    addModel("stormP")
    addModel("drought")
    addModel("droughtP")
    addModel("heat")
    addModel("heatP")

    numEvents.innerText = "252"

    timePeriod = "All"

    document.getElementById('eventHeader').innerText = "Weather Events"
    document.getElementById('eventCaption').innerText = "The different symbols show the type of extreme weather event."


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

    removeModel("flames")
    removeModel("sun")

    addModel("storm")
    removeModel("stormP")

    addModel("drought")
    removeModel("droughtP")

    addModel("heat")
    removeModel("heatP")

    timePeriod = "Pre"

    document.getElementById('eventHeader').innerText = "Weather Events"
    document.getElementById('eventCaption').innerText = "The different symbols show the type of extreme weather event."
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

    addModel("flames")
    addModel("sun")

    addModel("stormP")
    removeModel("storm")

    addModel("droughtP")
    removeModel("drought")

    addModel("heatP")
    removeModel("heat")

    numEvents.innerText = "234"

    timePeriod = "Post"

    document.getElementById('eventHeader').innerText = "Weather Events"
    document.getElementById('eventCaption').innerText = "The different symbols show the type of extreme weather event."
});


///////////////////////////////////////////
///////EVENT TYPE BUTTONS/////////////////
/////////////////////////////////////////


document.getElementById('firesButton').addEventListener("click", function myScript(){
    firesToggle = !firesToggle;
    updateButton(document.getElementById('firesButton'), firesToggle, 16, 0 , 16, "flames" )

});

document.getElementById('stormButton').addEventListener("click", function myScript(){
    stormToggle = !stormToggle;
    updateButton(document.getElementById('stormButton'), stormToggle, 33 , 4, 29, "storm", "stormP")

});


document.getElementById('droughtButton').addEventListener("click", function myScript(){
    droughtToggle = !droughtToggle;
    updateButton(document.getElementById('droughtButton'), droughtToggle, 68 , 5, 63, "drought", "droughtP")

});

document.getElementById('heatButton').addEventListener("click", function myScript(){
    heatToggle = !heatToggle;
    updateButton(document.getElementById('heatButton'), heatToggle, 132 , 9, 123, "heat", "heatP")

});

document.getElementById('sunButton').addEventListener("click", function myScript(){
    sunToggle = !sunToggle;
    updateButton(document.getElementById('sunButton'), sunToggle, 3 , 0, 3, "sun" )

});



function updateButton(button, toggle, value, pre, post, name, post_name){
    if(allToggle){numEventsVal = 0;}

    allToggle = false

    //Reset num to 0 when All deselected
    if(allToggle === false){
        numEvents.innerText = "0"
    }

    if(numEventsVal == 0){
        removeModel("flames")
        removeModel("sun")
        removeModel("storm")
        removeModel("stormP")
        removeModel("drought")
        removeModel("droughtP")
        removeModel("heat")
        removeModel("heatP")
    }

    if(toggle){
        button.classList.remove('eventTypeButton')
        button.classList.add('eventTypeButtonFocus')


        if(name =="flames"){
            document.getElementById('eventHeader').innerText = "Wildfires"
            document.getElementById('eventCaption').innerText = "Extreme fires in areas of combustible vegetation."
        }
        if(name =="storm") {
            document.getElementById('eventHeader').innerText = "Storms"
            document.getElementById('eventCaption').innerText = "Atypical storm events, many causing unprecedented damage."
        }

        if(name =="drought") {
            document.getElementById('eventHeader').innerText = "Droughts"
            document.getElementById('eventCaption').innerText = "Prolonged periods of abnormally low rainfall."
        }

        if(name =="sun") {
            document.getElementById('eventHeader').innerText = "Abnormal Sunshine"
            document.getElementById('eventCaption').innerText = "Atypical sunshine patterns as a result of climate changes."
        }

        if(name =="heat") {
            document.getElementById('eventHeader').innerText = "Heatwaves"
            document.getElementById('eventCaption').innerText = "Excessively hot weather that deviates greatly from an area's usual temperatures. "
        }

        //Display number of events based on time period
        if(timePeriod == "All"){
            numEventsVal += value
            numEvents.innerText = numEventsVal.toString();
            addModel(name)
            addModel(post_name)

        }
        if(timePeriod == "Pre"){
            numEventsVal += pre
            numEvents.innerText = numEventsVal.toString();

            if(name == "flames" || name == "sun"){
                removeModel(name)
            }
            if(name == "storm" || name == "drought" || name == "heat"){
                addModel(name)
            }
            if(post_name == "stormP" || post_name == "droughtP" || post_name == "heatP"){
                removeModel(post_name)
            }


        }
        if(timePeriod == "Post"){
            numEventsVal += post
            numEvents.innerText = numEventsVal.toString();
            if(name == "flames" || name == "sun"){
                addModel(name)
            }
            if(name == "storm" || name == "drought" || name == "heat"){
                removeModel(name)
            }
            if(post_name == "stormP" || post_name == "droughtP" || post_name == "heatP"){
                addModel(post_name)
            }
        }

    } else if(toggle == false){
        button.classList.remove('eventTypeButtonFocus')
        button.classList.add('eventTypeButton')


        //Display number of events based on time period
        if(timePeriod == "All"){
            numEventsVal -= value
            numEvents.innerText = numEventsVal.toString();
            if(name == "flames" || name == "sun" || name == "storm" || name == "drought" || name == "heat"){
                removeModel(name)
            }
            if(post_name == "stormP" || post_name == "droughtP" || post_name == "heatP"){
                removeModel(post_name)
            }
        }
        if(timePeriod == "Pre"){
            numEventsVal -= pre
            numEvents.innerText = numEventsVal.toString();
            if(name == "flames" || name == "sun" || name == "storm" || name == "drought" || name == "heat"){
                removeModel(name)
            }
        }
        if(timePeriod == "Post"){
            numEventsVal -= post
            numEvents.innerText = numEventsVal.toString();
            if(name == "flames" || name == "sun" || name == "storm" || name == "drought" || name == "heat"){
                removeModel(name)
            }
            if(post_name == "stormP" || post_name == "droughtP" || post_name == "heatP"){
                removeModel(post_name)
            }
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

        document.getElementById('eventHeader').innerText = "Weather Events"
        document.getElementById('eventCaption').innerText = "The different symbols show the type of extreme weather event."


        if(timePeriod == "All"){
            numEvents.innerText = "252"
            addModel("flames")
            addModel("sun")
            addModel("storm")
            addModel("stormP")
            addModel("drought")
            addModel("droughtP")
            addModel("heat")
            addModel("heatP")
        }
        if(timePeriod == "Pre"){
            numEvents.innerText = "18"
            addModel("storm")
            addModel("drought")
            addModel("heat")
        }
        if(timePeriod == "Post"){
            numEvents.innerText = "234"
            addModel("flames")
            addModel("sun")
            addModel("stormP")
            addModel("droughtP")
            addModel("heatP")
        }





    } else if(allToggle == false){
        document.getElementById('allEvents').classList.remove('eventTypeButtonFocus')
        document.getElementById('allEvents').classList.add('eventTypeButton')


        removeModel("flames")
        removeModel("sun")
        removeModel("storm")
        removeModel("stormP")
        removeModel("drought")
        removeModel("droughtP")
        removeModel("heat")
        removeModel("heatP")

        numEvents.innerText = "0"
    }


});