
let action = document.querySelector('.runCode'),
    action2 = document.querySelector('.clear');


function myFunc() {
    action.addEventListener('click', function () {
        //Example 1:
        if (1 === 1) {
            console.log('Testing to see if 1 === 1:', `~ It's True! ~`);
        };
        if (1 !== 1) {
            console.log('Testing to see if 1 !== 1:', `~ It's True! ~`);
        } else {
            console.log('Testing to see if 1 !== 1:', `~ It's False! ~`);
        };

        //Example 2:
        function performanceReview() {
            //Performance review:
            //3 - SUpErStaR
            //2 - Meets Expectations
            //1 - Needs Improvement
            let rating = 0;
            console.log('====== Performance Review ======');
            function question() {
                rating = Number(prompt('Enter Your Rating of Employee'));
                answer();
            };
            function answer() {
                if (rating) {
                    //example of nested statements
                    if (rating === 3) {
                        console.log('Performance Review:', `You are a SUpErStaR, your score is 3/3`);
                    } else if (rating === 2) {
                        console.log(`Performance Review:`, `You Meet Expectations, your score is 2/3`);
                    } else if (rating === 1) {
                        console.log(`Performance Review:`, `You Need Improvement, your score is 1/3`);
                    } else {
                        invalidRating();
                    };
                } else {
                    invalidRating();
                }
            };
            function invalidRating() {
                rating = 0;
                alert('Invalid Rating!');
                question();
            };
            question();
            answer();
        };
        performanceReview();

        //Example 3:
        function scoreGame() {
            let highScore = 1430;
            let userScore = 1600;
            console.log('====== Score Game ======');
            if (userScore >= highScore) {
                console.log(`Congrats, you have the new high score of ${userScore}`);
                highScore = userScore;
            } else {
                console.log(`Good Game. Your score of ${userScore} did not beat the high score of ${highScore}`);
            };
        };
        scoreGame();



    });
    action2.addEventListener('click', function () {
        console.clear();
    });
};

myFunc();


