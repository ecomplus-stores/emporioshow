
document.write('<script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js"><\/script>')
//const ecomUtils = require('@ecomplus/utils')
const el = document.querySelector("#header")
const observerMenu = new IntersectionObserver( 
([e]) => e.target.classList.toggle("is-pinned", e.intersectionRatio < 1),
{ threshold: [1] }
);    
observerMenu.observe(el); 
$(document).ready(function(){
      

    $('body').on('click','.search-engine__aside-open, .search-engine__aside .card-header .close, .search-engine__toggles > button',function(){
        $('body .search-engine__aside').toggleClass('active')
    })
    // $('.header__search-input').keyup(function(){
    //     $('body .search__input').val($(this).val()).[0].dispatchEvent(new Event('input'));
    // });
    
    // $('#apx_newsletter').submit(function(e){
    //     e.preventDefault();
    //     var form = $(this);
    //     var url = form.attr('action');
        
    //     $.ajax({
    //         type: "POST",
    //         url: url,
    //         data: form.serialize(), // serializes the form's elements.
    //         success: function(data)
    //         {
    //             alert('Obrigado por se inscrever!');
    //         }
    //     });

    //     $(this).find('[type="email"]').val('');

    // });
    $('body').click(function(e){
        if($(e.target).closest('.header__search').length == 0){
            $('#instant-search .search__status .close').click();
        }
    });
    $('.egs_filter-clear').click(function(){
        $('.egs_filter input:checked').each(function(){
            //console.log($(this).attr('name'));
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
        dropdownUpdateLink($(this));
    });

    $('#search-engine-snap, #search-engine-load').wrap('<div class="container"></div>').wrap('<div class="row"></div>').wrap('<div class="col-md-9 col-12 offset-md-3"></div>');
    $('#search-engine-snap > article > .row > div').removeClass('col-lg-3');
    // if($('.hero-banner.category-banner').length > 0){
    //     $('.page-title').prependTo('.hero-banner');
    //     let img = $('.hero-banner > img').attr('data-src');        
    //     $('.hero-banner').css('background-image','url('+ img +')');
    // }
    $('#clubeshow .trigger').click(function(e){
        $('#clubeshow').toggleClass('visible')
    })
    $('#clubeshow form').submit(function(e){
        e.preventDefault();
        let cpf = $(this).find('[name="cpf"]').val();
        pmarket.consultaPonto(cpf);
    })
});

const pmarket = [];
pmarket.consultaPonto = function(cpf){
    axios.post('https://us-central1-pontomarket-ecomplus.cloudfunctions.net/app/get/points', {
        storeId : storefront.settings.store_id,
        params : {
            customer:{
                doc_number : cpf
            } 
        }
    })
    .then(function(response){
        let data = response.data.pm;
        let header = $('<div>Você possui <b>'+ data.point_balance +'</b> pontos</div>');
        let list = $('<ul></ul>');
        $.each(data.prize_list,function(key, prize){
            list.append('<li><input type="radio" name="prize_option" value="'+ prize.prize_value +'"/><div><label>'+ prize.name+'<small>'+ prize.description +'</small></label><br><b>Pontos: <i>'+ prize.points_required +'</i></b><span></span></div></li>');
        });
        $('#clubeshow_result').empty();
        $('#clubeshow_result').append(header);
        $('#clubeshow_result').append(list);

    })    
}

pmarket.solicitaResgate = function(oObj){
    console.log(oObj);
}
function dropdownDataGrids(oObj){
    console.log(oObj)
    $(oObj.data.options).each(function(k,item){
        let option = $('<li></li>');
        option.append('<a href="?'+ oObj.data.grid_id +'='+ item.text +'">'+ item.text +'</a>');
        $('[data-grids="'+ oObj.data._id +'"]').append(option);
    });
}
function dropdownUpdateLink(oObj){
    let link = oObj.closest('.egs_dropdown').find('span > a').attr('href');
    oObj.find('.egs_dropdownMenu-filters a').each(function(){
        let current = $(this).attr('href');
        $(this).attr('href',link+current);
    })
}
function scrollToElement(oObj){
    document.querySelector(oObj).scrollIntoView({ 
        behavior: 'smooth' 
    });         
}

function convertToSlug(str){
    str = str.replace(/^\s+|\s+$/g, '')
    str = str.toLowerCase()
  

    var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;"
    var to   = "aaaaeeeeiiiioooouuuunc------"
    for (var i=0, l=from.length ; i < l ; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '_') // collapse whitespace and replace by -
        .replace(/-+/g, '_'); // collapse dashes
    
    return str;
}

window.toggleDesktopSidenav = function(oObj){
    $(oObj).toggleClass('open')
    $('#header').toggleClass('pinned-show-menu');
}


window.buyTogether = function(ids){    
    ids.forEach(function(k,v){
        k.commodity_type = 'physical';
        k.price_effective_date = {};
        ecomCart.addProduct(k);        
    })
}

window.addItem = function(id){   
    id.item.commodity_type = 'physical';
    id.item.price_effective_date = {};
    ecomCart.addProduct(id.item);
}

const searchForm = document.querySelector("#search-form");
const searchFormInput = searchForm.querySelector("input"); // <=> document.querySelector("#search-form input");
const info = document.querySelector(".info");

// The speech recognition interface lives on the browser’s window object
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; // if none exists -> undefined

if(SpeechRecognition) {
  console.log("Your Browser supports speech Recognition");
  
  const recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.lang = "pt-BR";

  searchForm.insertAdjacentHTML("afterbegin", '<button type="button"><svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 10C13 13.3137 10.3137 16 7 16M7 16C3.68629 16 1 13.3137 1 10M7 16V19M7 19H10M7 19H4M7 13C5.34315 13 4 11.6569 4 10V4C4 2.34315 5.34315 1 7 1C8.65685 1 10 2.34315 10 4V10C10 11.6569 8.65685 13 7 13Z" stroke="#8A0403" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>');
  searchFormInput.style.paddingRight = "50px";

  const micBtn = searchForm.querySelector("button");
  const micIcon = micBtn.firstElementChild;

  micBtn.addEventListener("click", micBtnClick);
  console.log('aiai')
  function micBtnClick() {
    //if(micIcon.classList.contains("fa-microphone")) { // Start Voice Recognition
      recognition.start(); // First time you have to allow access to mic!
    //}
    //else {
//      recognition.stop();
    //}
  }

  recognition.addEventListener("start", startSpeechRecognition); // <=> recognition.onstart = function() {...}
  function startSpeechRecognition() {
    micIcon.classList.remove("fa-microphone");
    micIcon.classList.add("fa-microphone-slash");
    searchFormInput.focus();
    console.log("Voice activated, SPEAK");
  }

  recognition.addEventListener("end", endSpeechRecognition); // <=> recognition.onend = function() {...}
  function endSpeechRecognition() {
    micIcon.classList.remove("fa-microphone-slash");
    micIcon.classList.add("fa-microphone");
    searchFormInput.focus();
    console.log("Speech recognition service disconnected");
  }

  recognition.addEventListener("result", resultOfSpeechRecognition); // <=> recognition.onresult = function(event) {...} - Fires when you stop talking
  function resultOfSpeechRecognition(event) {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    
    if(transcript.toLowerCase().trim()==="stop recording") {
      recognition.stop();
    }
    else if(!searchFormInput.value) {
      searchFormInput.value = transcript;
    }
    else {
      if(transcript.toLowerCase().trim()==="go") {
        searchForm.submit();
      }
      else if(transcript.toLowerCase().trim()==="reset input") {
        searchFormInput.value = "";
      }
      else {
        searchFormInput.value = transcript;
      }
    }
    // searchFormInput.value = transcript;
    // searchFormInput.focus();
    // setTimeout(() => {
    //   searchForm.submit();
    // }, 500);
  }
  
  //info.textContent = 'Voice Commands: "stop recording", "reset input", "go"';
  
}
else {
  console.log("Your Browser does not support speech Recognition");
  info.textContent = "Your Browser does not support Speech Recognition";
}