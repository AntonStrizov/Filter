const searchbar = document.getElementById("search")
const checkboxes = document.getElementsByName("filter")
const productDivs = document.getElementsByClassName("product")
const productNames = document.getElementsByClassName("productName")

function filter(typeArr, type) {
    if (type === "category") {
        for (let j = 0; j<productDivs.length; j++) {
            productDivs[j].classList.remove("filtered")
        }
        for (let i = 0; i<typeArr.length; i++) {
            for (let j = 0; j<productDivs.length; j++) {
                let child = productDivs[j].childNodes[3]
                if (productDivs[j].classList.contains(typeArr[i]) && child.innerText.toLowerCase().includes(searchbar.value.toLowerCase().trim())) {
                    productDivs[j].classList.remove("d-none")
                    productDivs[j].classList.add("d-inline")
                    productDivs[j].classList.add("filtered")
                } else {
                    if (!productDivs[j].classList.contains("filtered")) {
                        productDivs[j].classList.remove("d-inline")
                        productDivs[j].classList.add("d-none")
                    }
                }
            }
        }
    } else {
        for (let i = 0; i<productNames.length; i++) {
            let parent = productNames[i].parentNode
            parent.classList.remove("filtered")
        }
        if (typeArr.length > 0) {
            for (let i = 0; i < typeArr.length; i++) {
                for (let j = 0; j < productNames.length; j++) {
                    if (productNames[j].innerText === typeArr[i]) {
                        let parent = productNames[j].parentNode
                        parent.classList.remove("d-none")
                        parent.classList.add("d-inline")
                        parent.classList.add("filtered")
                    } else {
                        let parent = productNames[j].parentNode
                        if (!parent.classList.contains("filtered")) {
                            parent.classList.remove("d-inline")
                            parent.classList.add("d-none")
                        }
                    }
                }
            }
        } else {
            for (let j = 0; j < productNames.length; j++) {
                let parent = productNames[j].parentNode
                parent.classList.add("d-none")
                parent.classList.remove("d-inline")
            }
        }
    }
}

function listenAdd() {
    const all_check = document.getElementsByClassName("checkAll")[0]
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            let typeArr = []
            for(let i = 0; i < checkboxes.length; i++) {
                if (checkboxes[i].checked) {
                    typeArr.push(checkboxes[i].value)
                }
            }
            all_check.checked = typeArr.length === 3 && all_check.checked === false;
            filter(typeArr, "category")
        })
    });
}

function listenSearch() {
    searchbar.addEventListener('keyup', function () {
        let cleaned = searchbar.value.toLowerCase().trim()
        let nameArr = []
        for (let i = 0; i<productNames.length; i++) {
            let parent = productNames[i].parentNode
            if (productNames[i].innerText.toLowerCase().includes(cleaned) || parent.classList.contains("filtered") && productNames[i].innerText.toLowerCase().includes(cleaned)) {
               nameArr.push(productNames[i].innerText)
            }
        }
        filter(nameArr, "names")
    })
}
window.addEventListener("load", () => {
    listenSearch()
    listenAdd()
});