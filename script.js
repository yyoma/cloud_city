let cartIcon = document.getElementById('cart');
let button1 = document.querySelectorAll('button');
let shirtBox = document.getElementsByClassName('shirts_container');
let shirt1 = 0;
let shirt2 = 0;
let shirt3 = 0;
let shirt4 = 0;
let shirt5 = 0;
let shirt6 = 0;
let shirt7 = 0;
let shirt8 = 0;
let shirt9 = 0;
let shirt10 = 0;
let cartContents = document.getElementsByClassName('cartContents');
let h3 = document.querySelector('q1');
let h4 = document.querySelector('q2');
let h5 = document.querySelector('q3');
let h6 = document.querySelector('q4');
let h7 = document.querySelector('q5');
let h8 = document.querySelector('q6');
let h9 = document.querySelector('q7');
let h10 = document.querySelector('q8');
let h11 = document.querySelector('q9');
let h12 = document.querySelector('q10');
let h59 = document.querySelector('h59');
let sum;
let quanity;
let random;
let total = document.querySelector('h24');
let button4 = document.getElementById('button4');
let cartStuff = document.querySelector('cartStuff');



button1[0].onclick = function (){
shirt1++;
console.log(shirt1);
}
button1[1].onclick = function (){
shirt2++;
console.log(shirt2);

}
button1[2].onclick = function (){
shirt3++;
console.log(shirt3);

}
button1[3].onclick = function (){
    shirt4++;
    console.log(shirt4);
    }
button1[4].onclick = function (){
    shirt5++;
    console.log(shirt5);
    
    }
button1[5].onclick = function (){
    shirt6++;
    console.log(shirt6);
    
    }
button1[6].onclick = function (){
    shirt7++;
    console.log(shirt7);
        
    }
button1[7].onclick = function (){
    shirt8++;
    console.log(shirt8);
        
    }
button1[8].onclick = function (){
        shirt9++;
        console.log(shirt9);
            
    }
button1[9].onclick = function (){
    shirt10++;
    console.log(shirt10);
            
}

cartIcon.onclick = function (){
for (let i = 0; i < shirtBox.length; i++){
    shirtBox[i].style.display = 'none';
}
for (let i = 0; i < cartContents.length; i++){
    if (shirt1 > 0){
    cartContents[0].style.display = 'flex';
    }
    if (shirt2 > 0){
    cartContents[1].style.display = 'flex';
    }
    if (shirt3 > 0){
    cartContents[2].style.display = 'flex';
    }
    if (shirt4 > 0){
    cartContents[3].style.display = 'flex';
    }
    if (shirt5 > 0){
    cartContents[4].style.display = 'flex';
    }
    if (shirt6 > 0){
    cartContents[5].style.display = 'flex';
    }
    if (shirt7 > 0){
        cartContents[6].style.display = 'flex';
    }
    if (shirt8 > 0){
        cartContents[7].style.display = 'flex';
    }
    if (shirt9 > 0){
        cartContents[8].style.display = 'flex';
    }
    if (shirt10 > 0){
        cartContents[9].style.display = 'flex';
    }
}
cartStuff.style.display = 'flex';
h59.style.display = 'flex';
total.style.display = 'flex';
button4.style.display = 'block';
h3.innerHTML = h3.innerHTML + shirt1;
h4.innerHTML = h4.innerHTML + shirt2;
h5.innerHTML = h5.innerHTML + shirt3;
h6.innerHTML = h6.innerHTML + shirt4;
h7.innerHTML = h7.innerHTML + shirt5;
h8.innerHTML = h8.innerHTML + shirt6;
h9.innerHTML = h9.innerHTML + shirt7;
h10.innerHTML = h10.innerHTML + shirt8;
h11.innerHTML = h11.innerHTML + shirt9;
h12.innerHTML = h12.innerHTML + shirt10;

quanity = (shirt1 + shirt2 + shirt3 + shirt4 + shirt5 + shirt6 + shirt7 + shirt8 + shirt9 + shirt10);
sum =  quanity * 20;
if (quanity > 0){
    random = Math.floor( Math.random() * 100)
}
else{
    random = '00';
}
total.innerHTML = total.innerHTML +' '+'(' +quanity+ ' items): ' +'  $' + sum + '.'+ random;
}