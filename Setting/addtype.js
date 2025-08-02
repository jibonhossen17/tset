let submitBtn = document.getElementById("sb");

submitBtn.addEventListener("click", () => {
  let productName = document.getElementById("productN");
  
  
  if (productName.value != "") {
    
    console.log(productName.value)
    
    // Add Total value to the storage For Total buy today 
    
    productN = productName.value;
    const data = JSON.parse(localStorage.getItem('AllSourceType')) || [];
    const entry = data.find(item => item.name.toLowerCase() === productN.toLowerCase());
    if (entry) {
      alert(` এটি পূর্বে যোগ করা হয়েছে`);
    }
  
  else {
    
    let name = productN;
    
    const entry = { name };
    let entries = JSON.parse(localStorage.getItem('AllSourceType')) || [];
    entries.push(entry);
    localStorage.setItem('AllSourceType', JSON.stringify(entries));
    
    alert(" এটি যোগ করা সকল হয়েছে")
    
    
    /*
        let d = dataoflocal.totalpurchase
        
        let totalpurchase = Number(d) + Number(totalPrice)
        
        const data = { totalpurchase };
        // Convert the object to a JSON string and store it
        localStorage.setItem('userData', JSON.stringify(data));
        console.log('Data saved:', data);
        
        
      }
    
    */
    
    
    
    productName.value = '';
    
  } 
  }
  else {
  alert(" Source এর নাম লিখুন")
  
}


})

// Back button 

let backtosetting = document.getElementById("backtosetting");

backtosetting.addEventListener('click',()=>{
 window.location.href="setting.html" 
  
})
