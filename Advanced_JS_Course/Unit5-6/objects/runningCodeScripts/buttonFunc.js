//Adding Button Functionality:
let action = document.querySelector('.runCode'),
    action2 = document.querySelector('.clear');


function buttonModule() {
    action.addEventListener('click', function () {
        //calling the function
        presentData();
    });

    action2.addEventListener('click', function () {
        console.clear();
    });
};
buttonModule();