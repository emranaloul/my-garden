'use strict'
let flowerHeader = ['Image', 'Type', 'Season'];
let flowerInput = [];

const parenetElement = document.getElementById('Data');

function flowerDetails(Image, Type, Season){
    this.Image = this.getImage();
    this.Type = Type
    this.Season = Season
    flowerInput.push(this);
}

flowerDetails.prototype.getImage = function(){
    this.Image = `img/${this.Type}.jpeg`
}

flowerDetails.prototype.render = function(){

    Data.innerHTML = '';

     const table = document.createElement('table')
     parenetElement.appendChild(table);

    function tableHeader(){
     const trElement = document.createElement('tr');
     table.appendChild(trElement);


     for(let i in flowerHeader){
        const thElement = document.createElement('th');
        trElement.appendChild(thElement);
         thElement.textContent = flowerHeader[i];
     }
    }
    tableHeader();

    const tbody = document.createElement('tbody');
    table.appendChild(tbody);

    const trElement = document.createElement('tr');
    tbody.appendChild(trElement);

    let flowerInputI = getData();

    console.log(flowerInputI)

    for(let i in flowerInputI){
        const trElement = document.createElement('tr');
        tbody.appendChild(trElement);

        const td1Element = document.createElement('td');
        trElement.appendChild(td1Element);
        td1Element.textContent = document.createElement('img').src = flowerInputI[i].Image;

        const td2Element = document.createElement('td');
        trElement.appendChild(td2Element);
        td2Element.textContent = flowerInputI[i].Type;

        const td3Element = document.createElement('td');
        trElement.appendChild(td3Element);
        td3Element.textContent = flowerInputI[i].Season;
    }




}


const formElement = document.getElementById('flowerSelection');

formElement.addEventListener('submit', function(event){
    event.preventDefault();
    const type = event.target.flowerType.value;
    const season = event.target.season.value;
    
    const flowerOrder = new flowerDetails('' ,type, season);
    flowerOrder.getImage();
    save();
    
    formElement.reset();
    
    flowerOrder.render();

})

function save(){

    let saved = getData();

    if(flowerInput.length === 0 || flowerInput.length === 1 ){
        for(let i in saved){
            flowerInput.unshift(saved[i])
        }
    }
    localStorage.setItem('information', JSON.stringify(flowerInput));
}
function getData(){
    let information = localStorage.getItem('information');
    if(information){
        information = JSON.parse(information)
        console.log(information)
        return information;
    }else {return []}

}

console.log(getData());
console.log(flowerInput);


