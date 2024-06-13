jQuery(document).ready(function($){


  // mobile/desctop
  // console.log(window.innerWidth);
  let IsMobile = false;
  if(window.innerWidth < 800) {
    IsMobile = true
    $('#projects_left_arrow').removeAttr('id')
    $('#projects_right_arrow').removeAttr('id')
    $('#projects_mobile_arrows')[0].children[0].setAttribute('id','projects_left_arrow')
    $('#projects_mobile_arrows')[0].children[1].setAttribute('id','projects_right_arrow')
    $('#welcome_img').attr('src','img/welcome_mob.webp')
  }
  else {
    $('#welcome_img').attr('src','img/welcome.webp')
  }




  // alert(window.innerHeight);

   // theme/lang switch 
   let progressPointsBackColorActive;

   function LetDark () {
    $('body').addClass('dark_theme')
    $('body').removeClass('light_theme')
    $('#body_cover').css('background-image','url(img/dark_back_v2.webp)')
    $('#projects_right_arrow').css('background-image','url(img/right_dark.webp)')
    $('#projects_left_arrow').css('background-image','url(img/left_dark.webp)')
    $('#skill_1_img').attr('src','img/html_dark.webp')
    $('#skill_2_img').attr('src','img/css_dark.webp')
    $('#skill_3_img').attr('src','img/js_dark.webp')
    $('#theme_light').css('background-image','url(img/sun_unactive.webp)')
    $('#theme_dark').hover(()=>{
      $('#theme_dark').css('background-image','url(img/moon.webp)')
    },()=>{
      $('#theme_dark').css('background-image','url(img/moon.webp)')
    })
    $('#theme_light').hover(()=>{
      $('#theme_light').css('background-image','url(img/sun.webp)')
    },()=>{
      $('#theme_light').css('background-image','url(img/sun_unactive.webp)')
    })
    $('#theme_dark').css('background-image','url(img/moon.webp)')
    $('#mail').css('background-image','url(img/e-mail_dark.webp)')
    $('#footer_mail').css('background-image','url(img/e-mail_dark.webp)')
    $('#header_settings').attr('src','img/settings_dark.webp')

    progressPointsBackColorActive = '#e6eceb'
  }

  function LetLight () {
    $('body').removeClass('dark_theme')
    $('body').addClass('light_theme')
    $('#body_cover').css('background-image','url(img/light_back_v4.webp)')
    $('#projects_right_arrow').css('background-image','url(img/right.webp)')
    $('#projects_left_arrow').css('background-image','url(img/left.webp)')
    $('#skill_1_img').attr('src','img/html.webp')
    $('#skill_2_img').attr('src','img/css.webp')
    $('#skill_3_img').attr('src','img/js.webp')
    $('#theme_light').css('background-image','url(img/sun.webp)')
    $('#theme_light').hover(()=>{
      $('#theme_light').css('background-image','url(img/sun.webp)')
    },()=>{
      $('#theme_light').css('background-image','url(img/sun.webp)')
    })
    $('#theme_dark').css('background-image','url(img/moon_unactive.webp)')
    $('#theme_dark').hover(()=>{
      $('#theme_dark').css('background-image','url(img/moon.webp)')
    },()=>{
      $('#theme_dark').css('background-image','url(img/moon_unactive.webp)')
    })
    $('#mail').css('background-image','url(img/e-mail.webp)')
    $('#footer_mail').css('background-image','url(img/e-mail.webp)')
    $('#header_settings').attr('src','img/settings.webp')
    progressPointsBackColorActive = '#1d2020'
  }
  $('#theme_light').on('click', ()=>{
    LetLight()
  })
  $('#theme_dark').on('click', ()=>{
    LetDark()
  })

  // theme auto setter 
  let isThemeDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (isThemeDark == true) {
    LetDark()
  }
  else {
    LetLight()
  }

  // welcome Animation
  let iterationCounter = 0;
  function HiAnimation () {
    clearInterval (blocksAnimation);
    let rotation = 0
    let isUp = true
    let welcomeAnimaiton = setInterval(()=>{
      if (isUp == true) {
        rotation ++
        if (rotation == 20) {
          isUp = false
        }
      }
      else {
        rotation --
        if (rotation == -20) {
          isUp = true
        }
      }
      let deg = rotation + 'deg'
      iterationCounter ++;
      $('#welcome_hi_emoji').css('rotate', deg)
    },15)
    setTimeout(() => {
      clearInterval(welcomeAnimaiton)
    }, 2500);
  }
    counter = -500
    let blocksAnimation = setInterval(()=>{
      counter = counter + 5
      px1 = counter + 'px'
      if (window.innerWidth < 1200) {
        px2 = counter - 100 + 'px'
      }
      else {
        px2 = counter - 150 + 'px'
      }
      let opacity =  1+(counter/500);
      if (IsMobile == false) {
        $('#welcome_right_cover').css('opacity' , opacity)
        $('#welcome_h1_cover').css('top', px1).css('opacity' , opacity)
        $('#welcome_h2').css('left', px1).css('opacity' , opacity)
        $('#welcome_text').css('bottom', px2).css('opacity' , opacity)
      }
      if (counter > 1) {
        HiAnimation()
        $('body').css('overflow-x','visible')
      }
    },10)

    $('#welcome_hi_emoji').on('mouseover', ()=>{
      HiAnimation()
    })

  // Projects from json
  let contentRequestURL = 'data/content.json';
  let contentRequest = new XMLHttpRequest();
  contentRequest.open("GET", contentRequestURL);
  contentRequest.responseType = "json";
  contentRequest.send();
  contentRequest.onload = function () {
    let contentOnServer = contentRequest.response;
    for (let i = 0; i < contentOnServer.projects.length; i++) {
      $('#projects_scroll').prepend('<div class="project_card" id="' + i + '"><h3></h3><img><p></p></div>')
    }
    for (let i = 0; i < contentOnServer.projects.length; i++) {
      $('#projects_scroll')[0].children[i].children[0].innerText = contentOnServer.projects[i].header;
      $('#projects_scroll')[0].children[i].children[1].setAttribute('src',contentOnServer.projects[i].img);
      $('#projects_scroll')[0].children[i].children[2].innerText = contentOnServer.projects[i].short_discription;
      if (i == (contentOnServer.projects.length)-1) {
        $('#projects_scroll').children().on('click',(e)=>{
          let idInBase;
          if (e.target.className !== 'project_card') {
            idInBase = contentOnServer.projects.length - e.target.parentElement.id -1;
          }
          else {
            idInBase = contentOnServer.projects.length - e.target.id -1;
          }
          $('#project_full_discription').children().remove()
          $('#project_full_discription').prepend(contentOnServer.projects[idInBase].full_discription)
          $('#project_full_discription_cover').css('display','block');
          $('#body').css('overflow','hidden')
          $('#project_full_discription').scrollTop(0)
          $('#project_full_discription_cover').on('click',(a)=>{
            if (a.target.id == 'project_full_discription_cover') {
              $('#project_full_discription_cover').css('display','none');
              $('#body').css('overflow','visible')
            }
          })
        })
      }
    }
  }

  // full discription close button
  if (IsMobile == true) {
    $('#project_full_discription_close_button').on('click',()=>{
      $('#project_full_discription_cover').css('display','none')
      $('#body').css('overflow','visible')
    })
  }
  

  // projects gallery progress points
  function ProgressBar (left) {
    $('.progress_points').css('background-color', 'transparent')
    if (left == 0) {
      $('#progress_point_1').css('background-color', progressPointsBackColorActive)
    }
    else if (left == -500) {
      $('#progress_point_1').css('background-color', progressPointsBackColorActive)
      $('#progress_point_2').css('background-color', progressPointsBackColorActive)
    }
    else if (left == -1000) {
      $('#progress_point_2').css('background-color', progressPointsBackColorActive)
    }
    else if (left == -1500) {
      $('#progress_point_2').css('background-color', progressPointsBackColorActive)
      $('#progress_point_3').css('background-color', progressPointsBackColorActive)
    }
    else if (left == -2000) {
      $('#progress_point_3').css('background-color', progressPointsBackColorActive)
    }
    else if (left == -2500) {
      $('#progress_point_3').css('background-color', progressPointsBackColorActive)
      $('#progress_point_4').css('background-color', progressPointsBackColorActive)
    }
    else if (left == -3000) {
      $('#progress_point_4').css('background-color', progressPointsBackColorActive)
    }
  }

  let left = 0;

  $('#projects_left_arrow').on('click',()=>{
    if (IsMobile == false) {
      left = left + 500
      if (left > 0) {
        left = -3000
      }
    }
    else {
      left = left + 90
    if (left > 0) {
      left = -630
    }
    }
    ProgressBar(left)
    if (IsMobile == false) {
      $('#projects_scroll').css('margin-left', left)

    }
    else {
      let leftVW = left + 'vw'
      $('#projects_scroll').css('margin-left', leftVW)
    }
  })

  $('#projects_right_arrow').on('click',()=>{
    if (IsMobile == false) {
      left = left - 500;
      if (left < -3000) {
        left = 0
      }
    }
    else {
      left = left - 90;
      if (left < -630) {
        left = 0
      }
    }
    
    ProgressBar(left)
    if (IsMobile == false) {
      $('#projects_scroll').css('margin-left', left)
    }
    else {
      let leftVW = left + 'vw'
      $('#projects_scroll').css('margin-left', leftVW)
    }
  })

  $('#progress_point_1').on('click',()=>{
    $('#projects_scroll').css('left', '0px')
    left = 0
    ProgressBar(left)
  })

  $('#progress_point_2').on('click',()=>{
    $('#projects_scroll').css('left', '-1000px')
    left = -1000
    ProgressBar(left)
  })

  $('#progress_point_3').on('click',()=>{
    $('#projects_scroll').css('left', '-2000px')
    left = -2000
    ProgressBar(left)
  })

  $('#progress_point_4').on('click',()=>{
    $('#projects_scroll').css('left', '-3000px')
    left = -3000
    ProgressBar(left)
  })

  // contacts
  let isActive = false;
 $('#contacts').on('mouseover',()=>{
  $('#telegram').css('bottom','300px')
  $('#whatsapp').css('bottom','230px')
  $('#instagram').css('bottom','160px')
  $('#mail').css('bottom','90px')
 })

  $('#contacts').on('mouseout', (e)=>{
    $(document).on('mousemove',(e)=>{
      if (e.target.className == 'contacts_links') {
        isActive = true
      }
      else {
        isActive = false
      }
    })

    $('#contacts').on('click', ()=>{
      isActive = false
    })
    
    setTimeout(()=>{
      if (isActive == false) {
        $('#telegram').css('bottom','10px')
        $('#whatsapp').css('bottom','10px')
        $('#instagram').css('bottom','10px')
        $('#mail').css('bottom','10px')
      }
    },500)
  })

  // header settings 
  $('#header_settings').on('click', ()=>{
    $('#settings_block').toggleClass('displayNone')
    if ($('#settings_block').css('display') == 'none') {
      if (IsMobile == false) {
        $('#settings_block').css('display','flex')
        $('header').css('width','610px')  
      }
      else {
        $('#settings_block').css('display','block')
        $('header').css('height','40vw')  
      }
    }
    else {
      if (IsMobile == false) {
        $('#settings_block').css('display','none')
        $('header').css('width','500px')
      }
      else {
        $('#settings_block').css('display','none')
        $('header').css('height','7vw')  
      }

    }
  })

  // skills animation
  $(document).on('scroll',()=>{
    if (window.scrollY > $('#project_container').offset().top) {
      $('#skill_1_img').css('opacity','1')
      setTimeout(()=>{
        $('#skill_2_img').css('opacity','1');
        $('#skill_4_img').css('opacity','1')
      },500);
      setTimeout(()=>{
        $('#skill_3_img').css('opacity','1');
        $('#skill_5_img').css('opacity','1');
        $('#skill_7_img').css('opacity','1')
      },1000);
      setTimeout(()=>{
        $('#skill_6_img').css('opacity','1');
        $('#skill_8_img').css('opacity','1')
      },1500);
      setTimeout(()=>{
        $('#skill_9_img').css('opacity','1');
      },2000);
      $(document).off('scroll');
      setTimeout(()=>{
        $('#skills_img_block').children().css('transition','0.7s')
      },2500);
    }
  })
})

