

$(document).ready(function () {
    let anim = $('#animateButtonMenu');
    let animOne = anim.find('[data-name="one"]');

    $(anim).click(function () {
        console.log(animOne);
        $(animOne).css({ 'transform': 'matrix(1, 0.90, 0, 1, 0, 12)'});
    });
});


//function toAnimateButton(){
//    let anim = document.getElementById("animateButtonArray");

//    let animateButton = document.getElementsByClassName("animateButtonMenu");

//    animateButton[0].style.animation = "change-one 2s forwards";  
//    animateButton[1].style.animation = "change-two 2s forwards";  
//    animateButton[2].style.animation = "change-three 2s forwards";  

//}

