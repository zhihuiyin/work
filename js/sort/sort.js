// 商品分类
define([
    'zepto',
    'artTemplate',
    'text!../tpls/sort/sort.html'
], function($, art, sortTpl) {
    'use strict';

    return function() {
        $('#container').html(sortTpl);


    }

});