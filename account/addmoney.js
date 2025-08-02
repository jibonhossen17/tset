document.addEventListener('DOMContentLoaded',
  () => {
    handleFormSubmission();
    addType();
  }
);




// Function to handle form submission and retrieve entered values
function handleFormSubmission() {
  // Get form elements
  

  const typeInputs = document.querySelectorAll('input[name="transaction-type"]');
  
    // Function to get selected radio button value
  function getSelectedType() {
    for (const input of typeInputs) {
      if (input.checked) {
        return input.value;
      }
    }
    return '';
  }
  
  
  

/*
  function a (){
    
   
  
    const nameInput = document.querySelector('input[aria-labelledby="name-label"]');
    */
 /* 
  
  const amountInput = document.querySelector('input[aria-labelledby="amount-label"]');
  const priceInput = document.getElementById("price-input")
  const submitButton = document.querySelector('.button');
  


  
  }
  */
  
  
  
  let submitButton = document.getElementById("sb");
  
  // Handle form submission
  submitButton.addEventListener('click', (event) => {
    
    
    
    event.preventDefault(); // Prevent default button behavior
    const typeInputs = document.querySelectorAll('input[name="transaction-type"]');
  
    // Function to get selected radio button value
  function getSelectedType() {
    for (const input of typeInputs) {
      if (input.checked) {
        return input.value;
      }
    }
    return '';
  }
  
    
    
    
    
    
  let amountofInput  = document.getElementById("a");
        let sourceofInput = document.getElementById("source");

  
  
    // Object to store form data
  const formData = {
    txntype: '',
    source: '',
    amount: ''
  };

  
  
  // Function to validate and collect form data
  function collectFormData() {
    formData.txntype = getSelectedType();
    
    formData.amount = parseFloat(amountofInput.value) || '';
  
    
    // Basic validation
    if (!formData.txntype) {
      alert('Please select a Source (Bank or Outstanding).');
      return false;
    }
    if (!formData.amount || formData.amount <= 0) {
      alert('Please enter a valid amount greater than 0.');
      amountInput.focus();
      return false;
    }
    return true;
  }
  
    
    
    
    
    
    
    if (collectFormData()) {
      // Log form data (replace with actual submission logic, e.g., API call)
      
      
      
      
      // Save to local storages 
      
      let transactiontype = formData.txntype;
      let amount = formData.amount;
      let source = sourceofInput.value; 

      // Save to local storage for Form submition
      
      const entry = { transactiontype,source, amount };
      let entries = JSON.parse(localStorage.getItem('AddMoneyTxn')) || [];
      entries.push(entry);
      localStorage.setItem('AddMoneyTxn', JSON.stringify(entries));
      
     
      // Add Total value to the storage For Total buy today 
      
      const dataoflocal = JSON.parse(localStorage.getItem('Availablebalance'));
      if (!dataoflocal) {
        let availablebalance = Number(amount)
        
        const data = { availablebalance };
        // Convert the object to a JSON string and store it
        localStorage.setItem('Availablebalance', JSON.stringify(data));
        console.log('Data saved:', data);
        
      }
      else {
        let d = dataoflocal.availablebalance
        
        let availablebalance = Number(d) + Number(amount)
        
        const data = { availablebalance };
        // Convert the object to a JSON string and store it
        localStorage.setItem('Availablebalance', JSON.stringify(data));
        console.log('Data saved:', data);
      }
      
      /*
          
                  const txn = { name, amount, price, totalPrice: amount * price };
                  let txns = JSON.parse(localStorage.getItem('entries')) || [];
                  txns.push(txn);
                  localStorage.setItem('txns', JSON.stringify(txns));

      */
      alert(`Amount:${amount} source:${source} Type:${transactiontype}`)
      
      
      
      // Optionally reset form
      typeInputs.forEach(input => input.checked = false);
      amountofInput.value = '';
      sourceofInput.value = '';
      
    }
  });
  
}

// Back Button 
let bta = document.getElementById("backtoaccount")

bta.addEventListener('click',()=>{
    window.location.href = "account.html";

  
})

// Add source 


function addType() {
  
  const container = document.getElementById('addType');
  
  const entries = JSON.parse(localStorage.getItem('AllSourceType')) || [];
  
  // Reverse entries to show the latest at the top
  
  
  entries.reverse().slice(0, 20).forEach(entry => {
    
  
    
    const transactionDiv = document.createElement('label');
    transactionDiv.innerHTML = `
                   <label class="radio-label">
            <input type="radio" value=${entry.name} name="transaction-type"/>
            <span id="s1">${entry.name}</span>
          </label>            `;
    container.appendChild(transactionDiv);
    
  });
}



  
  
