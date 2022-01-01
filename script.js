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

let numbers = [zero,one,two,three,foor,five,six,seven,eight,nine]

inpo.value = ''
reset.onclick = function (){inpo.value = ''}




del.onclick = function (){ 
        let val = inpo.value
        val = val.split('')
        val.pop()
        val = val.join('')
        inpo.value = val
}
zero.onclick = function (){return inpo.value = inpo.value + zero.innerText}
one.onclick = function (){return inpo.value = inpo.value + one.innerText}
two.onclick = function (){return inpo.value = inpo.value + two.innerText}
three.onclick = function (){return inpo.value = inpo.value + three.innerText}
foor.onclick = function (){return inpo.value = inpo.value + foor.innerText}
five.onclick = function (){return inpo.value = inpo.value + five.innerText}
six.onclick = function (){return inpo.value = inpo.value + six.innerText}
seven.onclick = function (){return inpo.value = inpo.value + seven.innerText}
eight.onclick = function (){return inpo.value = inpo.value + eight.innerText}
nine.onclick = function (){return inpo.value = inpo.value + nine.innerText}
plus.onclick = function (){return inpo.value = inpo.value + plus.innerText}
minus.onclick = function (){return inpo.value = inpo.value + minus.innerText}
devide.onclick = function (){return inpo.value = inpo.value + devide.innerText}
multiplay.onclick = function (){return inpo.value = inpo.value + multiplay.innerText}
dot.onclick = function (){return inpo.value = inpo.value + dot.innerText}

const result = null

equalBtn.onclick = function (){
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
        inpo.value = result
        console.log(result)

}


