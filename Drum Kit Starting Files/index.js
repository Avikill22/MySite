var allbutton = document.querySelectorAll(".drum");
for(var i=0;i<allbutton.length;i++){
    allbutton[i].addEventListener("click",function (){
        var buttonInner = this.innerHTML;
        sound(buttonInner);
        
    });
}
document.addEventListener("keydown",function(event){
    sound(event.key);
});
function sound(key){
    switch (key){
        case "w":
            var action = new Audio("sounds/tom-1.mp3") ;
            action.play();
        break;
        case 'a':
            var action = new Audio("sounds/tom-2.mp3") ;
            action.play();
        break;
        case 's':
            var action = new Audio("sounds/tom-3.mp3") ;
            action.play();
        break;
        case 'd':
            var action = new Audio("sounds/tom-4.mp3") ;
            action.play();
        break;
        case 'j':
            var action = new Audio("sounds/snare.mp3") ;
            action.play();
        break;
        case 'k':
            var action = new Audio("sounds/crash.mp3") ;
            action.play();
        break;
        case 'l':
            var action = new Audio("sounds/kick-bass.mp3") ;
            action.play();
        break;
        default:
            console.log(buttonInner);
    }
}