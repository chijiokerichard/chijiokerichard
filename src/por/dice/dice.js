const diceRoll = document.querySelector('.dice-roll')
const diceRoll2 = document.querySelector('.dice-roll2')
const diceScore = document.querySelector('.score');
const totalScore = document.querySelector('.total-score');
const diceScore2 = document.querySelector('.score2');
const totalScore2 = document.querySelector('.total-score2');
const img = document.querySelector('.diceImg')


function diColor() {
    string = '@your dice';
    const ul = document.createElement('ul');
    for (let i = 0; i <= string.length; i++) {

        let li = document.createElement('li')
        li.textContent = string[i];
        if (string[i] === 'd') {
            li.style.marginLeft = '15px'
        }
        ul.appendChild(li), 2000
    }
    const header = document.querySelector('header');
    header.appendChild(ul)
}

diColor()


let rollDice = document.createElement('button')
let rollDice2 = document.createElement('button')
rollDice2.setAttribute('class', 'rol2')

diceScore2.textContent = 0;
totalScore2.textContent = 0;
diceScore.textContent = 0;
totalScore.textContent = 0;


function dm(score){
    return score
}
dm()
var calls = []
function PlayGame(scoreOne) {
    let play = false;
    if(scoreOne % 2 === 0){
        !play && compu();
        play && getRoll()
    }else{
        !play && getRoll()
        console.log(scoreOne)
        console.log(dm)
    }
}
PlayGame()


function getRoll() {
    let score = 0;
    rollDice.setAttribute('class', 'rol1')
    rollDice.textContent = 'roll 🎲';
    diceRoll.appendChild(rollDice)
    rollDice.addEventListener('click', () => {
        let play = false;
        img.classList.add('anim')
        const randomDice = (Math.floor(Math.random() * 6) + 1);
        img.setAttribute('src', './gallary/al.png')
        setTimeout(() => {
            let attri = img.setAttribute('src', `./gallary/die_face_${randomDice}_T.png`)
            img.classList.remove('anim')
            score += randomDice;
            diceScore.textContent = score;
            let scoreOne = score;
            if (score % 2 === 0) {
                totalScore.textContent = Number(totalScore.textContent) + Number(diceScore.textContent);
                score = 0;
                diceScore.textContent = 0;

                rollDice2.textContent = 'roll 🎲';
                try {
                    diceRoll.removeChild(rollDice)
                } catch {
                    console.log('error')
                }
            }
            PlayGame(scoreOne)
            if (img.getAttribute('src') !== attri) {
                img.setAttribute('src', `./gallary/die_face_${randomDice}_T.png`)
            } else {
                img.setAttribute('src', `./gallary/die_face_${randomDice}_T.png`)
            }


        }, 1000)
    })
}


function compu() {
    let score = 0;
    const check = rollDice2.getAttribute('class')
    let play = false;
    if (check === 'rol2') {
        setInterval(() => {
            let randomDice = (Math.floor(Math.random() * 6) + 1);
            let attri = img.setAttribute('src', `./gallary/die_face_${randomDice}_T.png`)
            img.classList.add('anim')
            img.setAttribute('src', './gallary/al.png')
            setTimeout(() => {
                score += randomDice;
                diceScore2.textContent = score;
                let scoreTwo = score;
                if (score % 2 === 0) {
                    totalScore2.textContent = Number(totalScore2.textContent) + Number(diceScore2.textContent);
                    score = 0;
                    diceScore2.textContent = 0;

                    rollDice.setAttribute('class', 'rol1')
                    rollDice.textContent = 'roll 🎲';
                    diceRoll.appendChild(rollDice)
                    img.classList.remove('anim')
                }
                img.classList.remove('anim')
                if (img.getAttribute('src') !== attri) {
                    img.setAttribute('src', `./gallary/die_face_${randomDice}_T.png`)
                } else {
                    img.setAttribute('src', `./gallary/die_face_${randomDice}_T.png`)
                }
            }, 2000);
        }, 4000)
    }
}

// compu()
