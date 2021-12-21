let yearOfBirth = 1999;

let date = new Date();
let currentYear = date.getUTCFullYear();

let age = currentYear - yearOfBirth;

(function updateAge_and_Year(){
    let ageArea = document.getElementById('age');
    let thisYear = document.getElementById('copyright');

    ageArea.innerHTML = `<label for="age" class="age">Age:</label> ${age} years</p>`;
    thisYear.innerHTML = `<p>Olili Timothy &copy;${currentYear}. All rights reserved.</p>`;

})();
