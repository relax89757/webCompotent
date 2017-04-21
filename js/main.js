require.config({
    paths: {
        jquery: './jquery-3.1.1',
        jqueryUI: 'http://code.jquery.com/ui/1.12.1/jquery-ui.min'
    }
})

require(['jquery', 'window'], function($,w){
    $('.aa').on('click', function(){
        var myAlert = new w.Window();
        myAlert.alert({
            width: 300,
            height: 150,
            x: 650,
            y: 300,
            title: '提示',
            hasCloseBtn: true,
            content: 'hello world!',
            skinName: 'window_skin_red',
            text4AlertBtn: 'OK',
            dragHandle: '.window_header',
            handler4AlertBtn:  function(){
                alert('you click this btn');
            },
            handler4CloseBtn:  function(){
                alert('you Close this AlertBox');
            },
            
        }).on('alert',function(){
            alert('链式调用');
        });

        myAlert.on('alert',function(){
            alert('you click 22 btn');
        });
        myAlert.on('close',function(){
            alert('you Close 22 AlertBox');
        })
    });

    $('.bb').on('click', function(){
        var myConfirm = new w.Window();
        myConfirm.confirm({
            width: 400,
            height: 200,
            x: 650,
            y: 300,
            title: '系统消息',
            hasCloseBtn: true,
            content: '您确定要删除这条消息吗？',
            text4ConfirmBtn: '是',
            text4CancelBtn: '否',
            dragHandle: '.window_header',
            handler4ConfirmBtn:  function(){
                alert('确定');
            },
            handler4CancelBtn:  function(){
                alert('取消');
            },
            handler4CloseBtn:  function(){
                alert('关闭');
            },
            
        }).on('confirm',function(){
            alert('you click confirm btn');
        });
        myConfirm.on('cancel',function(){
            alert('you click cancel btn');
        });
        myConfirm.on('close',function(){
            alert('you click close btn');
        });
    });

    $('.cc').on('click', function(){
        var myPrompt = new w.Window();
        myPrompt.prompt({
            width: 300,
            height: 150,
            x: 650,
            y: 300,
            title: '请输入您的名字',
            hasCloseBtn: true,
            content: '我们将为您保密输入的信息',
            text4PromptBtn: '输入',
            text4CancelBtn: '取消',
            defaultValue4PromptInput: '小明',
            dragHandle: '.window_header',
            handler4PromptBtn:  function(val){
                alert('您输入的内容是：' + val);
            },
            handler4CancelBtn:  function(){
                alert('取消');
            },
            handler4CloseBtn:  function(){
                alert('关闭');
            },
            
        }).on('prompt',function(){
            alert('you click prompt btn');
        });
        myPrompt.on('cancel',function(){
            alert('you click cancel btn');
        });
        myPrompt.on('close',function(){
            alert('you click close btn');
        });
    });
   
    $('.dd').on('click', function(){
        var myCommon = new w.Window();
        myCommon.common({
            width: 500,
            height: 250,
            // x: 600,
            // y: 350,
            hasCloseBtn: true,
            content: '我是一个公用弹窗',
            handler4CloseBtn:  function(){
                alert('关闭');
            },
        });
        myCommon.on('close',function(){
            alert('you click close btn');
        });
    });
});