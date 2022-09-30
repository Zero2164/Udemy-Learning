let action = document.querySelector('.runCode'),
    action2 = document.querySelector('.clear');


function myFunc() {
    action.addEventListener('click', function () {
        let day = Number(prompt('Enter a number to find the corresponding day.'));
        let emoji = prompt('Enter one of the following emoji: Sad, Happy, Eggplant, Heart, Lips').toLowerCase();

        function checkDayIfStatements() {
            if (day === 1) {
                console.log('MONDAY');
            } else if (day === 2) {
                console.log('TUESDAY');
            } else if (day === 3) {
                console.log('WEDNESDAY');
            } else if (day === 4) {
                console.log('THURSDAY');
            } else if (day === 5) {
                console.log('FRIDAY');
            } else if (day === 6) {
                console.log('SATURDAY');
            } else if (day === 7) {
                console.log('SUNDAY');
            } else {
                console.log('Invalid Day :(');
            }
        }
        checkDayIfStatements();

        function checkDaySwitchStatements() {
            switch (day) {
                case 1:
                    console.log('MONDAY');
                    break;
                case 2:
                    console.log('TUESDAY');
                    break;
                case 3:
                    console.log('WEDNESDAY');
                    break;
                case 4:
                    console.log('THURSDAY');
                    break;
                case 5:
                    console.log('FRIDAY');
                    break;
                case 6:
                    console.log('SATURDAY');
                    break;
                case 7:
                    console.log('SUNDAY');
                    break;
            };
        };
        checkDaySwitchStatements();

        function multipleSwitch() {
            switch (emoji) {
                case 'sad':
                case 'happy':
                    console.log(emoji + ' face is colored: yellow');
                    break;
                case 'eggplant':
                    console.log(emoji + ' is colored: purple');
                    break;
                case 'heart':
                case 'lips':
                    console.log(emoji + ' is colored: red');
            };
        };
        multipleSwitch();
    });
    action2.addEventListener('click', function () {
        console.clear();
    });
};

myFunc();