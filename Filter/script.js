let checkboxAll = document.querySelector(".checkAll");
let checkbox = document.querySelectorAll(".check");
let products = document.querySelectorAll(".product");
let searchInput = document.querySelector(".searchinp");
let productName = document.querySelectorAll(".productName");
let productNameAray = []; 
let visibleelementNameAray = [];
let visibleElementAray = [];
searchInput.addEventListener("change", function(){
    check( 1,searchInput.value);
})
function search(letters){
    for(let r = 0; r < visibleelementNameAray.length; r++){
                 if(productNameAray[r].indexOf(letters) === -1){
                     products[r].style.display = "none";
                }
        }
}
function checkVisibleelements(){
    visibleelementNameAray = [];
    visibleElementAray = [];
    for(let i = 0; i < productName.length; i++){
        if(products[i].style.display == 'none'){
            
        }else{
            visibleelementNameAray.push(productName[i].textContent);
            visibleElementAray.push(products[i]);
            console.log(visibleElementAray)
        }
    }
    console.log(visibleelementNameAray);
}
function check(clarification,impVal){
    for(let i = 0; i < productNameAray.length;i++){
             productNameAray.pop();
         }
    if(clarification == 1){
        let checknum = 0;
        for(let y = 0; y < checkbox.length;y++){
                if(checkbox[y].checked == ""){
                    checkboxAll.checked = "";
                    for(let u = 0; u < products.length; u++){
                        if(checkbox[y].id == products[u].id){
                            products[u].style.display = "none";
                            search(impVal)
                        }else{
                            search(impVal)
                            checkVisibleelements();
                        for(let h = 0; h < visibleelementNameAray.length; h++){
                            if(productNameAray[h] != productName[u].textContent){ 
                                for(let f = 0; f < productNameAray.length; f++){
                                productNameAray.push(productName[u].textContent)
                                }
                            }else if(productNameAray.length == 0){
                                productNameAray.push(productName[u].textContent)
                            } 
                        }
                            search(impVal)
                        }
                    }
                }
                
        }
        for(let y = 0; y < checkbox.length; y++){
            if(checkbox[y].checked != ""){
                checknum++;
                for(let u = 0; u < products.length; u++){
                    if(checkbox[y].id == products[u].id){
                        products[u].style.display = "inline-block";
                        console.log("3")
                        search(impVal)
                        checkVisibleelements();
                        for(let h = 0; h < visibleelementNameAray.length; h++){
                            if(productNameAray[h] != productName[u].textContent){ 
                                for(let f = 0; f < productNameAray.length; f++){
                                productNameAray.push(productName[u].textContent)
                                }
                            }else if(productNameAray.length == 0){
                                productNameAray.push(productName[u].textContent)
                            } 
                        } //                                 dodelat!!!!
                            
                        search(impVal)
                    }
                }
            }
            if(checknum == checkbox.length){
                checkboxAll.checked = "true";
            }            
        }
    }
    if(checkboxAll.checked != ""){
        for(let i = 0; i < products.length;i++){
            products[i].style.display = "inline-block";
            console.log("4")
            search(impVal)
            checkVisibleelements();
            for(let h = 0; h < visibleelementNameAray.length; h++){
                if(productNameAray[h] != productName[i].textContent){ 
                    for(let f = 0; f < productNameAray.length; f++){
                    productNameAray.push(productName[i].textContent)
                    }
                }else if(productNameAray.length == 0){
                    productNameAray.push(productName[u].textContent)
                } 
            }
            search(impVal)
        }
        for(let y = 0; y < checkbox.length;y++){
            checkbox[y].checked = "true";
        }
     }
}
for(let i = 0; i < checkbox.length; i++){
    checkbox[i].addEventListener("change", function(){
        check(1,searchInput.value);
    })
}
checkboxAll.addEventListener("change", function(){
    check("",searchInput.value);
})