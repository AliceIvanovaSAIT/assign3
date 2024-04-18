/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

var costPerDay = 35;
var numberSelectedDays = 0;
var calculatedCost;

var monday = document.getElementById("monday");
var tuesday = document.getElementById("tuesday");
var wednesday = document.getElementById("wednesday");
var thursday = document.getElementById("thursday");
var friday = document.getElementById("friday");

var fullDay = document.getElementById("full");
var halfDay = document.getElementById("half");

var clearButton = document.getElementById("clear-button");
var calculatedCostElement = document.getElementById("calculated-cost");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

monday.addEventListener("click", function(){
    if (monday.classList.contains("clicked")){
        monday.classList.remove("clicked");
        numberSelectedDays -= 1;
    }
    else{
        monday.classList.add("clicked");
        numberSelectedDays += 1;
        calculation();
    }
});

tuesday.addEventListener("click", function(){
    if (tuesday.classList.contains("clicked")){
        tuesday.classList.remove("clicked");
        numberSelectedDays -= 1;
    }
    else{
        tuesday.classList.add("clicked");
        numberSelectedDays += 1;
        calculation();
    }
});

wednesday.addEventListener("click", function(){
    if (wednesday.classList.contains("clicked")){
        wednesday.classList.remove("clicked");
        numberSelectedDays -= 1;
    }
    else{
        wednesday.classList.add("clicked");
        numberSelectedDays += 1;
        calculation();
    }
});

thursday.addEventListener("click", function(){
    if (thursday.classList.contains("clicked")){
        thursday.classList.remove("clicked");
        numberSelectedDays -= 1;
    }
    else{
        thursday.classList.add("clicked");
        numberSelectedDays += 1;
        calculation();
    }
});

friday.addEventListener("click", function(){
    if (friday.classList.contains("clicked")){
        friday.classList.remove("clicked");
        numberSelectedDays -= 1;
    }
    else{
        friday.classList.add("clicked");
        numberSelectedDays += 1;
        calculation();        
    }
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearButton.addEventListener("click", function(){
    monday.classList.remove("clicked");
    tuesday.classList.remove("clicked");
    wednesday.classList.remove("clicked");
    thursday.classList.remove("clicked");
    friday.classList.remove("clicked");

    numberSelectedDays = 0;
    calculation();
});

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

halfDay.addEventListener("click", function(){
    halfDay.classList.add("clicked");
    fullDay.classList.remove("clicked");
        
    costPerDay = 20;
    calculation();
});

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

fullDay.addEventListener("click", function(){
    halfDay.classList.remove("clicked");
    fullDay.classList.add("clicked");
        
    costPerDay = 35;
    calculation();
});

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculation(){
    calculatedCost = numberSelectedDays*costPerDay;
    calculatedCostElement.innerHTML = calculatedCost;

}
