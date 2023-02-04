const gender = document.querySelector('.gender');
const massege = document.querySelector('.message');
const date = document.querySelector('.date');
const dateTitle = document.querySelector('.dateTitle')
const name = document.querySelector('.name');
const inpuToNamePeople = document.querySelector('.inpuToNamePeople')

const dateNow = new Date();
const age = Number();
let genderSelect = true;
let firstName;
let surename;



///////model

/////view
date.addEventListener('change', (ev) => {
    age = Number(ev.target.value.substr(0, 4));
    console.log( dateNow );

    massege.innerHTML = dateNow.getFullYear() - age + ' Рочки';

});

const girlAlert = () => {
    massege.innerHTML = `${firstName}, у дівчат вік не питають)`
}

const girlAlertoff = () => {
    massege.innerHTML = " "
}

////////controler

gender.addEventListener('change', (ev) => {
    console.log ('Gender', ev.target.value )
    return ev.target.value == 1 ? genderSelect = true : genderSelect = false, yearsOldOff();
    
})


inpuToNamePeople[0].addEventListener('change', (ev) =>{
    firstName = ev.target.value.charAt(0).toUpperCase() + ev.target.value.slice(1).toLowerCase();
    console.log(firstName.length)
    check()
    return firstName;
})
inpuToNamePeople[1].addEventListener('change', (ev) =>{
    
    surename = ev.target.value.charAt(0).toUpperCase() + ev.target.value.slice(1).toLowerCase();
    console.log(surename.length)
    check()
    return surename;
})

const check = () => {
    console.log(firstName)
    console.log(genderSelect)
    if (firstName.length == 0){
        return check;
    }
     else if (surename.length == 0){
        return check;
    } else {
        dateInput();
    }
}

const dateInput = () => {
    return (genderSelect === true) ? yearsOld() : girlAlert();
}

const yearsOld = () => {
    date.classList.add('on')
    dateTitle.classList.add('onn')
}

const yearsOldOff = () => {
    date.classList.remove('on')
    dateTitle.classList.remove('onn')
}

