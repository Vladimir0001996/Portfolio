jQuery(document).ready(function($){

  // color themes

  // console.log($('#support_main_img')[0].attributes[0]);


  function LetDark () {
    console.log('let dark');
    $('body').addClass('dark_theme')
    $('body').removeClass('light_theme')
    $('#support_main_img').attr('src','img/support_dark.png')
    $('#support_img_telegram').attr('src','img/telegram_dark.png')
    $('#support_img_mail').attr('src','img/e-mail_dark.png')
    $('#support_img_whatsapp').attr('src','img/whatsapp_dark.png')
    $('#footer_phone').css('background-image','url(img/phone_dark.png)')
    $('#footer_telegram').css('background-image','url(img/telegram2_dark.png)')
    $('#footer_whatsapp').css('background-image','url(img/whatsapp2_dark.png)')
    $('#footer_mail').css('background-image','url(img/e-mail_dark.png)')
    $('#services_gallery_left_arrow').css('background-image','url(img/left_dark.png)')
    $('#services_gallery_right_arrow').css('background-image','url(img/right_dark.png)')
    $('#chart_box').children().css('background-image','url(img/coins_ico_sheet_dark.png)')
    $('#services_arrows').attr('src','img/arrows_dark.png')
  }

  function LetLight () {
    console.log('let light');
    $('body').removeClass('dark_theme')
    $('body').addClass('light_theme')
    $('#support_main_img').attr('src','img/support.png')
    $('#support_img_telegram').attr('src','img/telegram.png')
    $('#support_img_mail').attr('src','img/e-mail.png')
    $('#support_img_whatsapp').attr('src','img/whatsapp.png')
    $('#footer_phone').css('background-image','url(img/phone.png)')
    $('#footer_telegram').css('background-image','url(img/telegram2.png)')
    $('#footer_whatsapp').css('background-image','url(img/whatsapp2.png)')
    $('#footer_mail').css('background-image','url(img/e-mail.png)')
    $('#services_gallery_left_arrow').css('background-image','url(img/left.png)')
    $('#services_gallery_right_arrow').css('background-image','url(img/right.png)')
    $('#chart_box').children().css('background-image','url(img/coins_ico_sheet_light.png)')
    $('#services_arrows').attr('src','img/arrows.png')
  }

   // theme auto setter 
    let isThemeDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (isThemeDark == true) {
      LetDark()
    }
    else {
      LetLight()
    }

  function ChartRequest (name, id) {
    fetch('https://min-api.cryptocompare.com/data/price?fsym=' + name + '&tsyms=USD')
  .then((response) => {
      return response.json();
  })
  .then((data) => {
     let idConstructor = '#'+ id;
     $(idConstructor).text(data.USD + '$')
  });
  }

  ChartRequest('BTC','btc')
  ChartRequest('ETH','eth')
  ChartRequest('SOL','sol')
  ChartRequest('BNB','bnb')
  ChartRequest('TON','ton')
  ChartRequest('XRP','xrp')
  ChartRequest('USDT','usdt')
  



  let contentRequestURL = 'data/content.json';
  let contentRequest = new XMLHttpRequest();
  contentRequest.open("GET", contentRequestURL);
  contentRequest.responseType = "json";
  contentRequest.send();
  contentRequest.onload = function () {
    let contentOnServer = contentRequest.response;
    for (let i = 0; i < contentOnServer.cards.length; i++) {
      $('#services_gallery_scroll').prepend('<div class="services_gallery_card" id="' + i + '"><h3></h3><img><p></p></div>')
    }
    for (let i = 0; i < contentOnServer.reviews.length; i++) {
      $('#reviews_block').prepend('<div class="reviews_card"><div class="reviews_card_header"><img class="reviews_card_img"><p></p><p></p></div><p></p>')

    }
    for (let i = 0; i < contentOnServer.cards.length; i++) {
      $('#services_gallery_scroll')[0].children[i].children[0].innerText = contentOnServer.cards[i].header;
      $('#services_gallery_scroll')[0].children[i].children[1].setAttribute('src',contentOnServer.cards[i].img);
      $('#services_gallery_scroll')[0].children[i].children[2].innerText = contentOnServer.cards[i].short_discription;




      // full discription on click
      // if (i == (contentOnServer.cards.length)-1) {
      //   console.log('put listener');
      //   $('#services_gallery_scroll').children().on('click',(e)=>{
      //     let idInBase;
      //     console.log(e.target);
      //     if (e.target.className !== 'services_gallery_card') {
      //       idInBase = contentOnServer.cards.length - e.target.parentElement.id -1;
      //     }
      //     else {
      //       idInBase = contentOnServer.cards.length - e.target.id -1;
      //     }
      //     console.log(idInBase);
      //     $('#services_full_discription')[0].children[0].innerText = contentOnServer.cards[idInBase].header;
      //     $('#services_full_discription')[0].children[1].setAttribute('src',contentOnServer.cards[idInBase].img);
      //     $('#services_full_discription')[0].children[2].innerText = contentOnServer.cards[idInBase].full_discription;
      //     $('#services_full_discription_cover').css('display','block');
      //     $('#services_full_discription_cover').on('click',(a)=>{
      //       if (a.target.id == 'services_full_discription_cover') {
      //         $('#services_full_discription_cover').css('display','none');
      //       }
      //     })
      //   })
      // }
    }
    for (let i = 0; i < contentOnServer.reviews.length; i++) {
      $('#reviews_block')[0].children[i].children[0].children[0].setAttribute('src',contentOnServer.reviews[i].img);
      $('#reviews_block')[0].children[i].children[0].children[1].innerText = contentOnServer.reviews[i].name;
      $('#reviews_block')[0].children[i].children[0].children[2].innerText = contentOnServer.reviews[i].city;
      $('#reviews_block')[0].children[i].children[1].innerText = contentOnServer.reviews[i].review;
    }
  }

  let isActive = false;
  $('#support').on('mouseover', ()=>{
    $('#support_telegram').css('left','-70px');
    $('#support_mail').css('top','-70px');
    $('#support_whatsapp').css('left','90px');
  })

  $('#support').on('mouseout', (e)=>{
    $(document).on('mousemove',(e)=>{
      if (e.target.id == 'support_main_img' || e.target.className == 'support_img') {
        isActive = true
      }
      else {
        isActive = false
      }
    })
    setTimeout(()=>{
      if (isActive == false) {
        $('#support_telegram').css('left','10px');
        $('#support_mail').css('top','10px');
        $('#support_whatsapp').css('left','10px');
        $(document).off('mousemove')
     }
    },500)
  })



  // services_gallery_scroll
  
  function ProgressBar (left) {
    $('.progress_bar_point').css('background-color','#cfcbb4')
    if (left == 0) {
      $('#point1').css('background-color','#2f281a')
    }
    else if (left == -860) {
      $('#point2').css('background-color','#2f281a')
    }
    else if (left == -1720) {
      $('#point3').css('background-color','#2f281a')
    }
    else if (left == -2580) {
      $('#point4').css('background-color','#2f281a')
    }
  }

  let left = 0;
  ProgressBar(left)

  $('#services_gallery_left_arrow').on('click',()=>{
    left = left + 860
    if (left > 0) {
      left = -2580
    }
    ProgressBar(left)
    $('#services_gallery_scroll').css('left', left)
  })

  $('#services_gallery_right_arrow').on('click',()=>{
    left = left - 860;
    if (left < -2700) {
      left = 0
    }
    ProgressBar(left)
    $('#services_gallery_scroll').css('left', left + 'px')
  })

  $('#point1').on('click',()=>{
    $('#services_gallery_scroll').css('left', '0px')
    left = 0
    ProgressBar(left)
  })

  $('#point2').on('click',()=>{
    $('#services_gallery_scroll').css('left', '-860px')
    left = -860
    ProgressBar(left)
  })

  $('#point3').on('click',()=>{
    $('#services_gallery_scroll').css('left', '-1720px')
    left = -1720
    ProgressBar(left)
  })

  $('#point4').on('click',()=>{
    $('#services_gallery_scroll').css('left', '-2580px')
    left = -2580
    ProgressBar(left)
  })

  // console.log('put listener');
  // $('#services_gallery_card').on('click',(e)=>{
  //   console.log(e.target);
  // })



  // $('#reviews_block')
  let isFullReviews = false
  $('#more_reviews').on('click',()=>{
    if (isFullReviews == false) {
      $('#reviews_block').css('height','100%')
      $('#more_reviews').text('show less')
      isFullReviews = true
    }
    else {
      $('#reviews_block').css('height','280px')
      $('#more_reviews').text('show more')
      isFullReviews = false
    }
  })

  let touchstart;
  $('#services_gallery').on('touchstart', (e)=>{
      console.log('touch start gallery');
      touchstart = e.touches[0].clientX;
      console.log(touchstart);
      $('#body').css('overflow','hidden');
  })

  $('#services_gallery').on('touchmove', (e)=>{
      console.log('touch move gallery');
      let touchmove = e.touches[0].clientX;
      console.log(touchmove);

      let pos = parseFloat($('#services_gallery_scroll').css('left')) - (touchstart - touchmove)
      let posPX = pos + 'px'
      if (pos >= (-8836) && pos <= 0) {
          $('#services_gallery_scroll').css('left', posPX)
      }
      touchstart = touchmove

  })

  $('#services_gallery').on('touchend', (e)=>{
      console.log('touch end gallery');
      $('#body').css('overflow','visible');
  })

})

