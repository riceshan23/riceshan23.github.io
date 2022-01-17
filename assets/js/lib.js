"use strict";

var RS_lib = function ()
{
    var _show_body = function()
    {
        $('.rs_show_tag').click(function(e){

            const $el = $(e.currentTarget);
            const $body = $('#rs_show_body')
            const target = $el.data('target')

            $body.empty();

            $.get(target + '.html', function(o){
                $('#rs_show_body').hide().html(o).fadeIn('slow');

                _gen_gif();
            })
        })

        $('.rs_show_tag').first().trigger('click')
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
        }
    }
}();

RS_lib.init(function(){
    _show_body();
});