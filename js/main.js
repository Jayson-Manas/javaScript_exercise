// var x=5
// console.log(x)
// console.log('javaScript')
// var name ='jayson'
// console.log(name)
// console.log('my name is '+name)
// variable type string
// console shows name
//add a var with a string (concatinate)
// var name= 'sally'
// var animal='dogs'
// var y=3
// var loc='America'
// console.log('my name is '+name+' and i own '+ y+' ' + animal+' and i live in '+loc)
// name= 'nuhaa'
// animal= 'cats'
// y=5
// loc='south africa'
// console.log('my name is '+name+' and i own '+ y+' ' + animal+' and i live in '+loc)
// variables are interchanged

// if (new Date().getHours() < 18) {
    // document.getElementById("demo").innerHTML = "hello world";
// }
function displayMessage(firstName) {
    alert("Hello " + firstName + ", hope you like JavaScript functions! #jayson is awesome");
}
//declare a variable
// var myName = 'sally';
document.getElementById('btn').onclick=function(){
    // grab inut value
  var myName= document.getElementById('name').value
if(myName){
    // create my sentence
    var sayHello = 'hi my name is ' + myName;
//targeting an element in html

    document.getElementById('hello').innerHTML= sayHello;
} else{
    alert('please enter your name.')
}



}
document.getElementById("bttn").onclick=function() {
    document.getElementById('x').innerHTML='hi'

}

document.getElementById("secondBttn").onclick=function(i){
    
    
for (var i = 0; i < 3; i++) { 
    

    
        if(i===1){
            
        document.getElementById('secondPara').innerHTML= "i think" + document.getElementById('secondPara').innerHTML + " awesome"

        return i

        }

else{
    alert('already clicked')

}
    
    
    
}
}
document.getElementById('emptyBttn').onclick=function(){
    document.getElementById('emptyPara').innerHTML= 'hello word'
}
