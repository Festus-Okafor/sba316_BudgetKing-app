
const body = document.createElement('body');
document.body.style.backgroundColor = "white";
const updateIncomeBtn = document.getElementById("updateIncomeBtn")
const updateExpenseBtn = document.getElementById("updateExpenseBtn")
const updateBalanceBtn = document.getElementById("updateBalanceBtn")
const cont1Screen = document.getElementById('.cont1')
 const display = document.getElementById("display")
 const input = document.getElementById("amountInput")
const submitBtn = document.getElementById("submitBtn")
const new_income = document.getElementById("new_income")
  const new_expense = document.getElementById("new_expense")
  const selectElement = document.getElementById("select")
  let selectedValue =  selectElement.value;

 //display = "";
  input.addEventListener('input' , function(e){
     display.textContent = e.target.value;
 }) 





 submitBtn.addEventListener('click' ,(e) =>{
   console.log(selectedValue)
   selectedValue =  selectElement.value;
   if(selectedValue === "Income"){
      const value = input.value;
      const myIncome = Number(new_income.innerText)+ Number(value)
      new_income.innerText = myIncome;
}
      
})
submitBtn.addEventListener('click' ,(e) =>{
   selectedValue =  selectElement.value;
   if(selectedValue === "Expense"){
      const value = input.value;
      const myExpense = Number(new_expense.innerText)+ Number(value)
      new_expense.innerText = myExpense;
}
})



    let updateBtn = document.getElementById("show_update")
    let modalBody = document.getElementById("myModal")
    let saveDate = document.getElementsByClassName("saveData")
    let close = document.getElementsByClassName("close")[0];

  //add event listener & function to the button that opens the modal
      updateBtn.onclick = function(){
         modalBody.style.display = "block"
      }
      close.onclick = function(){
      modalBody.style.display = "none"
     }  
     window.onclick = function(e){
      if(e.target == modalBody){
         modalBody.style.display = "none"
      
      }
       
     }
      

     
    let update_ExpenseBtn = document.getElementById("update_expense")
    let modal_Body = document.getElementById("myMoodal")
    let save_Date = document.getElementsByClassName("saveData")
    let e_close = document.getElementsByClassName("modal_close")[0];
   

    update_ExpenseBtn.onclick = function(){
         modal_Body.style.display = "block"
      }
      e_close.onclick = function(){
      modal_Body.style.display = "none"
     }  
     window.onclick = function(e){
      if(e.target == modal_Body){
         modal_Body.style.display = "none"
      }

     }
  


  /*  function showModal() {document.getElementById("myMoodal").style.display = "block";}
//}
    function saveData(){document.getElementById("myMoodal").style.display = "save"}
    function close(){document.getElementById("myMoodal").style.display = "none"}
    window.onclick = function(e){
      if(e.target == document.document.getElementById("primaryBtn")){
         document.document.getElementById("myMoodal").style.display = "none";
      }
    }
     */
 
      


















 
 //accessing the submit button
  


   //accessing the first child of the income parent 
  

  //accessing the first child of the expense parent 
 
  

  //console.log(selectedValue)
    //adding event listener to it
    // comparing the user intension choice

/* 
    let incomeOutput = []; 
    let sum = 0;
  input.addEventListener('input', (e) =>{
     if(selectedValue === "Income"){
        input.value = new_expense;
         sum += new_expense = newIncomeAmt
         incomeOutput.push(newIncomeAmt);
         //let new_expenseVal = new_expense.push(lastOfExpense.textContent = e.target.value)
         lastOfIncome.textContent = incomeOutput;

     }}) */
    
    /*  else if(selectedValue === "Income"){
          lastOfIncome.textContent = e.target.value
          e.preventDefault()
     }  })
      */
   /* 
  //update income 
  let incomeArr = []
    updateIncomeBtn.addEventListener('click' , (e) => {
           <form id="updateIncome">
           <input id="description" placeholder="type description here"/>
           <input id="amount" placeholder="type Amount here"/>
           <button type="submit">click</button>
          </form>

    })
 updateExpenseBtn.addEventListener('click' , (e) => {
           <form id="updateIncome">
           <input id="description" placeholder="type description here"/>
           <input id="amount" placeholder="type Amount here"/>
           <button type="submit">click</button>
          </form>
    })
     updateExpenseBtn.addEventListener('click' , (e) => {
           <form id="updateIncome">
           <input id="description" placeholder="type description here"/>
           <input id="amount" placeholder="type Amount here"/>
           <button type="submit">click</button>
          </form>
    })

    updateBalanceBtn.addEventListener('click' , (e) => {
           <form id="updateIncome">
           <input id="description" placeholder="type description here"/>
           <input id="amount" placeholder="type Amount here"/>
           <button type="submit">click</button>
          </form>
    })
  
 */



   
