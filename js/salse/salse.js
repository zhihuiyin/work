// 限时抢购

define([
    'zepto',
    'artTemplate',
    'text!../tpls/salse/salse.html'
], function($, art, salseTpl) {
    'use strict';

    return function() {
        $('#container').html(salseTpl);
    }

});