function closeMe(){
    x = document.getElementById("demo");
    // Change the style atrribute directly
    // x.style.display = "none";
    // Change the class
    x.className = "closed";
}

function openMe(){
    x = document.getElementById("demo");
    // Change the style atrribute directly
    //x.style.display = "block";
    // Change the class
    x.className = "open";
}