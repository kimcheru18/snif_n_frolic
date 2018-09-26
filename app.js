let priceArray = [
    {
        numPets: '1 dog',
        frequency: '5 days per week',
        time: '20-30 min',
        price: '$50'
    },

    {
        numPets: '1 dog',
        frequency: '3 days per week',
        time: '20-30 min',
        price: '$35'
    },

    {
        numPets: '1 dog',
        frequency: '1 time',
        time: '20-30 min',
        price: '$12'
    },

    {
        numPets: '2 dogs',
        frequency: '5 days per week',
        time: '20-30 min',
        price: '$60'
    },

    {
        numPets: '2 dogs',
        frequency: '3 days per week',
        time: '20-30 min',
        price: '45'
    },

    {
        numPets: '2 dogs',
        frequency: '1 time',
        time: '20-30 min',
        price: '$17'
    },
]

document.addEventListener('DOMContentLoaded', init);

function init(){
    displayPrices();
    printPage();

    document.querySelector('#about').classList.add('hide');
    document.querySelector('#prices').classList.add('hide');
    document.querySelector('#contact').classList.add('hide');
    document.querySelector('#gallery').classList.add('hide');

    document.querySelector('#home-nav').addEventListener('click', function() {
        document.querySelector('#about').classList.add('hide');
        document.querySelector('#prices').classList.add('hide');
        document.querySelector('#contact').classList.add('hide');
        document.querySelector('#gallery').classList.add('hide');
    });

    document.querySelector('#about-nav').addEventListener('click', function() {
        document.querySelector('#about').classList.remove('hide');
        document.querySelector('#prices').classList.add('hide');
        document.querySelector('#contact').classList.add('hide');
        document.querySelector('#gallery').classList.add('hide');
    });

    document.querySelector('#prices-nav').addEventListener('click', function() {
        document.querySelector('#about').classList.add('hide');
        document.querySelector('#prices').classList.remove('hide');
        document.querySelector('#contact').classList.add('hide');
        document.querySelector('#gallery').classList.add('hide');
    });

    document.querySelector('#contact-nav').addEventListener('click', function() {
        document.querySelector('#about').classList.add('hide');
        document.querySelector('#prices').classList.add('hide');
        document.querySelector('#contact').classList.remove('hide');
        document.querySelector('#gallery').classList.add('hide');
    });

    document.querySelector('#gallery-nav').addEventListener('click', function() {
        document.querySelector('#about').classList.add('hide');
        document.querySelector('#prices').classList.add('hide');
        document.querySelector('#contact').classList.add('hide');
        document.querySelector('#gallery').classList.remove('hide');
    });

}

function displayPrices(){
    let html = "";

    html += "<article>";
    html += "<h1>" + 'Prices' + "</h1>";
    html += "<table>";
    html += "<thead>";
    html += "<th>" + '# of Pets' + "</th>";
    html += "<th>" + 'Frequency' + "</th>";
    html += "<th>" + 'Time' + "</th>";
    html += "<th>" + 'Price' + "</th>";
    html += "</thead>";

    html += "<tbody>";

    for (let i=0; i<priceArray.length; i++){
        var priceDetails = priceArray[i];
        html += "<tr>";
        html += "<td>" + priceDetails.numPets + "</td>";
        html += "<td>" + priceDetails.frequency + "</td>";
        html += "<td>" + priceDetails.time + "</td>";
        html += "<td>" + priceDetails.price + "</td>";
        html += "</tr>";
    }

    html += "</tbody>";
    html += "</table>";
    html += "<p>" + 'Free initial consult' + "</p>"
    html += "</article>";

    document.querySelector('#prices').innerHTML = html;
}


function printPage(){
   document.querySelector('#print').addEventListener('click', printDoc);
}

function printDoc(e){
   window.print();
}
