'use strict';

//事件第二次循环后调用该函数
process.nextTick(function (){

    console.log('nextTick callback');

});
console.log('nextTick was set!');

//程序即将退出时的回调函数
process.on('exit', function(code){
    console.log('about to exit with code: '+code);
});
