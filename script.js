let header = document.querySelector("#header")
let button = document.querySelector("#button")
let taskDiv = document.querySelector("#taskPlace")
let button2 = document.querySelector("#button2")


button.onclick = function(event) {
    event.preventDefault();

    


    fetch("https://pokeapi.co/api/v2/pokemon/")
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {

            console.log(myJson);

            let randDecimal = Math.random();
            let randNum = randDecimal * 20;
            let randInt = Math.ceil(randNum);
            
            console.log(myJson);

            let newDiv = document.createElement("div");
            newDiv.style.display = "flex";
            newDiv.style.border = "1px solid red";
            newDiv.style.borderRadius = "11px";
            newDiv.style.backgroundColor = "rgba(114, 82, 114, 0.355)";
            newDiv.style.fontSize = "30px";
            newDiv.style.paddingTop = "10px";

            let newP = document.createElement("p")
            newP.innerHTML = "You found a: " + myJson.results[randInt].name;

            newImg = document.createElement("img")

            newDiv.appendChild(newP);

            fetch(myJson.results[randInt].url)
                .then(function(response) {
                    return response.json();
                })
                .then(function(myJson2) {

                    newImg.src = myJson2.sprites["back_default"];
                    newDiv.appendChild(newImg);

                    taskDiv.appendChild(newDiv);

                });

            
        });
 


} 

button2.onclick = function(event) {
   
    taskDiv.innerHTML = "" //The code is functional - published for my college applications
}