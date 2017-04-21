require.config({

    baseUrl: "js/lib",

    paths: {
        "jqurey": "jquery.min",
        "underscore": "underscore.min",
        "backbone": "backbone.min"
    }
});

//math.js  AMD规范
define(function(){
    var add = function(x,y){
        return x+y;

    };
    return {
        add: add
    }
})

//加载方法如下
//
require(['math'], function(math){
    alert(math.add(1,1));
})

//如果这个模块还依赖其他模块，那么define()函数的第一个参数，必须是一个数组，指明该模块的依赖性。

define(['myLib'], function(myLib){
    function foo(){
        mylib.dosamething();
    }
    return {
        foo: foo
    };
})

//加载非规范的模块
require.config({
    shim: {
        'underscore': {
            exports: '_'    //输出的变量名
        },

        'backbone': {
            deps: ['underscore', 'jquery'],  //该模块的依赖性
            exports: 'Backbone'
        },
        'jquery.scroll': {
            deps: ['jquery'],
            exports: 'jQuery.fn.scroll'
        }
    }
});


//domready插件，可以让回调函数在页面DOM结构加载完成后再运行。
requier(['domready!'],function(doc){
    // called once the DOM is ready
    // 
})

//text和image插件，则是允许require.js加载文本和图片文件。
define([
    'text!review.txt',
    'image!cat.jpg'
    ],
    function(review,cat){
        console.log(review);
        document.body.appendChlid(cat);
    }
)