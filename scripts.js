const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result")

function calculateAge(){
    const birthdayValue = birthdayEl.value;
    if (birthdayValue === ""){
        alert("plz enter your birthday")
    }
    else{
        const age = getAge(birthdayValue)
        resultEl.innerText = `your age is ${age} ${age > 1 ? "years" : "year"} old `

    }
}

function getAge(birthdayValue) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const months = currentDate.getMonth() - birthdayDate.getMonth();

    if (months < 0 || (months === 0 && currentDate.getDate() < birthdayDate.getDate())){
        age--
    }

    return age;

}

btnEl.addEventListener("click", calculateAge);
