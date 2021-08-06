// function calcPrice(price,profit,taxes,marketing){
//     var result=price+profit;
//     var result2=result*taxes;
//     var result3=result2+marketing;
//     return result3;
// }
// var test=calcPrice(23,4,7,2);
// console.log(test);
// function sayHello(name){
//     return name;
// }doc
// var test2=sayHello('hamzawy')
// console.log(test2);
// var userName="Ahmed sayed elhamzawy"
// console.log(userName.slice(2,6));
// console.log(userName.substring(2,6));
// console.log(userName.substr(2,6));
var productArray = []
var addBtn = document.getElementById('addBtn');
var productName = document.getElementById('productName');
var productCategory =  document.getElementById('ProductCategory');
var productPrice = document.getElementById('productPrice');
var currentIndex;
var alert = document.getElementById('alert').classList;
alert.add("d-none");
var nameRejex = /^[A-Z][a-z]{2,6}$/
productName.onkeyup=function()
{

if(!nameRejex.test(productName.value))
{
    addBtn.disabled = "true";
    productName.classList.remove("is-valid");
    productName.classList.add("is-invalid");
    
} else {
    
    productName.classList.remove("is-invalid");
    productName.classList.add("is-valid");
    addBtn.removeAttribute("disabled");
}
if(productName.classList.contains("is-valid")&&productCategory.classList.contains("is-valid")&&productPrice.classList.contains("is-valid")){
    addBtn.removeAttribute("disabled");
    }else{
        addBtn.disabled = "true";

    }
}
var categoryRejex = /^[A-Z &]{1,16}$/
productCategory.onkeyup=function()
{

if(!categoryRejex.test(productCategory.value))
{
    addBtn.disabled = "true";
    productCategory.classList.remove("is-valid");
    productCategory.classList.add("is-invalid");
} else {
    
    productCategory.classList.remove("is-invalid");
    productCategory.classList.add("is-valid");
    addBtn.removeAttribute("disabled");
}
if(productName.classList.contains("is-valid")&&productCategory.classList.contains("is-valid")&&productPrice.classList.contains("is-valid")){
    addBtn.removeAttribute("disabled");
    }else{
       
    addBtn.disabled = "true";
    }
}
var priceRejex = /\d/
productPrice.onkeyup=function()
{

if(!priceRejex.test(productPrice.value))
{
    addBtn.disabled = "true";
    productPrice.classList.remove("is-valid");
    productPrice.classList.add("is-invalid");
} else {
    
    productPrice.classList.remove("is-invalid");
    productPrice.classList.add("is-valid");
    addBtn.removeAttribute("disabled");
}
if(productName.classList.contains("is-valid")&&productCategory.classList.contains("is-valid")&&productPrice.classList.contains("is-valid")){
    addBtn.removeAttribute("disabled");
}else{
    addBtn.disabled = "true";
   
}
}

addBtn.onclick = function () {
    productName.classList.remove("is-valid");
    productCategory.classList.remove("is-valid");
    productPrice.classList.remove("is-valid");
    if(inputsValidation()){
    if(addBtn.innerHTML=='Submit'){
    addData();
    }else{
    editData();
    addBtn.innerHTML='Submit'
    }
    displayData();
    resetData();
}
}

function addData() {
    var inputs = {
        name: productName.value,
        category: productCategory.value,
        price: productPrice.value,
    }
    productArray.push(inputs);
    localStorage.setItem("productList",JSON.stringify(productArray));
}
if(JSON.parse(localStorage.getItem("productList"))!=null ){
   productArray=JSON.parse(localStorage.getItem("productList"));
   displayData();
}


function displayData() {
    var productsCollection = '';
    for (var i = 0; i < productArray.length; i++) {


        productsCollection +=
            `<tr>
 <td>${i + 1}</td>
 <td>${productArray[i].name}</td>
 <td>${productArray[i].category}</td>
 <td>${productArray[i].price} L.E</td>
 <td><button onclick="deleteProduct(${i})" class="btn btn-danger">delete</button></td>
 <td><button onclick="getProduct(${i})" class="btn btn-warning">edit</button></td>
 </tr>`
    }
    document.getElementById('data').innerHTML = productsCollection;
}

function deleteProduct(index) {

    productArray.splice(index, 1);
    displayData();
    localStorage.setItem('productList',JSON.stringify(productArray));
}
function search(val){
    var productsCollection = '';
    
    for (var i = 0; i < productArray.length; i++) {
        if(productArray[i].name.toLowerCase().includes(val.toLowerCase())){

        productsCollection +=
            `<tr>
 <td>${i + 1}</td>
 <td>${productArray[i].name}</td>
 <td>${productArray[i].category}</td>
 <td>${productArray[i].price}</td>
 <td><button onclick="deleteProduct(${i})" class="btn btn-danger">delete</button></td>
 <td><button onclick="getProduct(${i})" class="btn btn-warning">edit</button></td>
 </tr>`
    }
    document.getElementById('data').innerHTML = productsCollection;
}
}
function resetData() {
    var formInputs = document.getElementsByClassName('form-control');
    for (var i = 0; i < formInputs.length; i++) {
        formInputs[i].value = '';
    }

}
function getProduct(index){
    productName.value = productArray[index].name;
    productCategory.value = productArray[index].category;
    productPrice.value = productArray[index].price;
    productName.classList.add("is-valid");
    productCategory.classList.add("is-valid");
    productPrice.classList.add("is-valid");
    addBtn.innerHTML = 'edit';
    currentIndex = index;
}
function editData(){
    var inputs = {
        name: productName.value,
        category: productCategory.value,
        price: productPrice.value,
    }
    productArray[currentIndex] = inputs;
    localStorage.setItem('productList',JSON.stringify(productArray));
}
function inputsValidation(){
if(productName.value==''||productCategory.value==''||productName.value=='' ){
alert.remove("d-none");
return false;
}else{
alert.add("d-none");
return true;
}
}
/*var friends=["ahmed","mohamed","khaled","qadry","boody"];
console.log(friends.length);
console.log(friends.indexOf("qadry"));
console.log(friends.includes("mohamed"));
friends.shift()
friends.unshift("sameh");
console.log(friends);
friends.pop();
console.log(friends)
friends.splice(0,3);
console.log(friends)
friends.splice(1,0,"ahmed","shady","essam");
console.log(friends)  */