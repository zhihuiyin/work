// 商品详情页

define([
    'zepto',
    'artTemplate',
    'text!../tpls/details/details.html'
], function($, art, detailsTpl) {
    'use strict';

    return function() {
        $('body').html(detailsTpl);

        var gallery = mui('.mui-slider');
        gallery.slider({
            interval: 2000
        });

        $('#segmentedControl').find('a').on('tap', function(e) {
            e.preventDefault();

        });
    }
});