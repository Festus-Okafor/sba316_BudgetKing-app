
const body = document.createElement('body');
document.body.style.backgroundColor = "black";


 const display = document.getElementById("display")
 const input = document.getElementById("amountInput")

 //display = "";
 input.addEventListener('input' , function(e){
     display.textContent = e.target.value;
 })
 
 //accessing the submit button
  const submitBtn = document.getElementById("submitBtn")
  const new_income = document.getElementById("newincome")
  const selectElement = document.getElementById("select")
  const selectedValue =  selectElement.value;
  //console.log(selectedValue)
    //adding event listener to it
    // comparing the user intension choice
  submitBtn.addEventListener('click', (e) =>{
     if( selectedValue === Income){
        //add transaction to new income and save
       new_income.push(input.textContent = value);
       e.preventDefault;
     }

  })
  




   
