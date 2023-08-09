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
let cartContaining = document.getElementsByClassName('cartContainer');
let h3 = document.querySelector('h3');
let h4 = document.querySelector('h4');
let h5 = document.querySelector('h5');
let h6 = document.querySelector('h6');




button1[0].onclick = function (){
    shirt1++;
    }
button1[1].onclick = function (){
    shirt2++;
    
    }
button1[2].onclick = function (){
    shirt3++;
    }
button1[3].onclick = function (){
        shirt4++;
     
    }
    button1[4].onclick = function (){
        shirt5++;
       
        
    }
    button1[5].onclick = function (){
        shirt6++;
        
        
    }
    button1[6].onclick = function (){
        shirt7++;
        
        
    }
    button1[7].onclick = function (){
        shirt8++;
       
        
    }

cartIcon.onclick = function (){
for (let i = 0; i < shirtBox.length; i++){
    shirtBox[i].style.display = 'none';
}
for (let i = 0; i < cartContaining.length; i++){
    cartContaining[i].style.display = 'flex';
}
h6.style.display = 'flex';
h3.innerHTML = h3.innerHTML + shirt1;
h4.innerHTML = h4.innerHTML + shirt2;
h5.innerHTML = h5.innerHTML + shirt3;

}