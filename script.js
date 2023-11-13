function addToDisplay(value){
    const display = document.getElementById('result')
    display.value += value;
}
function clearDisplay(){
    const display = document.getElementById('result');
    display.value = '';
}

function calculate(){
    const display = document.getElementById('result')
    try{
        display.value = eval(display.value);
    }catch(error){
        display.value = 'Error'
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        if (button.textContent === 'C'){
            clearDisplay();
        }else if (button.textContent === '='){
            calculate();
        }else{
            addToDisplay(button.textContent);
        }
    });
});