const btn = document.querySelector('.btn');
const txt = document.querySelector('.name');
const firstName = `Mohammad`;
const lastName = ` Albrakwi`;


btn.addEventListener('click', () => {
    txt.innerHTML = `
    
            <p class="text-white mt-5">Mijn naam is ${firstName +  lastName}</p>


    `
})