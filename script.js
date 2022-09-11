let currentSymbol = 'X';

const body = document.querySelector('.table-body');
const data = document.querySelectorAll('.data');

const td1 = data[0];
const td2 = data[1];
const td3 = data[2];
const td4 = data[3];
const td5 = data[4];
const td6 = data[5];
const td7 = data[6];
const td8 = data[7];
const td9 = data[8];

function game() {
    body.addEventListener('click', (e) => {
        if(!e.target.innerText) {
            e.target.innerText = currentSymbol;
            currentSymbol = currentSymbol === 'X' ? 'Y' : 'X';
        }
        checkPlayerWin();
        checkRestart();
    })
}

function checkPlayerWin() {

        if(td1.innerText === td2.innerText && td2.innerText === td3.innerText && td1.innerText !== '') {
           gameOver();
        } else if(td4.innerText === td5.innerText && td5.innerText === td6.innerText && td4.innerText !== '') {
            gameOver();
        } else if(td7.innerText === td8.innerText && td8.innerText === td9.innerText && td7.innerText !== '') {
            gameOver();
        } else if(td1.innerText === td4.innerText && td4.innerText === td7.innerText && td1.innerText !== '') {
            gameOver();
        } else if(td2.innerText === td5.innerText && td5.innerText === td8.innerText && td2.innerText !== '') {
            gameOver();
        } else if(td3.innerText === td6.innerText && td6.innerText === td9.innerText && td3.innerText !== '') {
            gameOver();
        } else if(td1.innerText === td5.innerText && td5.innerText === td9.innerText && td1.innerText !== '') {
            gameOver();
        } else if(td3.innerText === td5.innerText && td5.innerText === td7.innerText && td3.innerText !== '') {
            gameOver();
        }

}

function gameOver() {
    currentSymbol === 'Y' ? alert("Player 1 Won") : alert("Player 2 Won");
    
    data.forEach(ele => {
        ele.innerText = '';
    });

    currentSymbol = 'X';
}

function checkRestart() {
    restart = true;
    data.forEach(ele => {
        if(ele.innerText === '') {
            restart = false;
        }
    })
    if(restart) {
        alert("DRAW");
        data.forEach(ele => {
            ele.innerText = '';
        });
        currentSymbol = 'X';
    }
}

game();
