let checkboxAll = document.querySelector(".checkAll");
let checkbox = document.querySelectorAll(".check");
let products = document.querySelectorAll(".product");
let searchInput = document.querySelector(".searchinp");
let productName = document.querySelectorAll(".productName");
let productNameArr = []; 
// for(let i = 0; i < productName.length;i++){
//     productNameArr.push(productName[i].textContent)
// }
searchInput.addEventListener("change", function(){
    check( 1,searchInput.value);
})
function search(letters){
    for(let r = 0; r < productNameArr.length; r++){
                 if(productNameArr[r].indexOf(letters) === -1){
                     products[r].style.display = "none";
                }
        }
    // for(let r = 0; r < productNameArr.length; r++){
    //     for(let t = 0; t < letters.length; t++){
    //         if(productNameArr[r].indexOf(letters) === -1){
    //             products[r].style.display = "none";
    //         }
    //         // for(let g = 0; g < letters[t].length; g++){
    //         //     for(let y = 0; y < productNameArr[r].length; y++){
    //         //         // if(letters[t][g] == productNameArr[r][y]){
    //         //         //     productNameArr[r][y].style.
    //         //         // }
    //         //     }
                
    //         // }
    //     }
    // }
}
function check(clarification,impVal){
    for(let i = 0; i < productNameArr.length;i++){
             productNameArr.pop();
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
                            for(let f = 0; f < productNameArr.length; f++){
                                if(productNameArr[f] != productName[u].textContent){
                                    productNameArr.push(productName[u].textContent)
                                    console.log(productNameArr)
                                }else if(productNameArr.length == 0){
                                    productNameArr.push(productName[u].textContent)
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
                        for(let f = 0; f < productNameArr.length; f++){
                            if(productNameArr[f] != productName[u].textContent){
                                productNameArr.push(productName[u].textContent)
                                console.log(productNameArr)
                            }else if(productNameArr.length == 0){
                                productNameArr.push(productName[u].textContent)
                            }
                        } 
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
            for(let f = 0; f < productNameArr.length; f++){
                if(productNameArr[f] != productName[i].textContent){
                    productNameArr.push(productName[i].textContent)
                    console.log(productNameArr)
                }else if(productNameArr.length == 0){
                    productNameArr.push(productName[u].textContent)
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