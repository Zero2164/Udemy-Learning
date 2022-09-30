var li = document.querySelectorAll("li");


for(var i = 0; i < li.length; i++) {
    li[i].addEventListener("pointerover", function () {
        this.classList.add("selected");
    });

    li[i].addEventListener("pointerout", function () {
        this.classList.remove("selected");
    });

    li[i].addEventListener("click", function(){
        this.classList.toggle("done");
    });
};
