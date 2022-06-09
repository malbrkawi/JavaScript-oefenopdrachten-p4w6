const array = [{
    firstName: `Max`,
    lastName: `Laadvermogen`,
    age: `23 jaar`,
    location: `Zoetermeer`,
    foto: `./images/1.png`,
}, {
    firstName: `Timo`,
    lastName: `Bijl`,
    age: `18 jaar`,
    location: `Den Haag`,
    foto: `./images/2.png`,
}, {
    firstName: `Bennie`,
    lastName: `Lekker`,
    age: `34 jaar`,
    location: `Rotterdam`,
    foto: `./images/3.png`,
}, {
    firstName: `Luuk`,
    lastName: `De Jong`,
    age: `23 jaar`,
    location: `breda`,
    foto: `./images/4.png`,
}, {
    firstName: `Thijs`,
    lastName: `Visser`,
    age: `53 jaar`,
    location: `Utrecht`,
    foto: `./images/5.png`,
}];

for (let index = 0; index < array.length; index++) {

    const card = document.querySelector('.row');
    card.innerHTML += `

<div class="col-12 col-lg-4">
             <div class="card bg-dark text-white text-center my-3">
                    <img src="${array[index].foto}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${array[index].firstName} ${array[index].lastName}</h5>
                        <p class="card-text">${array[index].age}</p>
                        <p class="card-text">${array[index].location}</p>
                    </div>
                </div>
            </div>

`
};

const user = document.querySelector('.user');
const div = document.querySelector('.div');
user.addEventListener('click', () => {
    div.classList.remove('disable');
});

const closebtn = document.querySelector('.closebtn');
closebtn.addEventListener('click', (bt) => {
    bt.preventDefault();
    div.classList.add('disable');
})
const submit = document.querySelector('.submit');
submit.addEventListener('click', (eco) => {
    eco.preventDefault();
    const firstName = document.querySelector('.firstname');
    const lastName = document.querySelector('.lastname');
    const age = document.querySelector('.age');
    const city = document.querySelector('.city');
    const img = document.querySelector('.img')
    const card = document.querySelector('.row');
    // foto toevoegen werkt niet
    card.innerHTML += `
<div class="col-12 col-lg-4">
             <div class="card bg-dark text-white text-center my-3">
                    <img src="${img.value}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${firstName.value} ${lastName.value}</h5>
                        <p class="card-text">${age.value}</p>
                        <p class="card-text">${city.value}</p>
                    </div>
                </div>
            </div>

`
    // foto toevoegen werkt niet

    firstName.value = ``
    lastName.value = ``
    age.value = ``
    city.value = ``;
    div.classList.add('disable');
});