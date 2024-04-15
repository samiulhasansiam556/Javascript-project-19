
// let productDiv = document.querySelector(".pr");
// var categoryList = document.querySelector(".cl")
// let allCat = [];



// let displayProduct = async (allCheckCat=[])=>{
//     productDiv.innerHTML = '';
//     // categoryList.innerHTML = '';
//     let product = await fetch('https://fakestoreapi.com/products');
//     let finalProduct = await product.json();


//     finalProduct.forEach((element)=>{
 
//         if(!allCat.includes(element.category)){
               
//         categoryList.innerHTML += `<label>
//         <input type="checkbox" onclick ='categoryFilter()' value="${element.category}"> ${element.category}
//         </label>`;

//         allCat.push(element.category);

//         }

//         if(allCheckCat.length == 0){
//             allCheckCat = allCat;
//         }
         

//         if(allCheckCat.includes(element.category)){ 
//         productDiv.innerHTML +=`<div class="prItems">
//         <img src="${element.image}">
//         <h4>${element.category}</h4>
//         <p>${element.price} | ${element.rating.rate}</p>
//         <h3>${element.title}</h3>
//         </div>`
//         }
   
//     });
// }





// displayProduct();

// let categoryFilter = ()=>{
//     let checkInput = document.querySelectorAll("input[type='checkbox']");
//     let checkData=[];
//     checkInput.forEach((e)=>{
//         if(e.checked){
//             checkData.push(e.value);
//         }
//     })

//     displayProduct(checkData)

// }


let productDiv = document.querySelector(".pr");
let categoryList = document.querySelector(".cl");
let allCat = [];
let allCheckCat = []; // Initialize outside the function

let displayProduct = async (allCheckCat = []) => {
    productDiv.innerHTML = '';
    // categoryList.innerHTML = ''; // Clear category list

    let product = await fetch('https://fakestoreapi.com/products');
    let finalProduct = await product.json();

    finalProduct.forEach((element) => {
        if (!allCat.includes(element.category)) {
            categoryList.innerHTML += `<label>
            <input type="checkbox" onclick ='categoryFilter()' value="${element.category}"> ${element.category}
            </label>`;
            allCat.push(element.category);
        }

        if (allCheckCat.length == 0) {
            allCheckCat = allCat;
        }

        if (allCheckCat.includes(element.category)) {
            productDiv.innerHTML += `<div class="prItems">
            <img src="${element.image}">
            <h4>${element.category}</h4>
            <p>${element.price} | ${element.rating.rate}</p>
            <h3>${element.title}</h3>
            </div>`;
        }
    });
}

let categoryFilter = () => {
    let checkInput = document.querySelectorAll("input[type='checkbox']");
    let checkData = [];
    checkInput.forEach((e) => {
        if (e.checked) {
            checkData.push(e.value);
        }
    })
    displayProduct(checkData);
}

// Initial call to display products
displayProduct();
