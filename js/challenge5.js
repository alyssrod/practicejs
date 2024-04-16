function challenge5(element){
    var display = document.querySelector("#display");
    if(display){
        console.log("Hovering");
        console.log(element.src);
        console.log(element.alt);
        display.style.backgroundImage = "url('" + element.src + "')";
        display.innerHTML = element.alt;
    }
}

function challenge5leave(element){
    var display = document.querySelector("#display");
    if(display){
        console.log("Leaving");
        display.style.backgroundImage = "";
        display.innerHTML = "Hover over an image below to display the image and the alt text.";
    }
}
