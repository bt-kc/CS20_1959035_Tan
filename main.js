let page = 0;
let result = [];

document.querySelector("#next").addEventListener("click",function(){    
    console.log('clicked');
    if (page*4 < result.length){
         page++;
         LoadToCards(result,page);
    }
});

document.querySelector("#before").addEventListener("click",function(){    
    if ((page-1) >= 0){
         page--;
         LoadToCards(result,page);
    }
});

document.addEventListener('DOMContentLoaded', (event) => {
    GetProducts();
});

function GetProducts(){
    let xhr = new XMLHttpRequest();
    xhr.open(
        "GET",
        `https://fakestoreapi.herokuapp.com/products`,
        true
    );
    xhr.onload = function(){    
        if (this.status == 200) {    
            result = JSON.parse(this.responseText);
            LoadToCards(result,page);            
        }
        else{
            result = staticCatalog;
            LoadToCards(result,page);
        }
    };
    xhr.send();
}

function LoadToCards(prodArr, page){
    /*//radomize prodcuts
    prodArr = prodArr.map((a) => ({sort: Math.random(), value: a}))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
    .slice(0,4);
    console.log(prodArr);*/
    //load to cards
    let cards = document.querySelectorAll(".card");
    for (index = 0; index <=4; index++)
    {
        cards[index].querySelector('img').src = prodArr[4*page+index]['image'];
        cards[index].querySelector('h3').innerHTML = prodArr[4*page+index]['title'];
        cards[index].querySelector('h2').innerHTML = prodArr[4*page+index]['price'];
    };
}