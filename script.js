function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.

    button.addEventListener("mouseover", function (e) {

        button.style.backgroundColor = "lightblue";

    });

    button.addEventListener("mouseleave", function (e) {

        button.style.backgroundColor = "";

    });

    button.addEventListener("click", function(event) {

        paragraph.innerHTML = "Houston, we have lift off!";
              
    });

    missionAbort.addEventListener("mouseover", function(event) {

        missionAbort.style.backgroundColor = "red";

    });

    missionAbort.addEventListener("mouseleave", function(event) {

        missionAbort.style.backgroundColor = "";

    });

    missionAbort.addEventListener("click", function(event) {

       let choice = confirm("Are you sure you want to abort the mission?");

       if (choice){

            paragraph.innerHTML = "Mission aborted! Space shuttle returning home";
            
       }

    });
    
            
}

window.addEventListener("load", init);