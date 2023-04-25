let display = document.querySelector('.display p')
let buttons = Array.from(document.querySelectorAll('.button'));
console.log(buttons)

buttons.map(button => {
    button.addEventListener('click', (e) => {
        console.log(e.target.innerHTML)
        switch(e.target.innerHTML) {
            case 'Clear':
                display.innerHTML = '';
                break;
            case 'Delete':
                if(display.innerHTML) {
                    display.innerHTML = display.innerHTML.slice(0,-1);
                }
                break;
            case '=':
                try {
                    display.innerHTML = eval(display.innerHTML);
                } catch {
                    display.innerHTML = 'Error'
                }
                break;
            case '±':
                try {
                    display.innerHTML = display.innerHTML - (display.innerHTML * 2)
                } catch {
                    display.innerHTML = 'Error';
                }
                break
            default:
                display.innerHTML += e.target.innerHTML;
        }
    });
})