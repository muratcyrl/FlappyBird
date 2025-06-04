let bird=document.getElementById("kuş");
window.document.addEventListener("keydown",haraket);
let bird_y=300,say=1,engel1_x=800,engel2_x=700,score=0;
let game=false,elenme=false;
let engel1=document.getElementById("engel1");
let engel2=document.getElementById("engel2");
let scores=document.getElementById("score");









function haraket(e) {
    if(elenme==false){

    
    switch(e.keyCode){
        case 87:
            bird_y-=75;
            bird.style.top=bird_y+"px";
            break;   
    }
}
    if (game==false && elenme==false) {
        game=true;
        haraket=setInterval(gravity,10);
        
    }
    
}

function gravity() {
    if (elenme==false){
        bird_y+=2;
        bird.style.top=bird_y+"px";
        if (bird_y>460) {
            elenme=true;
            
            
            
            
        }
    }
    if (elenme==false) {
        if (engel1_x>-500) {
            engel1_x-=5;
            engel1.style.left=engel1_x+"px";
            
            
        }
        else{
            engel1_x=1000
        }
        if (engel2_x>-300) {
            engel2_x-=5;
            engel2.style.left=engel2_x+"px";
        }
        else{
            engel2_x=1500;
        }
        if (engel1_x<800) {
            engel1.style.visibility="visible";
           
        }
        else{
            engel1.style.visibility="hidden";
            
        }
        if (engel2_x<800) {
            engel2.style.visibility="visible";
            
        }
        else{
            engel2.style.visibility="hidden";
           
        }
        
        
    }
    if (elenme==false) {
        if (Math.abs(engel1_x-10)<100 && Math.abs(bird_y)<170) {
            elenme=true;
        }
        if (Math.abs(engel2_x-10)<100 && Math.abs(bird_y-650)<340) {
            elenme=true;
        }
    }
    scores.innerHTML=score;





    
}