




// document.querySelector('ageForm').addEventListener('submit', function(e){
//     e.preventDefault();
// })
// let birthinput = document.getElementById("birthdate");
// let btn2 = document.getElementById("submit");

// btn2.addEventListener("click", ()=>{
//      let newsdate = new Date();
//     let d = newsdate.getFullYear();
//     document.getElementById("ageYears").innerHTML = `${d - birthinput.value}`;
// });








document.getElementById('ageForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let birthinput = document.getElementById("birthdate");
    let birthdateStr = birthinput.value;
    if (!birthdateStr) {
        alert("Please enter a birthdate.");
        return;
    }

    let birthdate = new Date(birthdateStr);
    let today = new Date();

    let age = today.getFullYear() - birthdate.getFullYear();
    let monthDifference = today.getMonth() - birthdate.getMonth();
    let dayDifference =birthdate.getDate() - today.getDate();

    if (dayDifference < 0 || (dayDifference === 0 && monthDifference < 0)) {
        age--;
    }

    document.getElementById("ageYears").innerHTML = `Years: ${age}`;
    
    document.getElementById("ageMonths").innerHTML = `Month: ${monthDifference}`;

    document.getElementById("ageDays").innerHTML = `ageDays: ${dayDifference}`;
});























