
      // Load data from local storage on page load
        document.addEventListener('DOMContentLoaded', () => {
            addTransactionItem()
             // Initialize total price
        });
        
          const dataoflocal = JSON.parse(localStorage.getItem('userData'));
  if (dataoflocal) {
  let totalbuytoday =   dataoflocal.totalpurchase.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      
  document.getElementById("totalbuytoday").innerText=totalbuytoday;
  
  /*
  
    let available_bal =   dataoflocal.available_balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  
  */
  
  } else {
      
  }

        function addTransactionItem() {
            
            const container = document.getElementById('transactionContainer');
          
            const entries = JSON.parse(localStorage.getItem('entries')) || [];

            // Reverse entries to show the latest at the top
            

            entries.reverse().slice(0,20).forEach(entry => {
    
                      let mon=Math.floor(entry.amount);
      let kg= Number(entry.amount)- Number(mon);
      let fkg=Math.floor(kg*40);
     let totalp = Math.floor(entry.totalPrice).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
     

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
                            <p class="transaction-name">${entry.type}</p>
                            <p class="transaction-category">${entry.name}</p>
                            <p class="transaction-category">${mon}/${fkg} x ${entry.price}</p>
                        </div>
                    </div>
                    <div class="transaction-amount">
                        <p><b>${totalp}</b></p>
                    </div>
                </div>
            `;
            container.appendChild(transactionDiv);
                          
            });
        }
    

// For available balance showing 
 let avb = document.getElementById("available-bal")
    
    
    
    const dataoflocalforAb = JSON.parse(localStorage.getItem('Availablebalance'));
      if (dataoflocalforAb) {
      avb.innerText=dataoflocalforAb.availablebalance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        
      }
      else {
        
      }
  

let bakiHisab = document.getElementById("due");
bakiHisab.addEventListener("click",()=>{
    
    window.location.href="clear.html"
    
})


