// 首页
define([
    'zepto',
    'artTemplate',
    'text!../tpls/home/home.html'
], function($, art, homeTpl) {
    'use strict';

    return function() {
        $('#container').html(homeTpl);

        var gallery = mui('.mui-slider');
        gallery.slider({
            interval: 2000 //自动轮播周期，若为0则不自动播放，默认为0；
        });
    }

});