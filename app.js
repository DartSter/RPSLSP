let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
// const rock_div = document.getElementById('r');
// const paper_div = document.getElementById('p');
// const scissors_div = document.getElementById('s');
// const lizard_div = document.getElementById('l');
// const spock_div = document.getElementById('sp');
const choices_div = document.querySelector('.choices');
const clearScore_button = document.querySelector('.clearScore');



function getComputerChioce() {
    const choices = ['r', 'p', 's', 'l', 'sp'];
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
};

function convertToWord(letter) {
    if (letter === 'r') return 'Rock';
    if (letter === 'p') return 'Paper';
    if (letter === 'l') return 'Lizard';
    if (letter === 'sp') return 'Spock';
    return 'Scissors';
};

function smaller(word) {
    return `<span class='smaller'>${word}</span>`
}

const smallUserWord = smaller('user');
const smallCompWord = smaller('comp');

function glowingUserChoice(id, addedClass) {
    document.getElementById(id).classList.add(addedClass);
    setTimeout(function () {
        document.getElementById(id).classList.remove(addedClass)
    }, 450);
}

function win(userChoice, computerChioce) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChioce)}${smallCompWord}. You win!`;
    glowingUserChoice(userChoice, 'green-glow');
};

function lose(userChoice, computerChioce) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChioce)}${smallCompWord}. You lost!`;
    glowingUserChoice(userChoice, 'red-glow');

};

function draw(userChoice, computerChioce) {
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChioce)}${smallCompWord}. It's draw!`;

    glowingUserChoice(userChoice, 'gray-glow');

};

function game(userChoice) {
    const computerChioce = getComputerChioce();
    switch (userChoice + computerChioce) {
        case 'rs':
        case 'rl':
        case 'pr':
        case 'psp':
        case 'sp':
        case 'sl':
        case 'sps':
        case 'spr':
        case 'lsp':
        case 'lp':
            win(userChoice, computerChioce);
            break;
        case 'rp':
        case 'rsp':
        case 'ps':
        case 'pl':
        case 'sr':
        case 'ssp':
        case 'spp':
        case 'spl':
        case 'lr':
        case 'ls':
            lose(userChoice, computerChioce);
            break;
        case 'rr':
        case 'pp':
        case 'ss':
        case 'll':
        case 'spsp':
            draw(userChoice, computerChioce);
            break;
    };
};

// function main() {
//     rock_div.addEventListener('click', () => game('r'));
//     paper_div.addEventListener('click', () => game('p'));
//     scissors_div.addEventListener('click', () => game('s'));
//     lizard_div.addEventListener('click', () => game('l'));
//     spock_div.addEventListener('click', () => game('sp'));

// };

// main();

function main (){

choices_div.addEventListener('click', function(e){
    const div_id = e.target.parentElement.id;
    game(div_id);
});
};

main();


// Clear the score

clearScore_button.addEventListener('click', function(){
    UpdateResult();
    userScore = 0;
    computerScore = 0;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;

});

function UpdateResult(){
    result_p.innerHTML = 'Сleared!';
    setTimeout(function(){
        result_p.innerHTML='Try your luck! Click the button!';
    },1000);  
};





