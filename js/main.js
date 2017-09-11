require.config({
    baseUrl: "./js",
    paths: {
        zepto: "lib/zepto",
        event: "lib/event",
        // cookie: "lib/jquery.cookie",
        text: "lib/text",
        artTemplate: "lib/template-web",
        mui: "../statics/mui/js/mui.min",
        //配置模板文件夹的路径
        tpls: "../tpls",
    },
    map: {
        '*': {
            'css': './lib/css.min'
        }
    },
    shim: {
        'mui': {
            deps: ['css!../statics/mui/css/mui.min.css', 'css!../statics/mui/css/icons-extra.css']
        },
        'zepto': {
            exports: '$'
        },
        'event': {
            deps: ["zepto"],
            exports: '$'
        }
    }
});

require(['zepto', 'mui', 'home/home', 'sort/sort', 'salse/salse', 'shopcar/shopcar', 'person/person', 'event'], function($, mui, home, sort, salse, shopcar, person) {
    mui('body').on('tap', 'a', function() {
        if (window.top.location.hostname == "localhost") {
            window.top.location.href = this.href;
        } else if (window.top.location.hostname = "bluefantast.github.io") {
            window.top.location.href = this.href;
        }
    });
    mui('body').on('click', 'a', function() {
        if (window.top.location.hostname == "localhost") {
            window.top.location.href = this.href;

        } else if (window.top.location.hostname = "bluefantast.github.io") {
            window.top.location.href = this.href;
        }

    });

    var gallery = mui('.mui-slider');
    gallery.slider({
        interval: 2000 //自动轮播周期，若为0则不自动播放，默认为0；
    });

    // 跳转页面函数
    function gotoUrl(name) {
        window.top.location.href = this.href;
    }

    $('.gotoPage').on('tap', function(e) {
        var name = $(this).attr('data-page'); //获取元素的data-page属性值
        switch (name) {
            case 'home':
                home();
                break;
            case 'sort':
                sort();
                break;
            case 'salse':
                salse();
                break;
            case 'shopcar':
                shopcar();
                break;
            case 'person':
                person();
                break;
        }

    })


    // 提示用户在手机设备上查看
    $(function() {
        var screenWidth = document.body.clientWidth;
        if (screenWidth > 640) {
            $('#modal-box').css('display', 'block');
        }

        $('.button-yes').on('tap', function(e) {
            $('#modal-box').css('display', 'none');
        })
        $('.button-no').on('tap', function(e) {
            $('window').width(480);
            $('#modal-box').css('display', 'none');
        })
    })

    // 阻止a标签的默认事件
    $('body').find('a').on('tap', (function(e) {
        //如果提供了事件对象，则这是一个非IE浏览器 
        if (e && e.preventDefault) {
            //阻止默认浏览器动作(W3C) 
            e.preventDefault();
        } else {
            //IE中阻止函数器默认动作的方式 
            window.event.returnValue = false;
            return false;
        }
    }));
});