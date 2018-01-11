'use strick'
//Example 
/*
function foo(x){

    console.log('x = ' + x);
    for  (var i = 0; i<arguments.length;i++){
        console.log('arg' + i + ' = ' + arguments[i]);
    }
}
foo(10,20,30);
*/

//Practice 1 rest参数只能写在最后，前面用...标识，从运行结果可知，传入的参数先绑定a、b，多余的参数以数组形式交给变量rest，所以，不再需要arguments我们就获取了全部参数。
//如果传入的参数连正常定义的参数都没填满，也不要紧，rest参数会接收一个空数组（注意不是undefined）。
//因为rest参数是ES6新标准，所以你需要测试一下浏览器是否支持。请用rest参数编写一个sum()函数，接收任意个参数并返回它们的和：

/*
function sum(...rest){
    
    var p = 0;
    for(var i of rest){
         p = p+i;
    }
    console.log(p);
    return p;
}
*/

//Decoration, call() apply().
//create two functions , one old, one new, use new function call() old function. 

var count = 1;
var oldCalculation = function (){
        console.log(" Call from old function / ");
}

var newCalculation = function(){
        
        count = count + 1;
        console.log(count);

    return oldCalculation.apply(null,arguments);

}

newCalculation();

newCalculation();

newCalculation();

console.log("Count: " + count);
