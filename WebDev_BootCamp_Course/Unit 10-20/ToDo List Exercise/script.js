//TO-DO List:
function ToDoListApp() {
    //Variables
    var todos = [];
    var input = prompt(" What would you like to do? ");
    
    //To-Do App code:
        while(input !== "quit") {
            //handle input
            if(input === "list"){
                listTodos();
            } else if(input === "new") {
                addNewTodo();
            }else if(input === "remove"){
                removeTodo();
            }else if(input === "clear"){
                clearConsole();
            }
            //ask again for new input
            input = prompt(" What would you like to do? ");
        }
        alert(" OK, YOU HAVE NOW QUIT THE APP, PLEASE REFRESH TO START AGAIN! ");    
    
    
    //FUNCTIONS:
    function listTodos() {
        console.log("******** To-Do List: ********")
        todos.forEach(function(todo, i){
            console.log(i + ": " + todo);
        });
        console.log("*****************************")
        alert(" Press 'F12' to check the current To-do list! ");
    }
    
    function addNewTodo() {
        //ask for a new todo
        var newTodo = prompt(" Enter a new To-do list item: ");
        //add to todos Array
        todos.push(newTodo);
        //Feedback
        alert(" New To-do list item has been added! ");
    }
    
    function removeTodo() {
        //ask for the index of the todo to be deleted
        var del = prompt(" Please enter index of To-do list item you wish to delete: ")
        //delete that todo
        //splice
        todos.splice(del, 1);
        alert(" Item No." + del + " has been removed from the To-do list! ");
    }
    
    function clearConsole() {
        //clear the console.log
        console.clear();
        alert(" Console has been cleared!");
    }
    

}
ToDoListApp();