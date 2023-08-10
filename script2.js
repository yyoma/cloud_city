let rec = document.getElementById('des')
let recom = document.getElementById('rand');

let recomended = ['rose 2.PNG', 'saku.PNG', 'cloud.PNG', 'flower1.PNG']

let randint = Math.floor(Math.random() *  4)


recom.src = recomended[randint]


if (randint == 1){
    rec.insertAdjacentText("afterbegin","Experience a little bit of Japan with this shirt with beautiful cherry blossoms featured.");
}
else if(randint == 2){
    rec.insertAdjacentHTML("afterbegin" ,
    "100% cotton, featuring a sleek black-bordered square with a dynamic wave and red circle. Bold Cloud City below.");
}else if(randint == 3){
    rec.insertAdjacentHTML("afterbegin","Cloud City's first produced shirt. Support the legacy with this shirt, featuring a minmalistic red flower.");
}else{
    rec.insertAdjacentHTML("afterbegin","Rose 1, a black shirt utlizing 2 roses on the front and back. Best Selling.");
}
    



