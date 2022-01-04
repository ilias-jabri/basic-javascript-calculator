let inpo = document.getElementById('inpo')
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


let result = null;
let checkeq = 0;
let stack = null



function numbersInput(val){
        if(checkeq === 1){checkeq = 0; inpo.value = val}
        else{inpo.value = inpo.value + val; stack = val}
}
function operations(val){
        let reg = /\D/
        console.log(reg.test(stack))
        if (reg.test(stack)) {return}
        if(checkeq > 1){checkeq = 0; inpo.value = val}
        else if(inpo.value == ''){return}
        else{inpo.value = inpo.value + val; stack = val}
}


reset.onclick = function (){inpo.value = ''}
del.onclick = function (){ 
        let val = inpo.value
        val = val.split('')
        val.pop()
        val = val.join('')
        inpo.value = val
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
                return inpo.value = ''
        }
        checkeq+=1
        result = null
        let kkk = inpo.value
        let regex = /[-\+\/\*x]/i
        let operator = kkk.match(regex)[0]
        let end = kkk.match(regex).index
        kkk = [...inpo.value]
        console.log(end, operator)
        let first = kkk.slice(0,end)
        let seccond = kkk.slice(end+1)
        console.log(typeof first)
        console.log(first,seccond)
        first = first.join('')
        seccond = seccond.join('')
        first = parseInt(first)
        seccond = parseInt(seccond)
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

        inpo.value = result
        console.log(result)
        
}

