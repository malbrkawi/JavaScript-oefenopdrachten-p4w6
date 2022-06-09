console.log(`js loaded!`);
const btn = document.querySelector('.btn');
const text = document.querySelector('.text');
btn.addEventListener('click', (bt) => {
    bt.preventDefault();
    const firstNameInput = document.querySelector('.firstname');
    const lastNameInput = document.querySelector('.lastname');
    const firstNameLowerCase = firstNameInput.value.toLowerCase();
    const lastNameLowerCase = lastNameInput.value.toLowerCase();
    const str = firstNameLowerCase;
    const str2 = str.charAt(0).toUpperCase() + str.slice(1);
    console.log(str2);
    const st = lastNameLowerCase;
    const st2 = st.charAt(0).toUpperCase() + st.slice(1);
    console.log(st2);
    text.textContent = `jouw naam is ` + str2 + ` ` + st2;
    firstNameInput.value = ``;
    lastNameInput.value = ``;
})