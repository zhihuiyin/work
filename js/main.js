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

require(['zepto', 'mui', 'text!../tpls/sort/sort.html', 'event'], function($, mui, sortTpl) {
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
        // console.log($(this).attr('data-page'));
        var name = $(this).attr('data-page');
        gotoPage(name);
    })

    function gotoPage(name) {
        var pageName = name + 'Tpl';
        $('body').html(eval(pageName));
    }

    // function gotoPage(name) {
    //     switch (name) {
    //         case 'sort':
    //             $('body').html(sortTpl);
    //             break;
    //         case 'sort':
    //             $('body').html(sortTpl);
    //             break;
    //         case 'sort':
    //             $('body').html(sortTpl);
    //             break;
    //         case 'sort':
    //             $('body').html(sortTpl);
    //             break;
    //     }
    // }

    // console.dir(this);
    this.gotoPage = gotoPage;

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

    return gotoPage;
});