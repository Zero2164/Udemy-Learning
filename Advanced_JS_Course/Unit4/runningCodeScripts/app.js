let action = document.querySelector('button');


function myFunc() {
    action.addEventListener('click', function () {
        alert(`It's working!`);
        console.log(`3 + 4 =`, 3 + 4);
    });

};

myFunc();