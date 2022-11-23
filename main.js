//Changes classes on on the icons of the items to show them when we get a value on the different keys.
//https://www.folkstalk.com/tech/replace-class-with-code-examples/ here I got help with how to replace one class with another. 
function updateCollectedItems() {
    if(sessionStorage.getItem("coffee") !== null){
        console.log("you have coffee")
        cup.classList.replace("cupHidden", "cupVisible");
    }
    if(sessionStorage.getItem("cheese") !== null){
        console.log("you have cheese")
        cheese.classList.replace("cheeseHidden", "cheeseVisible");
    }
    if(sessionStorage.getItem("bread") !== null){
        console.log("you have bread")
        bread.classList.replace("breadHidden", "breadVisible");
    }
}
//Makes the browser load the following in the end of the HTML.
window.onload = function() {
     let coffee = document.getElementById("coffee");
     let win = document.getElementById("win");
     let fridge = document.getElementById("fridge");
     let kitchen = document.getElementById("kitchen");
    updateCollectedItems();
    let winRandom = Math.floor(Math.random() * 2);
    console.log(winRandom);
    //Adds a key ("coffee") and a value ("true") in the sessionStorage and there by the updateCollectedItems to show the cup icon on the top.
    //if is in the beginning added to only use Listener if we have an id called "coffee". This to not get errors in the code.
if(coffee){
    coffee.addEventListener("click", () => {
        saveToSessionStorage("coffee", true);
        updateCollectedItems();
     });
}
    // Adds a key ("bread") and a value ("true")" in the sessionStorage and there by the updateCollectedItems to show the bread icon on the top.
    // This if "coffee" has a value. If it doesn't, then you get an alert message instad that you need "coffee" first.
    //if is in the beginning added to only use Listener if we have an id called "kitchen". This to not get errors in the code.
if(kitchen){
    kitchen.addEventListener("click", function () {
        if (sessionStorage.getItem("coffee")){
            kitchen.src = "images/kitchen-2.svg";
            saveToSessionStorage("bread", true);
            updateCollectedItems();
        }  else{
        alert("You have to get your coffee before getting your bread from the pantry, stupid. No breakfast without coffee.")
        }
    });
}
    // Changes the value of "cheese" to "true" in the sessionStorage and there by the updateCollectedItems to show the bread icon on the top.
    // This if "bread" has a value. If it doesn't, then you get an alert message instad that you need "bread" first.
    //if is in the beginning added to only use Listener if we have an id called "fridge". This to not get errors in the code.
if(fridge){
    fridge.addEventListener("click", function () {
        if (sessionStorage.getItem("bread")){ 
            fridge.src = "images/fridge-2.svg"
            saveToSessionStorage("cheese", true);
            updateCollectedItems();
            } 
            else {
                alert("Before getting into your fridge you need bread.")
                }
    });
}
    //If we have a value on "coffee", "bread" & "cheese" you get an alert winning message. 
    //If you don't have values on all three of these, you get an alert that you have to get them first.
    //if is in the beginning added to only use Listener if we have an id called "win". This to not get errors in the code.
if(win){
    win.addEventListener("click", function () {
        if (winRandom === 0){
            alert ("You dropped your breakfast. Hurry up and make new breakfast or you'll be late for school!")
            sessionStorage.clear();
        }
        else if (sessionStorage.getItem("coffee") && sessionStorage.getItem("bread") && sessionStorage.getItem("cheese")){ 
            alert("🏅🎉You got your breakfast and your coffee! Time to head to Garrit's lecture!🎉")
        }
        else{
            alert("You have to get your coffee and your sandwich with cheese before leaving home!")
            }
    });
}
};
//Function to save our keys and values to the sessionStorage.
function saveToSessionStorage(key, value) {
    sessionStorage.setItem(key, value);
}