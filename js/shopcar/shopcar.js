// 购物车
define([
    'zepto',
    'artTemplate',
    'text!../tpls/shopcar/shopcar.html'
], function($, art, shopcarTpl) {
    'use strict';

    return function() {
        $('body').html(shopcarTpl);

        $(function() {
            // 点击按钮增加或减少商品数量
            $(document)
                .on('tap', '.good-add', function(e) {
                    var count = $(this).siblings('.good-num').text() - 0;
                    count += 1;
                    $(this).siblings('.good-num').text(count);
                    priceAll($(this), count);
                    storePrices($(this));
                    totalPrices();
                })
                .on('tap', '.good-minus', function(e) {
                    var count = $(this).siblings('.good-num').text() - 0;
                    count -= 1;
                    count = count < 0 ? 0 : count;
                    $(this).siblings('.good-num').text(count);
                    priceAll($(this), count);
                    storePrices($(this));
                    totalPrices();
                });

            // 点击商品复选框切换选择状态
            $('[name="checkbox"]').on('change', function(e) {
                storePrices($(this));
                selectAll($(this));
                totalPrices();
                selectAny()
            });
            // 点击店铺复选框切换全选反选
            $('[name="checkmore"]').on('change', function(e) {

                    var flag = $(this).attr('checked');
                    $(this).parents('.shops').children('.mui-table-view').find('input').prop('checked', flag ? true : false);
                    storePrices($(this));
                    totalPrices();
                    selectAny();
                })
                // 点击全选按钮实现所有商品的切换
            $('[name="checkall"]').on('click', function(e) {
                    var flag = $(this).attr('checked');
                    $('#shopcar').children().find('input[type="checkbox"]').each(function(index, item) {
                        $(item).prop('checked', flag);
                    });
                    $('[name="checkmore"]').each(function(index, item) {
                        storePrices($(item)); //统计每个店铺的总价格
                    });
                    totalPrices();
                })
                // 统计所有商品复选框状态
            function selectAny() {
                var flag = true;
                $('#shopcar').children().find('input[name="checkbox"]').each(function(index, item) {
                    if (!$(item).attr('checked')) {
                        flag = false;
                    }
                });
                $('input[name="checkall"]').prop('checked', flag);
            }
            // 统计单个店铺所有商品是否选择
            function selectAll(ele) {
                var flag = true;
                ele.parents('.shops').children('.mui-table-view').find('input[name="checkbox"]').each(function(index, item) {
                    if (!$(item).attr('checked')) {
                        flag = false;
                    }
                });
                ele.parents('.shops').children('.mui-checkbox').find('input[name="checkmore"]').prop('checked', flag);
            }
            //统计单类商品的总价格
            function priceAll(ele, count) {
                var priceStr = ele.parent().siblings('.price').children('b').text(); //获取价格的文本值
                var priceNum = priceStr.slice(1) - 0; //将文本价格转为数值
                var priceAll = count * priceNum; //计算价格
                ele.parents('.good-info').attr('data-price', priceAll); //将总价格存入商品父盒子中
                // console.dir(ele.parents('.good-info').attr('data-price'));
            }
            // 统计单个店铺所有商品的总价格
            function storePrices(ele) {
                var storeAll = 0;
                ele.parents('.shops').children('.mui-table-view').find('input[name="checkbox"]').each(function(index, item) {
                    // console.log(index, $(item).attr('checked'));
                    if ($(item).attr('checked')) {
                        var goodPrice = $(item).parents('.good-info').attr('data-price') - 0;
                        storeAll += goodPrice;
                    }
                });
                // console.log(storeAll);
                ele.parents('.shops').children('.all-prices').children('span').text(storeAll + '.00');
                return storeAll;
            }
            // 统计所有选中商品的总价格
            function totalPrices() {
                var total = 0;
                $('input[name="checkbox"]').each(function(index, item) {
                    // console.log(index, $(item).attr('checked'));
                    if ($(item).attr('checked')) {
                        var goodPrice = $(item).parents('.good-info').attr('data-price') - 0;
                        total += goodPrice;
                    }
                });
                // console.log(total);
                $('#total-prices').text(total + '.00');
            }
        })
    }

});