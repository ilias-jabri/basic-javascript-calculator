
let result = null;
let checkeq = 0;
let stack = null
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
function mulDevition(numString){
let reg = /\d+[*/x]\d+/;
let solution = null 
let operation = numString.match(reg)[0]
let first,last;
first = operation.match(/\d+/)[0]
last = operation.match(/(?<=[*/x])\d+/)[0]
if( /[/]/.test(operation) ){
        solution = parseFloat(first)/parseFloat(last)
}
if( /[*x]/.test(operation) ){
        solution = parseFloat(first)*parseFloat(last)
}
numString = numString.replace(/\d+[*/x]\d+/,solution)
return numString
}
function sumSubtract(numString){
        let reg = /\d+[+-]\d+/;
        let solution = null 
        let operation = numString.match(reg)[0]
        let first,last;
        first = operation.match(/\d+/)[0]
        last = operation.match(/(?<=[+-])\d+/)[0]
        if( /[+]/.test(operation) ){
                solution = parseFloat(first)+parseFloat(last)
        }
        if( /[-]/.test(operation) ){
                solution = parseFloat(first)-parseFloat(last)
        }
        numString = numString.replace(/\d+[-+]\d+/,solution)
        return numString
        }
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
zero.onclick = ()=>{if(input.value == ''){return} numbersInput('0')}
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
        checkeq++
        let value = input.value
        while(/[*x/]/.test(value)){
                value = mulDevition(value)
                console.log(1)
        }
        while(/[+-]/.test(value)){
                value = sumSubtract(value)
                console.log(1)
        }
        input.value = value
}



/* 

/*function diagonalDifference(arr){


    const dim = arr[0].length;
    let first_d_s = 0;
    let seccond_d_s = 0;
    let sum = 0;
    for(let i = 0 , j = (dim - 1) ; i < dim , j > -1 ; i++ , j--){

        first_d_s += arr[i][i];
        seccond_d_s += arr[i][j];

    }
    sum = first_d_s - seccond_d_s;
    return Math.abs(sum);

}

array = [
    [-1 ,1 ,-7 ,-8],
    [-10, -8 ,-5 ,-2],
    [0 ,9 ,7 ,-1],
    [4, 4, -2, 1]
]

console.log(diagonalDifference(array));
*/
//-------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------

/*function plusMinus(arr) {
    // Write your code here

    let newarr = [];
    for(let i = 0 ; i< arr.length ; i++){
        newarr.push(arr[i] = arr[i].toFixed(6))
    }
  let neg = [] , pos = [] , zero = [];
  for (let i = 0 ; i<newarr.length ; i++){
    (newarr[i] < 0 ) ? neg.push(newarr[i]) : (newarr[i] > 0) ? pos.push(newarr[i]) : zero.push(newarr[i]) ;
  }
let x = []
        let positive = (pos.length/arr.length).toFixed(6);
        let negative =(neg.length/arr.length).toFixed(6);
        let zeroo = (zero.length/arr.length).toFixed(6);
        x = [positive , negative , zeroo];
        
        
        console.log(x[0]+'\n',x[1]+'\n' ,x[2])
}
*/
//-------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------
/*
const array = [-1,1,-7,-8,-10,8,-5,2,0,9,7,-1,4,3,4,4,-2,1]
const arra = [-1,1,-7,-8,-10,8,-5,2,0,9,7,-1,4,3,4,4,-2,1]

function sort1(arr){
    var min = arr[0];
    var index = 0;
        for(var i = 0 ; i < arr.length ; i++){
            if(arr[i]<min){
                min = arr[i];
                index = i;
            }
        }
    return index;
}



function selectionSort(arr){
    let sorted = [];
    let len = arr.length;
    for (let i = 0 ; i < len ; i++){
        let sort = sort1(arr);
        sorted.push(arr[sort]);
        arr.splice(sort, 1);
    }
    return sorted;
}
console.log(selectionSort(array));

console.log(arra.sort((a,b) => a-b));

*/
/*const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,55,17,18,19,20];

function rec(arr){
    if( arr.length <= 0){
        return 0;
    }
    else{
        arr.splice(arr.length-1 ,1);
        return rec(arr) + 1
    }
}
console.log(rec(array))
*/
/*
function largestOfFour(arr) {

    let top = -1*Math.pow(10,100);
    let index = [];
    for(let i = 0 ; i < arr.length ; i++){
      for(let j = 0; j< arr[i].length ; j++){
        if(arr[i][j]>top){
          top = arr[i][j];
        }
        
      }
      index.push(top);
     top = -1*Math.pow(10,100);;
    }
  
    return index;
  }
  
  let k = largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
  console.log(k)
  */
/*   function repeatStringNumTimes(str, num) {
      let tt = performance.now()
    let newStr = [];
    for(let i = num; i>0 ; i--){
      newStr.push(str);
    }
    let fina = newStr.join('');
    console.log(tt - performance.now())
    return fina;
  }
  
  console.log(repeatStringNumTimes("*| ",8888 )) */

/*   function truncateString(str, num) {
    let len = str.length;
    if(len > num){
      return str.slice(0,num).concat('...')
    }
    return str;
  }
  truncateString("A-tisket a-tasket A green and yellow basket", 8);
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", 22)); */


/* 
  function findElement(arr, func) {
    for(let i = 0 ; i < arr.length ; i++){
      if(func(arr[i]) === true){
        return arr[i];
      }
    }
    return undefined;
  }
  
  findElement([1, 2, 3, 4], num => num % 2 === 0);
  console.log(findElement([1, 2, 3, 4], num => num % 2 === 0)) */
/* 
  function booWho(bool) {
    if(bool === true || bool === false){
      return true
    }
    return false
  }
  
  booWho(null); */

/*   function titleCase(str) {
    str = str.toLowerCase()
    str = [...str];
    let tex = [];
   for(let i = 0; i < str.length ; i++){
     if(i == 0){
       tex.push(str[0]);
       str[0] = tex.join('').toUpperCase();
       tex = [];
     }
      if(str[i] == ' '){
        tex.push(str[i+1]);
        str[i+1] = tex.join('').toUpperCase();
        tex = [];
     }
   }
   str = str.join('')
   return str
  } 
  
  titleCase("I'm a little tea pot");
  console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")) */

/* 
  function findLongestWordLength(str) {
    let regex = /\b[a-z]+/gi
    let words = str.match(regex)
    let newTxt = '';
    let top = 0;
    for(let i = 0 ; i<words.length; i++){
      newTxt = words[i];
      if(top < newTxt.length){
        top = newTxt.length;
      }
    }
    return top
    }
    findLongestWordLength("The quick brown fox jumped over the lazy dog");
    console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog")) */
    
   /*  const t0 = performance.now();
    function getIndexToIns(arr, num) {
      let sorted = arr;
      sorted.push(num)
      sorted.sort((a,b) => a-b);
      for(let i = 0 ; i<sorted.length ; i++){
        if(sorted[i]===num){
          return i
        }
      }
    }
    getIndexToIns([40, 60], 50);
    console.log(getIndexToIns([40,50,30,70],5)) 
    const t1 = performance.now();
    console.log(t1-t0)

 */
/* 
    const t0 = performance.now();
    const lowIndex = (arr) => {
      let index = 0;
      let low = arr[0]
      for(let i = 0 ; i < arr.length ; i++){
        if(arr[i]<low){
          low = arr[i];
          index = i ;
        }
      }
      return index;
    }
    
    function getIndexToIns(arr, num) {
      let array = arr;
      let sorted = [];
      let index = 0;
      array.push(num)
      let len = array.length
      for(let i = 0 ; i<len ; i++){
        index = lowIndex(array);
        sorted.push(array[index])
        array.splice(index,1);
      }
      for(let i = 0; sorted.length; i++){
        if( num === sorted[i]){
          return i
        }
      }
    }
  
    console.log(getIndexToIns([40,50,30,70],5))
    const t1 = performance.now();
    console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);
    */
   /*  const t0 = performance.now();
    function che(arra,arg){
      for(let i = 0 ; i<arra.length; i++){
        if(arra[i] === arg){
          return true
        }
      }
      return false
    }
    function mutation(arr) {
      let str1 = arr[0] , str2 = arr[1];
      str1 = str1.toLowerCase(); str2 = str2.toLowerCase();
      let arr1 = [...str1];
      let arr2 = [...str2];
      let checker = 0;
      for(let i = 0 ; i <arr2.length ; i++){
        if(che(arr1,arr2[i])){
          checker+=1
        }
      }
      if(checker === arr2.length && arr2.length !== 0){
        return true
      }
      return false
    }
    const t1 = performance.now();
    console.log(mutation(["abcdefghijklmnopqrstuvwxyz ", "hi my name is Ilias and this a test"]), 'time is : ' + (t1 - t0)); */
/* 
    function chunkArrayInGroups(arr, size) {
      let newArr = [];
      let arrSize = arr.length;
      let prop = Math.floor(arrSize / size);
      while(arr.length >= size){
        newArr.push(arr.splice(0,size))
      }
      
      if(arr.length !== 0){
        newArr.push(arr)
      }
      console.log(newArr)
      return newArr;
    }
    
    chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 3); */
/* 
    function bouncer(arr) {
      let newArr = [];
    for(let i = 0 ; i<arr.length;i++){
    if(arr[i]){
      newArr.push(arr[i])
    }}
    arr = newArr
    return newArr
    }
    
    let k = bouncer([7,NaN,undefined,null,"ate", "", false, 9]);
    console.log(k) */
/* 
    function frankenSplice(arr1, arr2, n) {
      let newArr = [...arr2];
      let newArr2 = newArr.splice(n,newArr.length-1)
      let final = [...newArr];
       for(let i = 0 ; i<arr1.length; i++){
      final.push(arr1[i]);
      }
      final = [...final,...newArr2]
        return final;
      }
      
      console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1)); */
/* 
      function birthday(s, d, m) {
        // Write your code here
        let count = 0;
        let sum = 0;
        let i = m-1;
        while(i<s.length){
            for (let j = 0; j < m ;j++) {
                sum+=s[i-j]
                console.log(s[i-j])
            }
            if (sum === d) {
                count++
            }
            sum = 0
            i++
        }
        console.log('rrrrrrr',count)
    }
    birthday([4],4,1) */

/* 

    let t0 = performance.now()

class Node {
  constructor(val){
    this.val = val
    this.next = null
  }
}
class linkedList{
  constructor(head){
    this.head = head
  }
  newItem(item){
    let newNode = new Node(item)
    let current = this.head;
    if (current === undefined) {this.head = newNode; return}
    while (this.head !== undefined) {
      if (current.next === null) {current.next = newNode ; return}
      current = current.next
    }   
  }
  display(){
    let current = this.head
    let c = 0
    while (current !== null) {
      console.log(c +' : ' ,current.val)
      current = current.next
      c++
    }
  }
  len(){
    let current = this.head
    let count = 0;
    while (current !== null && current !== undefined) {
      count++
      current = current.next
    }
    return console.log('lenght :',count)
  }
  atIndex(num){
    let current = this.head
    let count = 0
    while (current !== null && current !== undefined) {
      if (count === num) {
        return console.log('value is:',current.val)
      }
      count++
      current = current.next
    }
  }
  reverse(){
    let current = this.head
    let previus = null
    while (current !== null) {
      if (current.next === null) {
        this.head = current
      }
      let next = current.next
      current.next = previus
      previus = current
      current = next
    }
  }
  add(...arg){
    let arr = [...arg]
    for (let i = 0; i < arr.length; i++) {
      this.newItem(arr[i])
    }
  }
  find(item){
    let current = this.head
    let count = 0;
    while (current != null && current.val !== item) {
      count++
      current = current.next
    }
    if (current.val === item) {
      return console.log(item+' at index :' ,count)
    }
  }
  max(){
    let current = this.head 
    let count = 0
    let index = 0
    let max = current.val
    while (current !== null) {
      if (current.val > max) {
        max = current.val
        index = count
      }
      current = current.next
      count++
    }
    let result = this.atIndex(index)
    return result + console.log("is max")
  }
  zip(...arg){
    let args = [...arg]
    let current = this.head
    let count = 0
    let prev = null

    while (current !== null && count < args.length) {
      let next = current.next
      current.next = new Node(args[count])
      current.next.next = next
      count++
      current = next
    }
    if (current === null && args.length-1 > count) {
      for (let i = count; i < args.length; i++) {
        this.newItem(args[i])
        
      }
    }
  }
}
let list =new linkedList()
list.add(10,20,30,40,950,60,70,80,00,2,55,9,6,22,7,889,65,1,56,34,52,15,66)
list.display()
list.atIndex(3)
list.find(70)
list.max()
list.removeIdx(5)
let t1 = performance.now()
console.log(t1-t0)
*/
/* 
class Node{
  constructor(val){
    this.val = val
    this.left = null
    this.right = null
  }
}
class Tree {
  constructor(root){
    this.root = root
    this.length = 0
  }
  add(value){
    this.length++
    let node = new Node(value)
    if (this.root === null) {
      return this.root = node
    }
    let queue = [ this.root ]
    let current;
    while (queue.length > 0) {
      current = queue.shift()
      if (!current.left) {return current.left = node}
      if (!current.right) {return current.right = node}
      if(current.left){queue.push(current.left)}
      if(current.right){queue.push(current.right)}
    }
  }
    adds(...arg){let args=[...arg] ;for(let i=0;i<args.length;i++){this.add(args[i])}}
    isThereD(root,target){
    if (root === null) {return console.log(false)}
    if (root.val === target) {return console.log(true)}
    return this.isThereD(root.left,target) || this.isThereD(root.left,target)
  }
  traversal(){
    let stack = []
    let arr =[]
    let current = this.root
    stack.push(current)
    while (stack.length > 0) {
      let current = stack.pop()
      arr.push(current.val)
      if (current.right) { stack.push(current.right)}
      if (current.left) { stack.push(current.left)}
    }
    return console.log("Dtraverse.. :",arr)
  }
  isThereB(target){
    let queue = [ this.root ]
    let current;
    while (queue.length > 0) {
      current = queue.shift()
      if (current.val === target) {
        return console.log(true)
      }
      if (current.left) { queue.push(current.left)}
      if (current.right) { queue.push(current.right)}
    }
    return console.log(false)
  }
  breathFirstTraversal(){
    let current = this.root
    let queue = []
    queue.push(current)
    let arr = new Array()
    while (queue.length > 0) {
      current = queue.shift()
      arr.push(current.val)
      if (current.left) { queue.push(current.left)}
      if (current.right) { queue.push(current.right)}
    }
    return console.log(arr)
  }
  reverse(head){
    if (!head.left) {return}
    if (!head.right) {return}
    let nodeLeft = head.left
    let nodeRight = head.right

    head.left = nodeRight
    head.right = nodeLeft

    this.reverse(head.left)
    this.reverse(head.right)
  }
  sum(){
    let sum = 0
    let queue = [ this.root ]
    let current;
    while (queue.length > 0) {
      current = queue.shift()
      sum += current.val
      if (current.left) { queue.push(current.left)}
      if (current.right) { queue.push(current.right)}
    }
    return console.log("the sum is :",sum)
  }
  recSum(root){
    if (root === null) {return 0}
    return root.val + this.recSum(root.left) + this.recSum(root.right)
  }
  min(){
    if (this.root === null) {
      return false
    }
    let stack = [this.root]
    let min = this.root.val
    let current;
    while (stack.length > 0 ) {
      current = stack.pop()
      if (current.val < min) {min = current.val}
      if (current.left){stack.push(current.left)}
      if (current.right){stack.push(current.right)} 
    }
    return console.log("the min is :",min)
  }
  maxPathSum(){
    let stack = [this.root]
    let sums = []
    let sum = 0
    let current;
      while (stack.length > 0) {
      current = stack.pop()
      if (current.left){stack.push(current.left)}
      if(current.right){stack.push(current.right)}
    }
  }
}
let a = new Node(990)
let binary = new Tree()
binary.adds(20,30,40,10,60)
binary.traversal()
binary.sum()
binary.min()
console.log(binary.length)
 */
//              a
//             /  \
//            b    c
//           / \    \
//          d   e    f


//              a
//             /  \
//            c    b
//           /    / \
//          f    e   d

//              a
//             /  \
//            b    c
//           / \    \
//          d   e    f
/* 
var t0 = performance.now()

class linkNode{
  constructor(val){
    this.val = val
    this.next = null
  }
}


class Stack {
  constructor(){
    this.head = null
    this.length = 0
  }
  add(item){
    this.length++
    if(!this.head){
      this.head = new linkNode(item)
      return
    }
    let temp = this.head
    this.head = new linkNode(item)
    this.head.next = temp
  }
  adds(...arg){
    let args = [...arg]
    for (let i = 0; i < args.length; i++) {this.add(args[i])}
  }
  returnVal(){
    this.length--
    if(!this.head){return null}
    let value = this.head.val
    this.head = this.head.next
    return value
  }
}
class LinkedList{
  constructor() {
    this.head = null
    this.length = 0
  }
  add(item){
    this.length++
    let newNode = new linkNode(item)
    if(!this.head){this.head = newNode ; return ;}
    let current = this.head

    while (current.next !== null) {
      current = current.next
    }
    current.next = newNode
  }
  adds(...arg){
    let args = [...arg]
    for (let i = 0; i < args.length; i++) {
      this.add(args[i])
      
    }
  }
  display(){
    if(!this.head){return console.log(null)}
    let current = this.head 
    while (current) {
      console.log(current.val)
      current = current.next
    }
  }
  returnVal(){
    this.length--
    if(!this.head){ this.length = 0; return null}
    let value = this.head
    this.head = this.head.next
    return value.val
  }
}
class Node{
  constructor(val){
    this.val = val
    this.left = null
    this.right = null
  }
}
class Tree {
  constructor(root){
    this.root = root
    this.length = 0
  }
  add(value){
    this.length++
    let node = new Node(value)
    if (!this.root) {
      return this.root = node
    }
    let queue = new LinkedList()
    queue.add(this.root)
    let current;
    while (queue.length > 0) {
      current = queue.returnVal()
      if (!current.left) { current.left = node ; return}
      if (!current.right) { current.right = node ; return}
      if(current.left){queue.add(current.left)}
      if(current.right){queue.add(current.right)}
    }
  }
    adds(...arg){let args=[...arg] ;for(let i=0;i<args.length;i++){this.add(args[i])}}
    isThereD(root,target){
    if (root === null) {return console.log(false)}
    if (root.val === target) {return console.log(true)}
    return this.isThereD(root.left,target) || this.isThereD(root.left,target)
  }
  depthFirstTraversal(){
    let stack = new Stack()
    let arr =[]
    let current = this.root
    stack.add(current)
    while (stack.length > 0) {
      let current = stack.returnVal()
      arr.push(current.val)
      if (current.right) { stack.add(current.right)}
      if (current.left) { stack.add(current.left)}
    }
    return console.log("Dtraverse.. :",arr)
  }
  isThereB(target){
    let queue = new LinkedList()
    queue.add(this.root)
    let current;
    while (queue.length > 0) {
      current = queue.returnVal()
      if (current.val === target) {
        return console.log(true)
      }
      if (current.left) { queue.add(current.left)}
      if (current.right) { queue.add(current.right)}
    }
    return console.log(false)
  }
  breathFirstTraversal(){
    let current = this.root
    let queue = new LinkedList()
    queue.add(current)
    let arr = new Array()
    while (queue.length > 0) {
      current = queue.returnVal()
      arr.push(current.val)
      if (current.left) { queue.add(current.left)}
      if (current.right) { queue.add(current.right)}
    }
    return console.log("Btraverse.. :",arr)
  }
  reverse(head){
    if (!head.left) {return}
    if (!head.right) {return}
    let nodeLeft = head.left
    let nodeRight = head.right

    head.left = nodeRight
    head.right = nodeLeft

    this.reverse(head.left)
    this.reverse(head.right)
  }
  sum(){
    let sum = 0
    let queue = new LinkedList()
    queue.add(this.root)
    let current;
    while (queue.length > 0) {
      current = queue.returnVal()
      sum += current.val
      if (current.left) { queue.add(current.left)}
      if (current.right) { queue.add(current.right)}
    }
    return console.log("the sum is :",sum)
  }
  recSum(root){
    if (root === null) {return 0}
    return root.val + this.recSum(root.left) + this.recSum(root.right)
  }
  min(){
    if (this.root === null) {
      return false
    }
    let stack = new Stack
    stack.add(this.root)
    let min = this.root.val
    let current;
    while (stack.length > 0 ) {
      current = stack.returnVal()
      if (current.val < min) {min = current.val}
      if (current.left){stack.add(current.left)}
      if (current.right){stack.add(current.right)} 
    }
    return console.log("the min is :",min)
  }
  maxPathSum(){}
}
let binary = new Tree()
binary.adds("a","b","c","d","e","f")
binary.breathFirstTraversal()
binary.depthFirstTraversal()
let linkedList = new LinkedList()
linkedList.adds(1,2,3,4,5,6,7,8,9,10)
linkedList.display()
console.log("length is : ", linkedList.length)
console.log("-----------------------------------------")
console.log("-----------------------------------------")
linkedList.display()

var t1 = performance.now()
console.log(t1-t0) */




/* 


function fib(num){
  if(num === 1 || num === 2) return 1
  if(num === 0) return 0
  
  let first = 0
  let seccond = 1
  let result = 0
  let fibTree = new Tree(1)

  let node = new Node()
  let i = 0
  while (i < num) {
    result = first + seccond
    first = seccond
    seccond = result
    
    i++
  }
  return result

}

console.log(fib(0),fib(1),fib(2),fib(3),fib(4),fib(5),fib(6),fib(7),fib(8),fib(9))
 */

/* 
let airports = 'AES AAR YXX ABZ ABR ABJ ABI AUH ABV ACA ACC ADA ADD ADL AGA'
airports = airports.split(' ')

let routes = [
    ['AES','AAR'],
    ['ACC','ABJ'],
    ['ABZ','AES'],
    ['ADD','ABV'],
    ['AGA','AAR'],
    ['AES','ADL'],
    ['AUH','ABI'],
    ['YXX','AES'],
    ['ABV','ACC'],
    ['AUH','ACA'],
    ['ABR','ACA'],
    ['AGA','ADA']
]

let adjacencyList = new Map()


function addNode(node){
    adjacencyList.set(node,[])
}

function addEdge(origin, destination){
    adjacencyList.get(origin).push(destination)
    adjacencyList.get(destination).push(origin)
}

airports.forEach((item)=>addNode(item))
routes.forEach(root => addEdge(...root))

console.log(airports)
console.log("--------------------------\n\n\n")

console.log(adjacencyList.entries())



function bfs(graph, start , end){

    let queue = [ start ]
    let seen = new Set()
    while (queue.length > 0) {
        const airport = queue.shift()
        console.log(airport)
        const destinations = graph.get(airport)
        for(let destination of destinations){
            if(end === destination){return console.log(true)}
            if(!seen.has(destination)){
                queue.push(destination)
                seen.add(destination)
            }
        }
        }
    return console.log(false)
}


bfs(adjacencyList, 'YXX', 'ADL')
 *//* 
function largestProductinaSeries(n) {

  let thousandDigits = [
    7,3,1,6,7,1,7,6,5,3,1,3,3,0,6,2,4,9,1,9,2,2,5,1,1,9,6,7,4,4,2,6,5,7,4,7,4,2,3,5,5,3,4,9,1,9,4,9,3,4,9,6,9,8,3,5,2,0,3,1,2,7,7,4,5,0,6,
    3,2,6,2,3,9,5,7,8,3,1,8,0,1,6,9,8,4,8,0,1,8,6,9,4,7,8,8,5,1,8,4,3,8,5,8,6,1,5,6,0,7,8,9,1,1,2,9,4,9,4,9,5,4,5,9,5,0,1,7,3,7,9,5,8,3,3,
    1,9,5,2,8,5,3,2,0,8,8,0,5,5,1,1,1,2,5,4,0,6,9,8,7,4,7,1,5,8,5,2,3,8,6,3,0,5,0,7,1,5,6,9,3,2,9,0,9,6,3,2,9,5,2,2,7,4,4,3,0,4,3,5,5,7,6,
    6,8,9,6,6,4,8,9,5,0,4,4,5,2,4,4,5,2,3,1,6,1,7,3,1,8,5,6,4,0,3,0,9,8,7,1,1,1,2,1,7,2,2,3,8,3,1,1,3,6,2,2,2,9,8,9,3,4,2,3,3,8,0,3,0,8,1,
    3,5,3,3,6,2,7,6,6,1,4,2,8,2,8,0,6,4,4,4,4,8,6,6,4,5,2,3,8,7,4,9,3,0,3,5,8,9,0,7,2,9,6,2,9,0,4,9,1,5,6,0,4,4,0,7,7,2,3,9,0,7,1,3,8,1,0,
    5,1,5,8,5,9,3,0,7,9,6,0,8,6,6,7,0,1,7,2,4,2,7,1,2,1,8,8,3,9,9,8,7,9,7,9,0,8,7,9,2,2,7,4,9,2,1,9,0,1,6,9,9,7,2,0,8,8,8,0,9,3,7,7,6,6,5,
    7,2,7,3,3,3,0,0,1,0,5,3,3,6,7,8,8,1,2,2,0,2,3,5,4,2,1,8,0,9,7,5,1,2,5,4,5,4,0,5,9,4,7,5,2,2,4,3,5,2,5,8,4,9,0,7,7,1,1,6,7,0,5,5,6,0,1,
    3,6,0,4,8,3,9,5,8,6,4,4,6,7,0,6,3,2,4,4,1,5,7,2,2,1,5,5,3,9,7,5,3,6,9,7,8,1,7,9,7,7,8,4,6,1,7,4,0,6,4,9,5,5,1,4,9,2,9,0,8,6,2,5,6,9,3,
    2,1,9,7,8,4,6,8,6,2,2,4,8,2,8,3,9,7,2,2,4,1,3,7,5,6,5,7,0,5,6,0,5,7,4,9,0,2,6,1,4,0,7,9,7,2,9,6,8,6,5,2,4,1,4,5,3,5,1,0,0,4,7,4,8,2,1,
    6,6,3,7,0,4,8,4,4,0,3,1,9,9,8,9,0,0,0,8,8,9,5,2,4,3,4,5,0,6,5,8,5,4,1,2,2,7,5,8,8,6,6,6,8,8,1,1,6,4,2,7,1,7,1,4,7,9,9,2,4,4,4,2,9,2,8,
    2,3,0,8,6,3,4,6,5,6,7,4,8,1,3,9,1,9,1,2,3,1,6,2,8,2,4,5,8,6,1,7,8,6,6,4,5,8,3,5,9,1,2,4,5,6,6,5,2,9,4,7,6,5,4,5,6,8,2,8,4,8,9,1,2,8,8,
    3,1,4,2,6,0,7,6,9,0,0,4,2,2,4,2,1,9,0,2,2,6,7,1,0,5,5,6,2,6,3,2,1,1,1,1,1,0,9,3,7,0,5,4,4,2,1,7,5,0,6,9,4,1,6,5,8,9,6,0,4,0,8,0,7,1,9,
    8,4,0,3,8,5,0,9,6,2,4,5,5,4,4,4,3,6,2,9,8,1,2,3,0,9,8,7,8,7,9,9,2,7,2,4,4,2,8,4,9,0,9,1,8,8,8,4,5,8,0,1,5,6,1,6,6,0,9,7,9,1,9,1,3,3,8,
    7,5,4,9,9,2,0,0,5,2,4,0,6,3,6,8,9,9,1,2,5,6,0,7,1,7,6,0,6,0,5,8,8,6,1,1,6,4,6,7,1,0,9,4,0,5,0,7,7,5,4,1,0,0,2,2,5,6,9,8,3,1,5,5,2,0,0,
    0,5,5,9,3,5,7,2,9,7,2,5,7,1,6,3,6,2,6,9,5,6,1,8,8,2,6,7,0,4,2,8,2,5,2,4,8,3,6,0,0,8,2,3,2,5,7,5,3,0,4,2,0,7,5,2,9,6,3,4,5,07,3,1,6,7,1
    ,7,6,5,3,1,3,3,0,6,2,4,9,1,9,2,2,5,1,1,9,6,7,4,4,2,6,5,7,4,7,4,2,3,5,5,3,4,9,1,9,4,9,3,4,9,6,9,8,3,5,2,0,3,1,2,7,7,4,5,0,6,3,2,6,2,3,9
    ,5,7,8,3,1,8,0,1,6,9,8,4,8,0,1,8,6,9,4,7,8,8,5,1,8,4,3,8,5,8,6,1,5,6,0,7,8,9,1,1,2,9,4,9,4,9,5,4,5,9,5,0,1,7,3,7,9,5,8,3,3,1,9,5,2,8,5
    ,3,2,0,8,8,0,5,5,1,1,1,2,5,4,0,6,9,8,7,4,7,1,5,8,5,2,3,8,6,3,0,5,0,7,1,5,6,9,3,2,9,0,9,6,3,2,9,5,2,2,7,4,4,3,0,4,3,5,5,7,6,6,8,9,6,6,4
    ,8,9,5,0,4,4,5,2,4,4,5,2,3,1,6,1,7,3,1,8,5,6,4,0,3,0,9,8,7,1,1,1,2,1,7,2,2,3,8,3,1,1,3,6,2,2,2,9,8,9,3,4,2,3,3,8,0,3,0,8,1,3,5,3,3,6,2
    ,7,6,6,1,4,2,8,2,8,0,6,4,4,4,4,8,6,6,4,5,2,3,8,7,4,9,3,0,3,5,8,9,0,7,2,9,6,2,9,0,4,9,1,5,6,0,4,4,0,7,7,2,3,9,0,7,1,3,8,1,0,5,1,5,8,5,9
    ,3,0,7,9,6,0,8,6,6,7,0,1,7,2,4,2,7,1,2,1,8,8,3,9,9,8,7,9,7,9,0,8,7,9,2,2,7,4,9,2,1,9,0,1,6,9,9,7,2,0,8,8,8,0,9,3,7,7,6,6,5,7,2,7,3,3,3
    ,0,0,1,0,5,3,3,6,7,8,8,1,2,2,0,2,3,5,4,2,1,8,0,9,7,5,1,2,5,4,5,4,0,5,9,4,7,5,2,2,4,3,5,2,5,8,4,9,0,7,7,1,1,6,7,0,5,5,6,0,1,3,6,0,4,8,3
    ,9,5,8,6,4,4,6,7,0,6,3,2,4,4,1,5,7,2,2,1,5,5,3,9,7,5,3,6,9,7,8,1,7,9,7,7,8,4,6,1,7,4,0,6,4,9,5,5,1,4,9,2,9,0,8,6,2,5,6,9,3,2,1,9,7,8,4
    ,6,8,6,2,2,4,8,2,8,3,9,7,2,2,4,1,3,7,5,6,5,7,0,5,6,0,5,7,4,9,0,2,6,1,4,0,7,9,7,2,9,6,8,6,5,2,4,1,4,5,3,5,1,0,0,4,7,4,8,2,1,6,6,3,7,0,4
    ,8,4,4,0,3,1,9,9,8,9,0,0,0,8,8,9,5,2,4,3,4,5,0,6,5,8,5,4,1,2,2,7,5,8,8,6,6,6,8,8,1,1,6,4,2,7,1,7,1,4,7,9,9,2,4,4,4,2,9,2,8,2,3,0,8,6,3
    ,4,6,5,6,7,4,8,1,3,9,1,9,1,2,3,1,6,2,8,2,4,5,8,6,1,7,8,6,6,4,5,8,3,5,9,1,2,4,5,6,6,5,2,9,4,7,6,5,4,5,6,8,2,8,4,8,9,1,2,8,8,3,1,4,2,6,0
    ,7,6,9,0,0,4,2,2,4,2,1,9,0,2,2,6,7,1,0,5,5,6,2,6,3,2,1,1,1,1,1,0,9,3,7,0,5,4,4,2,1,7,5,0,6,9,4,1,6,5,8,9,6,0,4,0,8,0,7,1,9,8,4,0,3,8,5
    ,0,9,6,2,4,5,5,4,4,4,3,6,2,9,8,1,2,3,0,9,8,7,8,7,9,9,2,7,2,4,4,2,8,4,9,0,9,1,8,8,8,4,5,8,0,1,5,6,1,6,6,0,9,7,9,1,9,1,3,3,8,7,5,4,9,9,2
    ,0,0,5,2,4,0,6,3,6,8,9,9,1,2,5,6,0,7,1,7,6,0,6,0,5,8,8,6,1,1,6,4,6,7,1,0,9,4,0,5,0,7,7,5,4,1,0,0,2,2,5,6,9,8,3,1,5,5,2,0,0,0,5,5,9,3,5
    ,7,2,9,7,2,5,7,1,6,3,6,2,6,9,5,6,1,8,8,2,6,7,0,4,2,8,2,5,2,4,8,3,6,0,0,8,2,3,2,5,7,5,3,0,4,2,0,7,5,2,9,6,3,4,5,0];



let add = (arr , index , num) =>{ 
let mul = 1
if(index+num > arr.length) return 0
for(let i = index ; i < index + num ; i++){
  mul *= arr[i]
}
return mul;
}
let max = null
let current = null
for(let i = 0 ; i<thousandDigits.length ; i++){
  current = add(thousandDigits , i , n)
  if(current>max){ max = current }
}
  return max;
}
let t0 = performance.now().toFixed(0)
console.log(largestProductinaSeries(180));
let t1 = performance.now().toFixed(0)
console.log(t1-t0) */


/* 
class Sat{
        constructor(){
        this.core = []
        }
        has(target){
          if(this.core.includes(target)){ return console.log(true)}
          return console.log(false)
        }
        addMultiple(...item){
          let items = [...item]
          items.forEach((element)=>{this.add(element)})
      
        }
        add(item){
          if(this.core.includes(item)){return}
          this.core.push(item)
        }
        display(){
          console.log(this.core)
        }
        remove(target){
          this.core.forEach((item,index)=>{
            if(target === item){
              this.core.splice(index,1)
            }
          })
        }
      
      }
      
      
      
      let set = new Sat()
      
      set.addMultiple(1,2,3,4,5,6,7,8,9)
      set.display()
      set.has(7)
      
      
      
      
      
      
       */
      
