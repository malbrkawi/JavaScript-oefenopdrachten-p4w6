const question = prompt(`vul de wachtwoord in!`);
const questionLowerCase = question.toLocaleLowerCase();
const chek = document.querySelector('.true');
const warning = document.querySelector('.warning');
const x = document.querySelector('.false');

if (questionLowerCase == `h@ck3d`) {
    alert(`de wachtwoord is goed`)
    chek.classList.remove('disable')
} else if (questionLowerCase == ``) {
    alert(`you've failed, game over!`)
    warning.classList.remove('disable')
} else {
    alert(`de wachtwoord is niet goed`)
    x.classList.remove('disable')
};