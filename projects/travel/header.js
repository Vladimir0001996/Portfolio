jQuery(document).ready(function($){
    if (window.screen.width >= 1000) {
        $('#header_menu_tours').on('mouseover',()=>{
            $('#tours_menu').css('display','block');
            $('#header_menu_tours').children('span').css('display','none');
        })
        $('#header_menu_tours').on('mouseout',()=>{
                $('#tours_menu').css('display','none');
                $('#header_menu_tours').children('span').css('display','inline');
        })
        $('#header_menu').css('grid-template-columns','repeat(' + $('#header_menu').children().length + ', 1fr)')




        $('#header_menu_countries').on('mouseover',()=>{
            $('#countries_menu').css('display','block');
            $('#header_menu_countries').children('span').css('display','none');
        })
        $('#header_menu_countries').on('mouseout',()=>{
                $('#countries_menu').css('display','none');
                $('#header_menu_counties').children('span').css('display','inline');
        })
        $('#header_menu').css('grid-template-columns','repeat(' + $('#header_menu').children().length + ', 1fr)')
    }
    if (window.screen.width <= 1000) {
        console.log('mobile mode');

        $('#burger_icon').on('click',()=>{

            // $('#header_menu').css('display','block')
            $('#header_menu').toggleClass('mobileDisplayNone')
            if ($('#header_menu').hasClass('mobileDisplayNone')) {
                $('body').css('overflow','visible')
            }
            else {
                $('body').css('overflow','hidden')
            }
            
        })
        $('a').on('click',()=>{
            $('#header_menu').addClass('mobileDisplayNone')
            $('body').css('overflow','visible')
        })
    }



    console.log(window.location.pathname.slice(1));
    if (window.location.pathname.slice(1) == 'index.html') {
        // feedback/support
        let animationInterval;
        let messageInterval;
        let welcomeText = 'Hello! How can I help you?'
        $('#feedback_form').children('input').prop('value', '')
        $('#feedback_form').children('textarea').prop('value', '')

        function CustomerServiceAnimation () {
            setTimeout(()=>{
                let posX = (-100);
                animationInterval = setInterval(()=>{
                    if (posX <= 50) {
                        $('#feedback').css('bottom', posX + 'px')
                        posX = posX + 3;
                        if (posX == (-87) || posX == (-88) || posX == (-89)) {
                            $('#feedback').css('display','block')
                        }
                    }
                    else {
                        window.clearInterval(animationInterval);
                        let counter = 0;
                        $('#feedback_text').css('display', 'block')
                        messageInterval = setInterval(()=>{
                            if (counter < 27) {
                                $('#feedback_text').children('p').prop('innerText', welcomeText.slice(0,counter))
                                counter++;
                            }
                            else {
                                window.clearInterval(messageInterval);
                            }
                        }, 50)
                    }
                }, 10)
            }, 5000)
        } 
        if (window.screen.width >= 1000) {
            CustomerServiceAnimation();
        }
        $('#feedback_text').on('click',(e)=>{
            if (e.target.id == 'feedback_text_close_button') {
                $('#feedback_text').css('display', 'none')
            }
            else {
                $('#feedback_form').css('display', 'block')
                $('#feedback_text').css('display', 'none')
            }
        })
        $('#feedback_icon').on('click', ()=>{
            $('#feedback_text').css('display', 'none')
            $('#feedback_form').css('display', 'block')
            $('#feedback_icon').css('display' , 'none')
        })
        $('#feedback_form_close_button').on('click', ()=>{
            $('#feedback_form').css('display', 'none')
            $('#feedback_icon').css('display' , 'block')
        })
        $('#feedback_form_send_button').on('click',()=>{
            // send all data
            $('#feedback_form').children('input').prop('value', '')
            $('#feedback_form').children('textarea').prop('value', '')
            $('#feedback_icon').css('display' , 'block')
            $('#feedback_form').css('display', 'none')


        })
        $('#up_button').on('click' , ()=>{
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        })

    



        let upButtonVisibility = false;
        $(window).on('scroll',()=>{
            if (pageYOffset > 500 && upButtonVisibility == false) {
                $('#up_button').css('bottom' , '50px')
                upButtonVisibility = true;
            }
            else if (pageYOffset < 500 && upButtonVisibility == true) {
                $('#up_button').css('bottom' , '-150px')
                upButtonVisibility = false;
            }

        })

        $('#up_button').hover(()=>{
            $('#up_button').css('bottom','40px').css('left','40px').css('width','90px').css('height','90px');
        } , 
        ()=>{
            if (upButtonVisibility == false) {
                $('#up_button').css('bottom','-150px').css('left','50px').css('width','70px').css('height','70px');
            }
            else {
                $('#up_button').css('bottom','50px').css('left','50px').css('width','70px').css('height','70px');
            }
        })
    }

    else {
        // feedback/support
        $('#feedback_form').children('input').prop('value', '')
        $('#feedback_form').children('textarea').prop('value', '')
        $('#feedback').css('display','block')
        $('#feedback').css('bottom', '50px')
        $('#feedback_icon').on('click', ()=>{
            $('#feedback_text').css('display', 'none')
            $('#feedback_form').css('display', 'block')
            $('#feedback_icon').css('display' , 'none')
        })
        $('#feedback_form_close_button').on('click', ()=>{
            $('#feedback_form').css('display', 'none')
            $('#feedback_icon').css('display' , 'block')
        })
        $('#feedback_form_send_button').on('click',()=>{
            // send all data
            $('#feedback_form').children('input').prop('value', '')
            $('#feedback_form').children('textarea').prop('value', '')
            $('#feedback_icon').css('display' , 'block')
            $('#feedback_form').css('display', 'none')
        })
        $('#up_button').on('click' , ()=>{
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        })

        let upButtonVisibility = false;
        $(window).on('scroll',()=>{
            if (pageYOffset > 500 && upButtonVisibility == false) {
                $('#up_button').css('bottom' , '50px')
                upButtonVisibility = true;
            }
            else if (pageYOffset < 500 && upButtonVisibility == true) {
                $('#up_button').css('bottom' , '-150px')
                upButtonVisibility = false;
            }
        })

        $('#up_button').hover(()=>{
            $('#up_button').css('bottom','40px').css('left','40px').css('width','90px').css('height','90px');
        } , 
        ()=>{
            if (upButtonVisibility == false) {
                $('#up_button').css('bottom','-150px').css('left','50px').css('width','70px').css('height','70px');
            }
            else {
                $('#up_button').css('bottom','50px').css('left','50px').css('width','70px').css('height','70px');
            }
        })
    }


    

})