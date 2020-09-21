const card = document.getElementById("card");
// const cardBody = document.getElementById("card-body");

card.addEventListener("mousemove",dynamicCard);
card.addEventListener("mouseleave",revertItem);


function revertItem(e){

    // e.target.style.transform="rotateX(0deg) rotateY(0deg)";
    e.target.firstElementChild.removeAttribute("style");

        document.getElementById("card").removeAttribute("style");
}
function dynamicCard(e){
    let cardCenterX = card.offsetWidth/2;
    let mousePositionX = e.offsetX;

    if(mousePositionX < cardCenterX){
        var mouseMoveX = ((0-cardCenterX))+mousePositionX ;
        mouseMoveX = Math.abs(mouseMoveX /25);
    }
    else if(mousePositionX === cardCenterX){
        mouseMoveX = 0;
    }

    else{
        var mouseMoveX = mousePositionX-cardCenterX;
        mouseMoveX = 0-mouseMoveX/25;
    }


    let cardCenterY = card.offsetHeight/2;
    let mousePositionY = e.offsetY;

    if(mousePositionY < cardCenterY){
        // if(e.target ===cardBody || ){
        //     mousePositionY = e.target.parentElement.offsetY;
        // }
        var mouseMoveY = ((0-cardCenterY))+mousePositionY ;
        mouseMoveY = mouseMoveY /25;
    }
    else if(mousePositionY === cardCenterY){
        mouseMoveY = 0;
    }

    else{


        var mouseMoveY = mousePositionY-cardCenterY;
        mouseMoveY = Math.abs(0-mouseMoveY/25);

        
    }

    card.setAttribute("style","transform : rotateY("+ mouseMoveX+"deg) rotateX("+ mouseMoveY + "deg)");
    console.log(mousePositionY);

}