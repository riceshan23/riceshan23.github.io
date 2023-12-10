"use strict";

var RS_lib = function ()
{
    var _show_body = function()
    {
        const $body = $('#rs_show_body')

        $('.rs_show_tag').click(function(e){

            const $el = $(e.currentTarget);
            const target = $el.data('target')

            $body.empty();

            $.get(target + '.html', function(o){
                $body.hide().html(o).fadeIn('slow');

                _gen_gif();
            })
        })

        $('.rs_clear_body').click(function(e) {
            $body.empty()
        })

        $('.tab_collection').click(function(e) {
            const $el = $(e.currentTarget)
            const target_id = $el.attr('href')

            $(target_id).find('li').first().find('a.rs_show_tag').trigger('click')
        })

        $('[href="#overview"]').trigger('click')
    }

    let _fill = function()
    {
        $('#my_age').text(moment().diff('1987-01-23', 'years'))
    }

    var _gen_gif = function()
    {
        $('.rs-gif').each(function(i,v){

            const $el = $(v);
            const src = $el.data('src');

            $(`<a href="javascript:;" class="rs-gif-btn" >載入GIF</a>`)
            .appendTo($(v))
            .click(function(btn_el){

                $el.find('.rs-gif-btn').remove()
                $el.append(`<img src="img/gif/${src}" class="img-fluid mb-4">`)
            })
        })

    }

    // Public methods
    return {
        init: function () {
            _show_body();
            _fill()
        }
    }
}();

RS_lib.init();