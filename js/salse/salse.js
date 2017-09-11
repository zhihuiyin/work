// 限时抢购

define([
    'zepto',
    'artTemplate',
    'text!../tpls/salse/salse.html',
    'details/details'
], function($, art, salseTpl, details) {
    'use strict';

    return function() {
        $('#container').html(salseTpl);

        var gallery = mui('.mui-slider');
        gallery.slider({
            interval: 2000 //自动轮播周期，若为0则不自动播放，默认为0；
        });

        $('.getDetails').on('tap', function(e) {
            // e.preventDefault();
            details();
            // return false;
            if (e && e.stopPropagation) {
                e.stopPropagation();
            } else {
                window.event.cancelBubble = true;
                return false;
            }
        });
    }

});