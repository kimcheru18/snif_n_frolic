let priceArray = [
    {
        numPets: '1 dog',
        frequency: '5 days per week',
        time: '20-30 min',
        price: '$45'
    },

    {
        numPets: '1 dog',
        frequency: '3 days per week',
        time: '20-30 min',
        price: '$30'
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
        price: '$55'
    },

    {
        numPets: '2 dogs',
        frequency: '3 days per week',
        time: '20-30 min',
        price: '$40'
    },

    {
        numPets: '2 dogs',
        frequency: '1 time',
        time: '20-30 min',
        price: '$15'
    },
]

document.addEventListener('DOMContentLoaded', init);

function init(){
    displayPrices();
    printPage();
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
//    document.querySelector('#print').addEventListener('click', print);
//    console.log('here');
}

function print(e){
    //I know I need another e in here somewhere
//    window.print();
}

