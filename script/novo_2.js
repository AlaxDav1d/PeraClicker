let number = 0

    function contar(){   
                    number++
                    aparece()
                }
    function aparece(){
                const p = document.querySelector("#contador")
                p.innerText = number 
                }
    function cem(){
                    number = number + 100
    }
    if(number >= 100){
        cem();        
        aparece();
    }
    else{
            contar()
            aparece()
    }
function reiniciar(){
                    number = 0 
                    aparece()
            }
aparece()
            
