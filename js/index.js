//  <!------ JavaScript for Toggle Menu ------>

var navLinks = document.getElementById("navLinks");

function showMenu() {
  navLinks.style.right = "0";
}

function hideMenu() {
  navLinks.style.right = "-200px";
}

// ------------Accordion ---------


let toggles = document.getElementsByClassName('toggle');
let acc_answerDiv = document.getElementsByClassName('acc-answer');
let icons = document.getElementsByClassName('icon');

for(let i=0; i<toggles.length; i++){
    toggles[i].addEventListener('click', ()=>{
        if(parseInt(acc_answerDiv[i].style.height) != acc_answerDiv[i].scrollHeight){
            acc_answerDiv[i].style.height = acc_answerDiv[i].scrollHeight + "px";
            toggles[i].style.color = "#fff";
            icons[i].classList.remove('fa-plus');
            icons[i].classList.add('fa-minus');
        } 
        else {
            acc_answerDiv[i].style.height = "0px";
            toggles[i].style.color = "#e0a2e1";
            icons[i].classList.remove('fa-minus');
            icons[i].classList.add('fa-plus');
        }

        for(let j=0; j<acc_answerDiv.length; j++){
            if(j!=i){
                acc_answerDiv[j].style.height = "0px";
                toggles[j].style.color = "#e0a2e1";
                icons[j].classList.remove('fa-minus');
                icons[j].classList.add('fa-plus');
            }
        }
    })
}


