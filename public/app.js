

const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded',(e) => {
    setTimeout(()=>{
        splash.classList.add('display-none');
    },1000);
})





















// var theme =  Math.floor(Math.random() * 16777215).toString(16);
// var url = 'https://www.thecolorapi.com/scheme?hex=' + theme;
// fetch(url)
// .then(function (response) {
// // The API call was successful!
// return response.json();
// })
// .then(function (data) {
// // This is the JSON from our response
// console.log(data);    
// document.getElementById("p1").style.color = data.colors[0].hex.value; 
// document.getElementById("p2").style.color = data.colors[0].hex.value; 
// document.getElementById("p3").style.color = data.colors[0].hex.value; 
// document.getElementById("p4").style.color = data.colors[0].hex.value;  
// document.getElementById("googleBtn").style.backgroundColor = data.colors[1].hex.value;  
// document.getElementById("box").style.backgroundColor = data.colors[3].hex.value;  
// document.getElementById("googleBtn").style.color = data.colors[0].hex.value;  


// document.getElementById("head").style.backgroundColor = data.colors[4].hex.value;  
// // document.getElementById("text").innerHTML = data.content;
// // document.getElementById("author").innerHTML = data.author;
// }).catch(function (err) {
// // There was an error
// console.warn('Something went wrong.', err);
// });