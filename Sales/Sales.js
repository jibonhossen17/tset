
      // Load data from local storage on page load
        document.addEventListener('DOMContentLoaded', () => {
            addTransactionItem();
            updateTotalPrice();
            addSalesHistory();
            
            
             // Initialize total price
        });
        /*
                const dataofprofit = JSON.parse(localStorage.getItem('Profit'));
                let da = generateTimeDateCode();


console.log(findById(dataofprofit,da))

// Sample object with IDs as keys
const dataObject = {
  '1': { name: 'John Doe', age: 30 },
  '2': { name: 'Jane Smith', age: 25 },
  '3': { name: 'Bob Johnson', age: 40 }
};

/**
 * Find an item in the object by ID
 * @param {Object} obj - The object to search
 * @param {string|number} id - The ID to look for
 * @returns {Object|null} The found object or null if not found
 
function findById(obj, id) {
  return obj.hasOwnProperty(id) ? obj[id] : null;
}

/**
 * Update the name of an item with the specified ID
 * @param {Object} obj - The object to update
 * @param {string|number} id - The ID of the item to update
 * @param {string} newName - The new name to set
 * @returns {boolean} True if update was successful, false if item not found
 
function updateNameById(obj, id, newName) {
  if (obj.hasOwnProperty(id)) {
    obj[id].name = newName;
    return true;
  }
  return false;
}
*/
function log(a) {
    console.log(a);
}







        
        const dataoflocal = JSON.parse(localStorage.getItem('Sales'));
        

          

          
  if (dataoflocal) {
  let totalsalestoday =   dataoflocal.TK.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      
  document.getElementById("totalbuytoday").innerText=totalsalestoday;
  
  /*
  
    let available_bal =   dataoflocal.available_balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  
  */
  
  } else {
      
  }

 
   addSalesHistory();

  function addSalesHistory() {
   

            
    const container = document.getElementById('transactionContainerForSalesHistory');
  
    const entries = JSON.parse(localStorage.getItem('SalesData'));


    // Reverse entries to show the latest at the top
    if (entries) {
        

 entries.reverse().forEach(entry => {


   

    
    
   
    

  

        

    const transactionDiv = document.createElement('div');
    transactionDiv.innerHTML = `
        <div class="transaction-item">
            <div class="transaction-details">
                <div class="transaction-icon" data-icon="ShoppingCart" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M222.14,58.87A8,8,0,0,0,216,56H54.68L49.79,29.14A16,16,0,0,0,34.05,16H16a8,8,0,0,0,0,16h18L59.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,152,204a28,28,0,1,0,28-28H83.17a8,8,0,0,1-7.87-6.57L72.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,222.14,58.87ZM96,204a12,12,0,1,1-12-12A12,12,0,0,1,96,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,192,204Zm4-74.57A8,8,0,0,1,188.1,136H69.22L57.59,72H206.41Z"></path>
                    </svg>
                </div>
                <div class="transaction-info">
                    <p class="transaction-name">Name: ${entry.name}</p>
                    <p class="transaction-category">Product: ${entry.type}</p>
                       <p class="transaction-category">Payment: ${entry.payment}</p>
                          <p class="transaction-category">Due Amount: ${entry.duepayment}</p>
                </div>
            </div>
            <div class="transaction-amount">
                <p><p style="font-size: 1.5rem; margin-right: 2rem; font-weight: bold; color: #000000;" ><b>${entry.amount}</b></p>

            </div>
            
           
        </div>
    `;
    container.appendChild(transactionDiv);
                  
    });
    
    } else {
        
    
    }    
    
}




 function addTransactionItem() {
            
            const container = document.getElementById('transactionContainerForSales');
          
            const entries = JSON.parse(localStorage.getItem('AllProduct'));


            // Reverse entries to show the latest at the top
            if (entries) {
                

         entries.reverse().slice(0,20).forEach(entry => {
    
    
            const productname = JSON.parse(localStorage.getItem(`${entry.name}_Stock`));

            
            
           
             let mon=Math.floor(productname.stock);
      let kg= Number(productname.stock)- Number(mon);
      let fkg=Math.floor(kg*40);
     
     let a = Number(productname.stock) || 0;
     let  v = Number(productname.total) || 0;

     let average = Math.floor(v/a) || 0;


          
    
                

            const transactionDiv = document.createElement('div');
            transactionDiv.innerHTML = `
                <div class="transaction-item">
                    <div class="transaction-details">
                        <div class="transaction-icon" data-icon="ShoppingCart" data-size="24px" data-weight="regular">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                                <path d="M222.14,58.87A8,8,0,0,0,216,56H54.68L49.79,29.14A16,16,0,0,0,34.05,16H16a8,8,0,0,0,0,16h18L59.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,152,204a28,28,0,1,0,28-28H83.17a8,8,0,0,1-7.87-6.57L72.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,222.14,58.87ZM96,204a12,12,0,1,1-12-12A12,12,0,0,1,96,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,192,204Zm4-74.57A8,8,0,0,1,188.1,136H69.22L57.59,72H206.41Z"></path>
                            </svg>
                        </div>
                        <div class="transaction-info">
                            <p class="transaction-name name">${entry.name}</p>
                            <p class="transaction-category average">${average}</p>
                        </div>
                    </div>
                    <div class="transaction-amount">
                        <p><p style="font-size: 1.5rem; margin-right: 2rem; font-weight: bold; color: #000000;" id="mon"><b>${mon}</b></p>/${fkg}</p>
                    </div>
                    
                    <button class="button" onclick="sales(this)" >বিক্রয় করুন</button>
                </div>
            `;
            container.appendChild(transactionDiv);
                          
            });
            
            } else {
                
            
            }    
            
        }
        
        
               function closeModal(modalId) {
            document.getElementById(modalId).style.display = 'none';
            
        document.getElementById("amount").value="";
        
         document.getElementById("price").value='';

  
  
  document.getElementById('totalPrice').value='';
  
    document.getElementById('name').value='';
     document.getElementById("payment").value='';
        
         document.getElementById("duepayment").value='';

  
            
            
            
            
        }
         
        
        
        // Function for Time
            
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
  return `${day}-${month}`;
}

// Example usage:

     let productName;
        let avgbuyperI ;

        function sales(button) {
            const item = button.parentElement;
            const pname = item.querySelector('.name').textContent;
            
            const averagePrice = item.querySelector('.average').textContent;

            avgbuyperI=averagePrice;
            
            
            productName=pname;
            const pDetails = JSON.parse(localStorage.getItem(`${pname}_Stock`))



            let title = document.getElementById("salesTitle")
           title.innerText=`${pname} ধান বিক্রি করুন`
           
           let avgp =Number(pDetails.total)/Number(pDetails.stock) 
            
       document.getElementById("stockstatus").innerText=`স্টকে আছে :${pDetails.stock}`
               document.getElementById("avgprice").innerText=`গড় কেনা: ${Math.floor(avgp)}`
    
            
            
            
      /*      
            const id = item.querySelector('#id').textContent;
            */
            
        
            document.getElementById('addModal').style.display = 'flex';
        
        let salesbutton = document.getElementById('sales-btn')
     
        salesbutton.addEventListener("click",()=>{





    
      // Save to local storages 
      
      let transactiontype = pname;
      let pay =document.getElementById("payment").value;
      let amount;
      
      if (pay==='') {
          amount=0;
      }
      else {
          amount = pay;
      }
      

      let source = document.getElementById('name').value ; 

      // Save to local storage for Form submition
      
      const entry = { transactiontype,source, amount };
      let entries = JSON.parse(localStorage.getItem('AddMoneyTxn')) || [];
      entries.push(entry);
      localStorage.setItem('AddMoneyTxn', JSON.stringify(entries));

      addSalesData();


function addSalesData() {


      let id = generateTimeDateCode();
      let name = document.getElementById("name").value;
      let type = pname;
      let amount = document.getElementById("amount").value;
      let price = document.getElementById("price").value;
      let totalPrice = document.getElementById("totalPrice").value;
      let payment = document.getElementById("payment").value;
      let duepayment = document.getElementById("duepayment").value;



      const salesentry = { id, name, type, amount, price, totalPrice, payment, duepayment };
      let salesentries = JSON.parse(localStorage.getItem('SalesData')) || [];
      salesentries.push(salesentry);
      localStorage.setItem('SalesData', JSON.stringify(salesentries));

      alert("Sales Data Added Successfully",JSON.stringify(salesentries));
        
}

      
     //For Total Sales today
     
     let totalsales = document.getElementById("totalPrice").value;
     
     
      const dataofsales = JSON.parse(localStorage.getItem('Sales'));
      if (!dataofsales) {
        let TK = Number(totalsales)
        
        const data = { TK };
        // Convert the object to a JSON string and store it
        localStorage.setItem('Sales', JSON.stringify(data));
        console.log('Data saved:', data);
        
      }
      else {
        let d = dataofsales.TK
        
        let TK = Number(d) + Number(totalsales)
        
        const data = { TK };
        // Convert the object to a JSON string and store it
        localStorage.setItem('Sales', JSON.stringify(data));
        console.log('Data saved:', data);
      }
     
     
     
     
     
     
     
     
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
      
      
      const productstock = pDetails;
     
         let amountofsales = document.getElementById("amount").value;
       let priceInput = document.getElementById("price").value;
       
       let salesprice = (amountofsales*priceInput)


console.log(amountofsales)
         
          let d = productstock.stock
          
          let stock = Number(d) - Number(amountofsales);
          
          let salesAA =(Number(averagePrice)*Number(amountofsales))
          
      let profitamount = (salesprice - salesAA);
      
      console.log(profitamount);
          
          
          console.log(salesAA);
          
          let a = productstock.total;
      let total = Number(a)-Number(salesAA);
        
          
          const data = { total, stock };
          // Convert the object to a JSON string and store it
          localStorage.setItem(`${pname}_Stock`, JSON.stringify(data));
          console.log('Data saved:', data);
          
          
    // For Profit saving to local storage 
        
        const id = generateTimeDateCode();

        let profit = profitamount; 
        
        let entriesforprofit = JSON.parse(localStorage.getItem('Profit')) || [];
        
        let checkforprofit = finddataById(entriesforprofit,id);
        
        if (checkforprofit) {
          
          let update = updatedataById(entriesforprofit,id,profit);
        localStorage.setItem('Profit', JSON.stringify(update));
        log("Update Successful")
            
            
        }
        else {
           
           

      let entry = { id,profit };
      log(profit);
      entriesforprofit.push(entry);
      localStorage.setItem('Profit', JSON.stringify(entriesforprofit));
      console.log("Data Push successfully")
           
            
        }


        
        
        
        
        
        
// For Finding Data from an Array and Update it


function finddataById(array,id) {
      const item = array.find(item => item.id === id);
      if (item) {
        return true;
      }

    
}



function updatedataById(array, id, amount) {
  const item = array.find(item => item.id === id);
  if (item) {
  let a = Number(item.profit);
  let  sum = a+Number(amount);
  
  item.profit=sum;
  log(sum);
    log(amount);
  }
  return array;
}

      function getid() {
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






let due = document.getElementById('duepayment').value; 

if (due!=''&& due!=0) {
     
        let name = document.getElementById("name").value;

        
        let amount = document.getElementById("amount").value;
        let price = document.getElementById("price").value;
        let totalPrice = document.getElementById("totalPrice").value; 
        let cashpay = document.getElementById("payment").value;
        
        let id = getid(); 


       

        const bn = { id, name,productName, amount, price, totalPrice,cashpay,due };
        let bentries = JSON.parse(localStorage.getItem(`DuePayments`)) || [];
        bentries.push(bn);
        localStorage.setItem(`DuePayments`, JSON.stringify(bentries));
        
        
        
        
        const dueAmount = JSON.parse(localStorage.getItem("DueTK"));
        if (!dueAmount) {
          
          let totalAmount = due;
          
          const data = { totalAmount };
          // Convert the object to a JSON string and store it
          localStorage.setItem("DueTK", JSON.stringify(data));
          console.log('Data saved:', data);
          
        }
        else {
          
          let d = dueAmount.totalAmount
          let totalAmount = Number(d) + Number(due);
          
          const data = { totalAmount };
          // Convert the object to a JSON string and store it
          localStorage.setItem("DueTK", JSON.stringify(data));
          console.log('Data saved:', data);
          
          
        }
        
        
                 let pamount = document.getElementById("amount").value;

        
           
        const pstockamount = JSON.parse(localStorage.getItem("AllProductStock"));
        
          
          let d = pstockamount.stock;
          let stock = Number(d) - Number(pamount);
          
          const data = { stock };
          // Convert the object to a JSON string and store it
          localStorage.setItem("AllProductStock", JSON.stringify(data));
          console.log('Data saved:', data);
          
          
        
        
  
  
  
  
  
  
}








        
        
      
      
      
      
  



    
        
         closeModal('addModal');
         

          location.reload();   
          
          
        })



            
        
            
    
            
            
            
            
    
                
                
                
            
            
            
            
            
            
            
            
            
            
            
        }

   
    
  function updateTotalPrice() {
  
  
        let amount = document.getElementById("amount");
        
        let price = document.getElementById("price");

  
  
  const totalPriceInput = document.getElementById('totalPrice');
  
  amount.addEventListener('input', calculateTotal);
  
  
  price.addEventListener('input', calculateTotal);
 let paymentInput = document.getElementById("payment");

    paymentInput.addEventListener('input', calculateTotal);

  
  
  calculateTotal();
  
  function calculateTotal() {
    
        let amountInput = document.getElementById("amount");
        
        let priceInput = document.getElementById("price");
        let paymentInput = document.getElementById("payment");
        
        let duePay = document.getElementById("duepayment") ;
       
       const payment = (paymentInput.value) || 0;
        

        
    const amount = (amountInput.value) || 0;

    
    
    const price = (priceInput.value) || 0;
    
         let fp=Math.floor(amount * price);
 
      totalPriceInput.value =fp;
      
      
      duePay.value=Number(fp) - Number(payment);
      
      if (duePay.value<0) {
          alert("Amount can't be 0")
      }
      
       const pstock = JSON.parse(localStorage.getItem(`${productName}_Stock`))
          let stock = pstock.stock;
      
      if (Number(amount)>Number(stock)) {
          
          
          document.getElementById("aal").innerText=`
          আপনি বেশি লিখেছেন` 
        

      }
      else {
                   document.getElementById("aal").innerText='';

      }
      
      
      
      if (Number(price)<Number(avgbuyperI) && avgbuyperI!=='' ) {
          
          
          document.getElementById("bbl").innerText=`
          আপনার এর থেকে বেশি দামে কেনা` 
        

      }
      else {
                   document.getElementById("bbl").innerText='';

      }
      
      
      
      
      
      
      

  }
}



