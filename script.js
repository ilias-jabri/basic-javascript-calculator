let input = document.getElementById('input')
let equalBtn = document.getElementById('equalButton')
let zero = document.getElementById('0')
let one = document.getElementById('1')
let two = document.getElementById('2')
let three = document.getElementById('3')
let foor = document.getElementById('4')
let five = document.getElementById('5')
let six = document.getElementById('6')
let seven = document.getElementById('7')
let eight = document.getElementById('8')
let nine = document.getElementById('9')
let plus = document.getElementById('+')
let minus = document.getElementById('-')
let devide = document.getElementById('/')
let multiplay = document.getElementById('x')
let reset = document.getElementById('c')
let dot = document.getElementById('.')
let del = document.getElementById('Del')
let settings = document.getElementById('settings')
let hidSection = document.getElementById('hidden-section')
let click = document.getElementById('click')
let red = document.getElementById('red')
let black = document.getElementById('black')
let green = document.getElementById('green')
let purple = document.getElementById('purple')
let defaultColor = document.getElementById('default-color')
let orange = document.getElementById('orange')
let calculator = document.getElementById('calcu')

red.onclick = ()=> { calculator.style.background = 'linear-gradient(0deg , red, aqua)'}
black.onclick = ()=> { calculator.style.background = 'linear-gradient(0deg , black, aqua)'}
green.onclick = ()=> { calculator.style.background = 'linear-gradient(0deg , green, aqua)'}
purple.onclick = ()=> { calculator.style.background = 'linear-gradient(0deg , purple, aqua)'}
orange.onclick = ()=>{ calculator.style.background = 'linear-gradient(0deg , orange, aqua)'}
defaultColor.onclick = ()=>{ calculator.style.background = 'linear-gradient(0deg , rgb(53, 53, 94), aqua)'}

click.onclick = ()=>{
        hidSection.style.transform = 'translate(-250px)'
        hidSection.style.visibility = 'hidden'
        hidSection.style.opacity = '0'
        click.style.opacity = '0'
}

settings.onclick = ()=> { 
        console.log(true)
        click.style.opacity = '0.8'
        hidSection.style.opacity = '1'
        hidSection.style.visibility = 'visible'
        hidSection.style.transform = 'translate(0px)'
}



let result = null;
let checkeq = 0;
let stack = null



function numbersInput(val){
        if(checkeq === 1){checkeq = 0; input.value = val}
        else{input.value = input.value + val; stack = val}
}
function operations(val){
        let reg = /\D/
        console.log(reg.test(stack))
        if (reg.test(stack)) {return}
        if(checkeq > 1){checkeq = 0; input.value = val}
        else if(input.value == ''){return}
        else{input.value = input.value + val; stack = val}
}


reset.onclick = function (){input.value = ''}
del.onclick = function (){ 
        let val = input.value
        val = val.split('')
        val.pop()
        val = val.join('')
        input.value = val
}
zero.onclick = ()=>numbersInput('0')
one.onclick = ()=>numbersInput('1')
two.onclick = ()=>numbersInput('2')
three.onclick = ()=>numbersInput('3')
foor.onclick = ()=>numbersInput('4')
five.onclick = ()=>numbersInput('5')
six.onclick = ()=>numbersInput('6')
seven.onclick = ()=>numbersInput('7')
eight.onclick = ()=>numbersInput('8')
nine.onclick = ()=>numbersInput('9')

plus.onclick = () => operations('+')
minus.onclick = () => operations('-')
devide.onclick = () => operations('/')
multiplay.onclick = () => operations('x')
dot.onclick =  () => operations('.')

equalBtn.onclick = function (){
        if (checkeq > 0) {
                return input.value = ''
        }
        checkeq+=1
        result = null
        let kkk = input.value
        let regex = /[-\+\/\*x]/i
        let operator = kkk.match(regex)[0]
        let end = kkk.match(regex).index
        kkk = [...input.value]
        console.log(end, operator)
        let first = kkk.slice(0,end)
        let seccond = kkk.slice(end+1)
        console.log(typeof first)
        console.log(first,seccond)
        first = first.join('')
        seccond = seccond.join('')
        first = parseFloat(first)
        seccond = parseFloat(seccond)
        switch (operator) {
                case '-':
                      result= first - seccond  
                        break;
                case '+':
                        result= first + seccond  
                        break;
         
                case '*':
                        result= first * seccond  
                        break;
                case 'x':
                        result= first * seccond  
                        break;
                case 'X':
                        result= first * seccond  
                        break;        
                case '/':
                        result= first / seccond  
                        break;          
        }

        input.value = result
        console.log(result)
        
}

