const question = prompt(`vul de wachtwoord in!`);
const questionLowerCase = question.toLocaleLowerCase();

if (questionLowerCase == `h@ck3d`) {
    alert(`de wachtwoord is goed`)
} else if (questionLowerCase == ``) {
    alert(`you've failed, game over!`)
} else {
    alert(`de wachtwoord is niet goed`)
};