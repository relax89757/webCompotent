define(['jquery'], function($){
    function Widget(){
        this.boundingBox = null;
    }

    Widget.prototype = {
        //自定义方法
        on: function(type, handler){
            if(typeof this.handlers[type] === 'undefined'){
                this.handlers[type] = [];
            }
            this.handlers[type].push(handler);
            return this; //链式调用
        },
        fire: function(type, data){
            if(this.handlers[type] instanceof Array){
                var handlers = this.handlers[type];
                for (var i = 0; i < handlers.length; i++) {
                    handlers[i](data);
                }
            }
        },
        off: function(type, handler){
            if(this.handlers[type]!= 'undefined'){
                var handlers =this.handlers[type];
                for (var i = 0; i < handlers.length; i++) {
                    if(handlers[i] == handler){
                        break;
                    }
                }
                handlers.splice(i,1);
            }
            return this;
        },
        runderUI: function(){},         //接口：添加dom节点
        bindUI: function(){},           //接口：添加监听事件
        syncUI: function(){},           //接口：初始化组件
        destructor: function(){},       //接口：销毁前的处理函数 ,接口由子类去定义
        render: function(container){     //方法：渲染组件
            this.renderUI();
            this.handlers = {};
            this.bindUI();
            this.syncUI();
            $(container || document.body).append(this.boundingBox);
        },
        
        destory: function(){            //方法：销毁组件
            this.destructor();  
            this.boundingBox.off(); 
            this.boundingBox.remove();
        }
    }

    return {Widget: Widget};
})