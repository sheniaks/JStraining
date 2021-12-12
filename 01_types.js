// number boolean string undefined object symbol null 
console.log(typeof 0)                    //number
console.log(typeof true)                 //boolean
console.log(typeof 'Js') // "", '', ``   //string
console.log(typeof undefined)            //undefined
console.log(typeof Math)                 //object      
console.log(typeof Symbol('JS'))         //sybol
console.log(typeof null)                 //object(это баг https://habr.com/ru/post/200664/)  хотя фактически это null

console.log(typeof function(){})         //function - хотя function фактически это object
console.log(typeof NaN)                  //number 


// Приведение типов
let language = 'JS'
if (language) {
    console.log ('The best programming language is :', language)
}


// '', null, undefined, NaN, false, 0
console.log(Boolean(''))            //false    
console.log(Boolean(null))          //false   
console.log(Boolean(undefined))     //false
console.log(Boolean(NaN))           //false
console.log(Boolean(false))         //false
console.log(Boolean(0))             //false
console.log(Boolean('0'))           //true
console.log(Boolean([]))            //true
console.log(Boolean({}))            //true


//Строки и числа
console.log(1 + '2')     //string 12
console.log(''+1+0)      //string 10
console.log(''-1+0)      //number -1
console.log('3'*'8')     //string 14 px
console.log('px'+4+10)   //string px410
console.log('42'- 40)    //number 2
console.log('42px'-2)    //NaN
console.log(null +2)     //number 2
console.log(undefined+2) //NaN


//== vs ===
console.log(2=='2')              //true
console.log(2==='2')             //false
console.log(undefined==null)     //true
console.log(undefined===null)    //false
console.log('0' == false)        //true


//=====
console.log(false == '')    //true
console.log(false == [])    //true
console.log(false == {})    //false
console.log('' == 0)        //true
console.log('' == [])       //true
console.log('' == {})       //false
console.log(0 == [])        //true
console.log(0 == {})        //false
console.log(0 == null)      //false