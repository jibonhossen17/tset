
    document.addEventListener('DOMContentLoaded', () => {
          addTransactionItem();
             // Initialize total price
        });
        
             function generateid() {
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

        
        
        

  // get the vale of available balance to show in account section

    let avb = document.getElementById("available-bal")

    
    let tstock = document.getElementById("totalbuytoday")
        let tstock_kg = document.getElementById("totalbuytoday-kg")
   
    
    
    const dataoflocal = JSON.parse(localStorage.getItem('Availablebalance'));
      if (dataoflocal) {
      avb.innerText=dataoflocal.availablebalance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        
      }
      else {
        
      }
  
    
    const astock = JSON.parse(localStorage.getItem('AllProductStock'));
      if (astock) {
           let mon=Math.floor(astock.stock);
      let kg= Number(astock.stock)- Number(mon);
      let fkg=Math.floor(kg*40);
     
          
          
          
      tstock.innerText=`${mon} মন`
      tstock_kg.innerText=`${fkg}  কেজি`
        
      }
      else {
        
      }
      
      let profitshow = document.getElementById("profit")
      
      let id = generateid();
      
   const dataofprofit = JSON.parse(localStorage.getItem('Profit'));
   
      
   if (dataofprofit) {
    finddataById(dataofprofit,id)
   }
   else {
       console.log("NO data found")
   }
   
   
   function finddataById(array,id) {
      const item = array.find(item =>       item.id === id);
      if (item) {
        profitshow.innerText=item.profit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
       
      }
      

    
}

let  div = document.getElementById("prod");

div.addEventListener('click',()=>{

    window.location.href="profits.html"
    
})


let  duediv = document.getElementById("pdue");

duediv.addEventListener('click',()=>{
    window.location.href = "../account /duepayment.html";
    
})



let dueP = document.getElementById("dp")




    const dataofdue = JSON.parse(localStorage.getItem('DueTK'));
      if (dataofdue) {
      dueP.innerText=dataofdue.totalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        
      }
      else {
        
      }
  






 function addTransactionItem() {
            
            const container = document.getElementById('transactionContainerFordashboard');
          
            const entries = JSON.parse(localStorage.getItem('AllProduct'));

            // Reverse entries to show the latest at the top
            if (entries) {
                

         entries.reverse().slice(0,20).forEach(entry => {
    
    
            const productname = JSON.parse(localStorage.getItem(`${entry.name}_Stock`));
            
            
            
             let mon=Math.floor(productname.stock);
      let kg= Number(productname.stock)- Number(mon);
      let fkg=Math.floor(kg*40);
     
     let a = Number(productname.stock);
     let  v = Number(productname.total) ;
     let average = Math.floor(v/a)||0;
          
    
                

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
                            <p class="transaction-name">${entry.name}</p>
                            <p class="transaction-category">${average}</p>
                        </div>
                    </div>
                    <div class="transaction-amount">
                        <p><p id="mon">${mon}</p>/${fkg}</p>
                    </div>
                </div>
            `;
            container.appendChild(transactionDiv);
                          
            });
            
            } else {
                
             
            }    
            
        }