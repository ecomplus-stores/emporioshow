$(document).ready(function(){
    // $('.header__search-input').keyup(function(){
    //     $('body .search__input').val($(this).val()).[0].dispatchEvent(new Event('input'));
    // });
    $('body').click(function(e){
        if($(e.target).closest('.header__search').length == 0){
            $('#instant-search .search__status .close').click();
        }
    });
    
})
