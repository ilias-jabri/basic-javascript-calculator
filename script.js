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




inpo.value = ''
reset.onclick = function (){inpo.value = ''}




del.onclick = function (){ 
        let val = inpo.value
        val = val.split('')
        val.pop()
        val = val.join('')
        inpo.value = val
}
zero.onclick = function (){
        if(checkeq === 1){checkeq = 0; inpo.value = '0'}
        else{inpo.value = inpo.value + '0'}
        }
one.onclick = function (){
        if(checkeq === 1){checkeq = 0; inpo.value = '1'}
        else{inpo.value = inpo.value + '1'}
        }
two.onclick = function (){
        if(checkeq === 1){checkeq = 0; inpo.value = '2'}
        else{inpo.value = inpo.value + '2'}
        }
three.onclick = function (){
        if(checkeq === 1){checkeq = 0; inpo.value = '3'}
        else{inpo.value = inpo.value + '3'}
        }
foor.onclick = function (){
        if(checkeq === 1){checkeq = 0; inpo.value = '4'}
        else{inpo.value = inpo.value + '4'}
        }
five.onclick = function (){
        if(checkeq === 1){checkeq = 0; inpo.value = '5'}
        else{inpo.value = inpo.value + '5'}
        }
six.onclick = function (){
        if(checkeq === 1){checkeq = 0; inpo.value = '6'}
        else{inpo.value = inpo.value + '6'}
        }
seven.onclick = function (){
        if(checkeq === 1){checkeq = 0; inpo.value = '7'}
        else{inpo.value = inpo.value + '7'}
        }
eight.onclick = function (){
        if(checkeq === 1){checkeq = 0; inpo.value = '8'}
        else{inpo.value = inpo.value + '8'}
        }
nine.onclick = function (){
        if(checkeq === 1){checkeq = 0; inpo.value = '9'}
        else{inpo.value = inpo.value + '9'}
        }
plus.onclick = function (){
        if(checkeq === 1){checkeq = 0; inpo.value = '+'}
        else if(inpo.value == ''){return}
        else{inpo.value = inpo.value + '+'}
        }
minus.onclick = function (){
        if(checkeq === 1){checkeq = 0; inpo.value = '-'}
        else{inpo.value = inpo.value + '-'}
        }
devide.onclick = function (){
        if(checkeq === 1){checkeq = 0; inpo.value = '/'}
        else if(inpo.value == ''){return}
        else{inpo.value = inpo.value + '/'}
        }
multiplay.onclick = function (){
        if(checkeq === 1){checkeq = 0; inpo.value = 'x'}
        else if(inpo.value == ''){return}
        else{inpo.value = inpo.value + 'x'}
        }
dot.onclick =  function (){
        if(checkeq === 1){checkeq = 0; inpo.value = ''}
        else if(inpo.value == ''){return}
        else{inpo.value = inpo.value + '.'}
        }

const result = null;
let checkeq = 0;


equalBtn.onclick = function (){
        checkeq+=1
        let result = null
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
        switch (operator) {
                case '-':
                      result= parseInt(first) - parseInt(seccond)  
                        break;
                case '+':
                      result= parseInt(first) + parseInt(seccond)  
                        break;
         
                case '*':
                        result= parseInt(first) * parseInt(seccond)  
                        break;
                case 'x':
                        result= parseInt(first) * parseInt(seccond)  
                        break;
                case 'X':
                        result= parseInt(first) * parseInt(seccond)  
                        break;        
                case '/':
                        result= parseInt(first) / parseInt(seccond)  
                        break;          
        }
