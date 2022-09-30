
//Nested Obj example:
const student = {
    firstName : 'David',
    lastName : 'Jones',
    strengths : ['Music', 'Art'],
    exams : {
        midterm : 92,
        final : 88
    }
};
//QUIZ 
const findAvrg = (student.exams.final + student.exams.midterm) / 2; 
console.log(findAvrg); //Prints: 90


//ATLAS's Data structure example
{
    'data' : [
        {
            'server' : 'PC*****',
            'folder path' : '\\M****\\Uni',
            'Approvers' : 'Glenda Ave',
            'Security Groups' : 'uniform',
        },
        {
            'server' : 'PC*****',
            'folder path' : '\\M****\\Uni',
            'Approvers' : 'Glenda Ave',
            'Security Groups' : 'uniform',
        }
    ]
};

