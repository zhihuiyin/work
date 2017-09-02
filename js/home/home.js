// 首页
define([
    'zepto',
    'artTemplate',
    'text!../tpls/home/home.html'
], function($, art, homeTpl) {
    'use strict';

    return function() {
        $('#container').html(homeTpl);


    }

});