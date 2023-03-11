let checkboxAll = document.querySelector(".checkAll");
let checkbox = document.querySelectorAll(".check");
let products = document.querySelectorAll(".product");
let searchInput = document.querySelector(".searchinp");
let productName = document.querySelectorAll(".productName");
let productNameArr = [];
for(let i = 0; i < productName.length;i++){
    productNameArr.push(productName[i].textContent)
}
function search(){
    
}
function check(clarification){
    if(clarification == 1){
        let checknum = 0;
        for(let y = 0; y < checkbox.length;y++){
                if(checkbox[y].checked == ""){
                    checkboxAll.checked = "";
                    for(let u = 0; u < products.length; u++){
                        if(checkbox[y].id == products[u].id){
                            products[u].style.display = "none";
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
        }
        for(let y = 0; y < checkbox.length;y++){
            checkbox[y].checked = "true";
        }
     }
}
for(let i = 0; i < checkbox.length; i++){
    checkbox[i].addEventListener("change", function(){
        check(1);
    })
}
checkboxAll.addEventListener("change", function(){
    check();
})