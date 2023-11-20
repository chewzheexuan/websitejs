import {foodItem} from './fooditem.js';

console.log(foodItem);

function displayItems(){
    var commonwaffles= document.getElementById('commonwaffles')
    var waffleswithtoppings= document.getElementById('waffleswithtoppings')
    var wafflesets= document.getElementById('wafflesets')
    var sidedishes= document.getElementById('sidedishes')
    var addextratoppings= document.getElementById('addextratoppings')
    var beverages= document.getElementById('beverages')

    const commonwafflesData= foodItem.filter(item=> item.category=='commonwaffles');
    console.log(commonwafflesData);
    const waffleswithtoppingsData= foodItem.filter(item=> item.category=='waffleswithtoppings');
    console.log(waffleswithtoppingsData);
    const wafflesetsData= foodItem.filter(item=> item.category=='wafflesets');
    console.log(wafflesetsData);
    const sidedishesData= foodItem.filter(item=> item.category=='sidedishes');
    console.log(sidedishesData);
    const addextratoppingsData= foodItem.filter(item=> item.category=='addextratoppings');
    console.log(addextratoppingsData);
    const beveragesData= foodItem.filter(item=> item.category=='beverages');
    console.log(beveragesData);

    commonwafflesData.map(item=> {
        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card');

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star= document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' '+ item.rating;

        var heart= document.createElement('i');
        heart.setAttribute('class','fa fa-heart-o add-to-cart');
        heart.setAttribute('id',item.id);
        
        cardTop.appendChild(star);
        cardTop.appendChild(heart);

        var img= document.createElement('img');
        img.src=item.img;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= itemName.name

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= itemName.price

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        commonwaffles.appendChild(itemCard);

    })
}
displayItems();