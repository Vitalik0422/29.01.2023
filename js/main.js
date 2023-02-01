const gender = document.querySelector('.gender');
const massege = document.querySelector('.message');
const date = document.querySelector('.date');
const dateNow = new Date();
let age = Number();


///////model

/////view


////////controler

gender.addEventListener('change', (ev) => {
    let status = ev.target.value;
    console.log(status);
    if(ev.target.value == 1){
        massege.innerHTML = ' ';
        date.classList.add('on');
    }
    else if(ev.target.value == 2){
        massege.innerHTML = 'Дівчат вік не запитують'
        date.classList.remove('on')
    }
    else  {
        date.classList.remove('on')
        massege.innerHTML = 'Виберіть будь ласка стать!';
    }
    return
});

date.addEventListener('change', (ev) => {
    age = Number(ev.target.value.substr(0, 4));
    console.log( dateNow );

    massege.innerHTML = dateNow.getFullYear() - age + ' Рочки';
});
