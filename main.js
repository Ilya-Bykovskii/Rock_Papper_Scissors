'use strict'

let gameWarp = function() {
    return (function() {
        let __myCount = 0,
            __enemyCount = 0;

        let __DOM_myCount = document.querySelector('.your-stuf-area span'),
            __DOM_enemyCount = document.querySelector('.enemy-stuf-area span'),
            __resultMesege = document.querySelector('.fight-status');

        const bottons = [
            document.querySelector('.select-rock'), 
            document.querySelector('.select-papper'),   
            document.querySelector('.select-scissors')
        ];

        const generateNumber = function() {
            let rand = Math.random() * (2 + 1);
            return Math.floor(rand);
        };

        const draw = function() {
            __resultMesege.textContent = "draw!";
        }

        const win = function() {
            __DOM_myCount.textContent = ++__myCount;
            __resultMesege.textContent = "win!"
        };

        const lose = function() {
            __DOM_enemyCount.textContent = ++__enemyCount;
            __resultMesege.textContent = "lose!"
        };

        let setEvents = function() {
            bottons.forEach((items, index) => {
                // console.log(items);
                items.addEventListener('click', () => {
                    const PC = generateNumber();
                    console.log(`PC - ${PC}\nMy - ${index}`)
                    if (PC == index) {
                        draw()
                    } else if (index - 1 == PC || PC - 2 == index) {
                        win()
                    } else {
                        lose()
                    }
                })
            })
        }

            setEvents();

            // console.log('ran')
    })();
}

let game = gameWarp();