// 商品分类
define([
    'zepto',
    'artTemplate',
    'text!../tpls/person/person.html'
], function($, art, personTpl) {
    'use strict';

    return function() {
        $('#container').html(personTpl);


    }

});