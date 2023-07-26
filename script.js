function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.

    button.addEventListener("click", function(event) {

        paragraph.innerHTML = "Houston, we have liftoff!";
              
    });

    missionAbort.addEventListener("mouseover", function(event) {

        missionAbort.style.backgroundColor = "red";

    });

    missionAbort.addEventListener("mouseleave", function(event) {

        missionAbort.style.backgroundColor = "";

    });
    
            
}

window.addEventListener("load", init);