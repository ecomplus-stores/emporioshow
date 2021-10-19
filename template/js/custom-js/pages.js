import Vue from 'vue'
const ecomUtils = require('@ecomplus/utils')


$(document).ready(function(){
    // $('.header__search-input').keyup(function(){
    //     $('body .search__input').val($(this).val()).[0].dispatchEvent(new Event('input'));
    // });
    $('body').click(function(e){
        if($(e.target).closest('.header__search').length == 0){
            $('#instant-search .search__status .close').click();
        }
    });
    $('.egs_filter-clear').click(function(){
        $('.egs_filter input:checked').each(function(){
            console.log($(this).attr('name'));
            $(this).prop('checked',false);

            $('#page-receitas .egs_filter input').trigger('change');
        })
        
    })
    $('#page-receitas .egs_filter input').change(function(){        
        let options = [];
        $('#page-receitas .egs_filter input:checked').each(function(){        
            let name = $(this).attr('name');
            let value = $(this).val();

            options.push({
                'name' : name,
                'value' : value
            })
        });

        $('[data-filter]').each(function(){
            let show = true;
            let oObj = JSON.parse($(this).attr('data-filter'));
            $.each(options, function(k, item){
                if(oObj[item.name] != item.value){
                    show = false;
                    return false;
                }
            });
            show ? $(this).show().addClass('post-visible') : $(this).hide().removeClass('post-visible');
        });
    })    
});

function scrollToElement(oObj){
    document.querySelector(oObj).scrollIntoView({ 
        behavior: 'smooth' 
    });      
}