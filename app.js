
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


   //accessing the first child of the income parent 
  const new_income = document.getElementById("new_income")
  const firstOfIncome = new_income.firstChild;
  //accessing the first child of the expense parent 
   const new_expense = document.getElementById("new_expense")
  const firstOfExpense = new_expense.firstChild;
  

  const selectElement = document.getElementById("select")
  const selectedValue =  selectElement.value;
  //console.log(selectedValue)
    //adding event listener to it
    // comparing the user intension choice
  submitBtn.addEventListener('click', (e) =>{
     if(selectedValue === "Expense"){
        //add transaction to new income and save
      // new_income.push(input.textContent = value);
          firstOfExpense.textContent = e.target.value
          e.preventDefault();
    
     }
     else if(selectedValue === "Income"){
          firstOfIncome.textContent = e.target.value
          e.preventDefault()
     }  })
     
  


  




   
