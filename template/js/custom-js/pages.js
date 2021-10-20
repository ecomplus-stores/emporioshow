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
    });
    
    
    $('.egs_dropdownMenu [data-grids]').each(function(){
        let currentDate = new Date().getTime();
        let grid = $(this).attr('data-grids');
        let gridInfo = JSON.parse(localStorage.getItem(grid));
        //console.log(gridInfo)
        if(gridInfo != undefined){
            if(gridInfo.created_at + (3600 * 1000) < currentDate){
                localStorage.removeItem(grid);            
            }
        }

        if (!localStorage.getItem(grid)){
            ecomClient.store({ url: '/grids/'+ grid + '.json' }).then(({ data }) => {                 
                localStorage.setItem(grid,JSON.stringify({'created_at' : currentDate, 'data': data}));
                gridInfo = data;                
                dropdownDataGrids({'created_at' : currentDate, 'data': data});
            }).catch(console.error)
        }else{
            dropdownDataGrids(gridInfo);
        }           
    });

    $('#search-engine-snap, #search-engine-load').wrap('<div class="container"></div>').wrap('<div class="row"></div>').wrap('<div class="col-md-9 col-12 offset-md-3"></div>');
    $('#search-engine-snap > article > .row > div').removeClass('col-lg-3');
    if($('.hero-banner.category-banner').length > 0){
        $('.page-title').prependTo('.hero-banner');
        let img = $('.hero-banner > img').attr('data-src');        
        $('.hero-banner').css('background-image','url('+ img +')');
    }
});

function dropdownDataGrids(oObj){
    $(oObj.data.options).each(function(k,item){
        let option = $('<li></li>');
        option.append('<a href="#'+ item._id +'">'+ item.text +'</a>');
        $('[data-grids="'+ oObj.data._id +'"]').append(option);
    })
}
function scrollToElement(oObj){
    document.querySelector(oObj).scrollIntoView({ 
        behavior: 'smooth' 
    });      
}