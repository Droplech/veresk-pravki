$('.list-categories li').click(function(){
    if(!$(this).find('.label-text').hasClass('.active')){
        $('.list-categories li .label-text').removeClass('.active')
        $('.list_cat_manu').slideUp()
        $('.label-text .span_vertical').css("transform","rotate(90deg)")
        $(this).find('.label-text').addClass('.active')
        $(this).find('.list_cat_manu').slideDown()
        $(this).find('.span_vertical').css({
            'transform':'rotate(0deg)',
            'transition':'.3s'
        })
    }else{
        $(this).find('.label-text').removeClass('.active')
        $(this).find('.list_cat_manu').slideUp()
        $('.label-text .span_vertical').css("transform","rotate(90deg)")
    }
})







$('.special_coupon ').click(function(){
    if(!$(this).find('.coupon_title_txt').hasClass('active')){
        $('.special_coupon .coupon_title_txt').removeClass('active')
        $('.special_coupon .icon-down-open').css({
            'transform':'rotate(0deg)',
            'transition': '.3s'
        })
        $('.special_coupon_content').slideUp()
        $(this).find('.coupon_title_txt').addClass('active')
        $(this).find('.special_coupon_content').slideDown()
        $(this).find('.icon-down-open').css("transform","rotate(180deg)")
    }else{
        $(this).find('.coupon_title_txt').removeClass('active')
        $(this).find('.special_coupon_content').slideUp()
        $(this).find('.icon-down-open').css({
            'transform':'rotate(0deg)',
            'transition': '.3s'
        })
    }
})




