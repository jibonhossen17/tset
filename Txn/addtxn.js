// script.js
// Initialize the script when the DOM is fully loaded
document.addEventListener('DOMContentLoaded',
  () => {
    handleFormSubmission();
    
    updateTotalPrice();
    
    addproduct();
    
  }
);





let back = document.getElementById("back")
back.addEventListener('click', () => {
  window.location.href = "txn.html";
  
})

document.getElementById("g").addEventListener('click', () => {
  document.getElementById("price-input").value = document.getElementById("g").innerHTML
  return updateTotalPrice();
  
})

document.getElementById("f").addEventListener('click', () => {
  document.getElementById("price-input").value = document.getElementById("f").innerHTML
  return updateTotalPrice();
  
})

function clear() {
  // Tab to edit
  
  
  
  const clearInputs = document.querySelectorAll('input[name="clear-type"]');
  let name_sec = document.getElementById("name-s");
  

  
  
  function getSelectedClearType() {
    for (const input of clearInputs) {
      if (input.checked) {
        return input.value;
      }
    }
    return '';
  }
  
  
}



// Function to handle form submission and retrieve entered values
function handleFormSubmission() {
  
  const submitButton = document.querySelector('.button');
  
  
  
  
  
  
  
  // Handle form submission
  submitButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default button behavior
    
    // Get form elements
    const typeInputs = document.querySelectorAll('input[name="transaction-type"]');
    const clearInputs = document.querySelectorAll('input[name="clear-type"]');
    
    
    
    /*  
      const nameInput = document.querySelector('input[aria-labelledby="name-label"]');
      
    
    
    const amountInput = document.querySelector('input[aria-labelledby="amount-label"]');
    const priceInput = document.getElementById("price-input")
    
    // Object to store form data
    const formData = {
      type: '',
      name: '',
      amount: ''
    };*/
    
    // Function to get selected radio button value
    function getSelectedType() {
      for (const input of typeInputs) {
        if (input.checked) {
          return input.value;
        }
      }
      return '';
    }
    
    // clear type 
    
    function getSelectedClearType() {
      for (const input of clearInputs) {
        if (input.checked) {
          return input.value;
        }
      }
      return '';
    }
    
    
    
    
    
    // Function to validate and collect form data
    function collectFormData() {
      let a_mon = document.getElementById("amount-mon").value;
      
      let a_kg = document.getElementById("amount-kg").value;
      let type = getSelectedType();
      let clear = getSelectedClearType();
      
      // Basic validation
      if (!type) {
        alert(`ধানের জাত নির্বাচন করুন`);
        return false;
      }
      if (!clear) {
        alert(`টাকা পরিশোধের মাধ্যম নির্বাচন করুন`);
        return false;
      }
      
      
      
      if (!a_mon || a_mon <= 0) {
        if (!a_kg || a_kg <= 0) {
          alert("Enter a valid num");
          return false;
        }
      }
      
      
      return true;
    }
    
    
    // Cash clear 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    if (collectFormData()) {
      // Log form data (replace with actual submission logic, e.g., API call)
      
      
      
      
      // Save to local storages 
      
      let name = document.getElementById("name").value;
      let price = document.getElementById("price-input").value;
      let totalPrice = document.getElementById("totalPrice").value;
      let type = getSelectedType();
      
      
      let a_mon = document.getElementById("amount-mon").value;
      let a_kg = document.getElementById("amount-kg").value;
      let amount = Number(a_kg / 40) + Number(a_mon);
      
      let dholka = (amount * 40) * 0.025;
      
      let clearT = getSelectedClearType();
      
      // Today's date
      const today = new Date();
      let dateoftoday = (today.toISOString().split('T')[0]); // e.g., "2025-07-05"
      
      // Yesterday's date
      const yesterday = new Date();
      yesterday.setDate(today.getDate() - 1);
      let dateofy = (yesterday.toISOString().split('T')[0]); // e.g., "2025-07-04"
      
      function generateTimeDateCode() {
  const now = new Date();
  
  // Get hours (0-23), minutes (0-59), and seconds (0-59)
  const hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  
  // Get day (1-31) and month (1-12)
  const day = now.getDate().toString().padStart(2, '0');
  const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Month is 0-indexed
  
  // Format as "H:MM:SS_DD-MM"
  return `${hours}:${minutes}:${seconds}-${day}-${month}`;
}

// Example usage:
const timeDateCode = generateTimeDateCode();

      
      
      
      
      
      
      
      
      if (clearT === "বাকি") {
        
      
        let id = timeDateCode;

        const bn = { id, name, type, amount, price, totalPrice };
        let bentries = JSON.parse(localStorage.getItem(`BakiKana`)) || [];
        bentries.push(bn);
        localStorage.setItem(`BakiKana`, JSON.stringify(bentries));
        
        
        
        
        entry();
        
        function entry() {
          let type = getSelectedType()+"-বাকি"
          let id = timeDateCode
          
          const entry = { id, name, type, amount, price, totalPrice };
          let entries = JSON.parse(localStorage.getItem('entries')) || [];
          entries.push(entry);
          localStorage.setItem('entries', JSON.stringify(entries));
          
        }
        
        const dueA = JSON.parse(localStorage.getItem("BakiTaka"));
        if (!dueA) {
          
          let totalP = totalPrice
          
          const data = { totalP };
          // Convert the object to a JSON string and store it
          localStorage.setItem("BakiTaka", JSON.stringify(data));
          console.log('Data saved:', data);
          
        }
        else {
          
          let d = dueA.totalP
          let totalP = Number(d) + Number(totalPrice)
          
          const data = { totalP };
          // Convert the object to a JSON string and store it
          localStorage.setItem("BakiTaka", JSON.stringify(data));
          console.log('Data saved:', data);
          
          
        }
        
        
        
        
        
        
        const allpstock = JSON.parse(localStorage.getItem("AllProductStock"));
        if (!allpstock) {
          
          let stock = amount;
          
          const data = { stock };
          // Convert the object to a JSON string and store it
          localStorage.setItem("AllProductStock", JSON.stringify(data));
          console.log('Data saved:', data);
          
        }
        else {
          
          let d = allpstock.stock
          
          let stock = Number(d) + Number(amount)
          
          const data = { stock };
          // Convert the object to a JSON string and store it
          localStorage.setItem("AllProductStock", JSON.stringify(data));
          console.log('Data saved:', data);
          
          
        }
        
        
        
        
        
        const dataoflocal = JSON.parse(localStorage.getItem('userData'));
        if (!dataoflocal) {
          let totalpurchase = Number(totalPrice)
          
          const data = { totalpurchase };
          // Convert the object to a JSON string and store it
          localStorage.setItem('userData', JSON.stringify(data));
          console.log('Data saved:', data);
          
        }
        else {
          let d = dataoflocal.totalpurchase
          
          let totalpurchase = Number(d) + Number(totalPrice)
          
          const data = { totalpurchase };
          // Convert the object to a JSON string and store it
          localStorage.setItem('userData', JSON.stringify(data));
          console.log('Data saved:', data);
          
          
        }
        
        
        let nameofproduct = `${getSelectedType()}_Stock`
        
        const productstock = JSON.parse(localStorage.getItem(nameofproduct));
        if (!productstock) {
          
          let stock = amount;
        let total = totalPrice;
          
          const data = { total,stock };
          // Convert the object to a JSON string and store it
          localStorage.setItem(nameofproduct, JSON.stringify(data));
          console.log('Data saved:', data);
          
        }
        else {
          
          
          
          let d = productstock.stock
          
          let stock = Number(d) + Number(amount)
          let a = productstock.total;
      let total = Number(a)+Number(totalPrice);
        
          
          const data = { total, stock };
          // Convert the object to a JSON string and store it
          localStorage.setItem(nameofproduct, JSON.stringify(data));
          console.log('Data saved:', data);
          
        }
        
        
        
        
        
        
        
        
        alert("লেনদেনে যোগ করা সফল হয়েছে")
        
        
        // Optionally reset form
        typeInputs.forEach(input => input.checked = false);
        clearInputs.forEach(input => input.checked = false);
        document.getElementById("amount-mon").value = "";
        document.getElementById("amount-kg").value = '';
        document.getElementById("price-input") = '';
        document.getElementById("totalPrice").value = '';
        
        document.getElementById("name").value = ''
        
        
        
        
        
      }
      else {
        
        /// Local search 🔎 
        const aCash = JSON.parse(localStorage.getItem("Availablebalance"));
        if (aCash) {
          
          let acc = Number(aCash.availablebalance)
          
          
          
          if (acc >= Number(totalPrice)) {
            
            
            
            let availablebalance = acc - Number(totalPrice)
            
            const data = { availablebalance };
            // Convert the object to a JSON string and store it
            localStorage.setItem('Availablebalance', JSON.stringify(data));
            console.log('Data saved:', data);
            
            
            
            
            
            // Save to local storage for Form submition
            let id = timeDateCode;
            alert(name)

            const entry = { id, name, type, amount, price, totalPrice };
            let entries = JSON.parse(localStorage.getItem('entries')) || [];
            entries.push(entry);
            localStorage.setItem('entries', JSON.stringify(entries));
            
            
            // Add Total value to the storage For Total buy today 
            
            const dataoflocal = JSON.parse(localStorage.getItem('userData'));
            if (!dataoflocal) {
              let totalpurchase = Number(totalPrice)
              
              const data = { totalpurchase };
              // Convert the object to a JSON string and store it
              localStorage.setItem('userData', JSON.stringify(data));
              console.log('Data saved:', data);
              
            }
            else {
              let d = dataoflocal.totalpurchase
              
              let totalpurchase = Number(d) + Number(totalPrice)
              
              const data = { totalpurchase };
              // Convert the object to a JSON string and store it
              localStorage.setItem('userData', JSON.stringify(data));
              console.log('Data saved:', data);
              
              
            }
            // Add Total amount to the storage For Total buy today 
            
            let nameofproduct = `${getSelectedType()}_Stock`
            
            const productstock = JSON.parse(localStorage.getItem(nameofproduct));
            if (!productstock) {
              let name = getSelectedType();
              let stock = amount;
              let total = totalPrice;
              
              const data = { total,stock };
              // Convert the object to a JSON string and store it
              localStorage.setItem(nameofproduct, JSON.stringify(data));
              console.log('Data saved:', data);
              
            }
            else {
              
              
              
              let d = productstock.stock
              
              let stock = Number(d) + Number(amount)
              let a = productstock.total;
              let total = Number(a)+Number(totalPrice); 
              const data = { total,  stock };
              // Convert the object to a JSON string and store it
              localStorage.setItem(nameofproduct, JSON.stringify(data));
              console.log('Data saved:', data);
              
            }
          
          
          
          // Add Total Stock to the storage For Total buy today 
          
          
          
          
          const allpstock = JSON.parse(localStorage.getItem("AllProductStock"));
          if (!allpstock) {
            
            let stock = amount;
            
            const data = { stock };
            // Convert the object to a JSON string and store it
            localStorage.setItem("AllProductStock", JSON.stringify(data));
            console.log('Data saved:', data);
            
          }
          else {
            
            let d = allpstock.stock
            
            let stock = Number(d) + Number(amount)
            
            const data = { stock };
            // Convert the object to a JSON string and store it
            localStorage.setItem("AllProductStock", JSON.stringify(data));
            console.log('Data saved:', data);
            
            
          }
          
          
          
          
          
          
          alert(`Amount:${amount} Price:${price} Total:${totalPrice} is conform`)
          
          
          
          // Optionally reset form
          typeInputs.forEach(input => input.checked = false);
          clearInputs.forEach(input => input.checked = false);
          document.getElementById("amount-mon").value = "";
          document.getElementById("amount-kg").value = '';
          document.getElementById("price-input") = '';
          document.getElementById("totalPrice").value = '';
          
          
          
          
        }
        }
        else {
          
          alert("আপনার একাউন্টে পর্যাপ্ত ব্যালেন্স নেই এটি সম্পন্ন করার জন্য")
          
        }
      }
      
      
    }
    
    
    
    //form data
    
    
    
    
  }); //Button 
  
  
  
  
} // Handle Submiton


// Update total price dynamically
function updateTotalPrice() {
  
  let a_mon = document.getElementById("amount-mon")
  let a_kg = document.getElementById("amount-kg")
  
  
  
  const priceInput = document.getElementById('price-input');
  const totalPriceInput = document.getElementById('totalPrice');
  
  a_mon.addEventListener('input', calculateTotal);
  a_kg.addEventListener('input', calculateTotal);
  
  priceInput.addEventListener('input', calculateTotal);
  
  calculateTotal();
  
  function calculateTotal() {
    
    let a_mon = document.getElementById("amount-mon").value;
    let a_kg = document.getElementById("amount-kg").value;
    let amount = Number(a_mon) + Number(a_kg / 40);
    const price = (priceInput.value) || 0;
    totalPriceInput.value = Math.floor(amount * price).toFixed(2);
  }
}




function addproduct() {
  
  const container = document.getElementById('allproducts');
  
  const entries = JSON.parse(localStorage.getItem('AllProduct')) || [];
  
  // Reverse entries to show the latest at the top
  
  
  entries.reverse().slice(0, 20).forEach(entry => {
    
    let name = entry.name.trim();
    
    const transactionDiv = document.createElement('label');
    transactionDiv.innerHTML = `
                   <label class="radio-label">
            <input type="radio" value=${entry.name} name="transaction-type"/>
            <span id="s1">${entry.name}</span>
          </label>            `;
    container.appendChild(transactionDiv);
    
  });
}