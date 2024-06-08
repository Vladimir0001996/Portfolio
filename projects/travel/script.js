jQuery(document).ready(function($){
    let toursGallery = $('#tours_gallery');
        for (let i = 0; i < $('#tours_gallery').children().length; i++) {
            toursGallery.children().eq(i).css('background-image','url(img/' + (i+1) + '.1.jpg)');
        }

    if (window.screen.width >= 1000) {
        console.log('desctop mode');

        // window.scrollTo({
        //     top: 0,
        //     behavior: "smooth",
        // });
        

        // welcome block background animation
        let counter = 0;
        function BackChangeAnim() {
            let opacity = 30;
            OpacityDown = setInterval(() => {
                if (opacity > 10) {
                    opacity -= 1;
                    opacityForCSS = opacity/30;
                    $('#welcome_container').css('opacity',opacityForCSS)
                }
                else {
                    $('#welcome_container').css('background-image', 'url(img/welcome' + counter + '.1.jpg)')
                    clearInterval(OpacityDown)
                    OpacityUp = setInterval(() => {
                        if (opacity < 30) {
                            opacity += 1;
                            opacityForCSS = opacity / 30;
                            $('#welcome_container').css('opacity',opacityForCSS)
                        }
                        else {
                            clearInterval(OpacityUp)
                        }
                    }, 15);
                }
            }, 15);
        }
        let welcomeAnimationInterval = setInterval(() => {
                counter++;
                if (counter > 2) {
                    counter = 0
                }
                BackChangeAnim()
            }, 5000);
        window.onfocus = ()=> {
            console.log('focus');
            welcomeAnimationInterval = setInterval(() => {
                counter++;
                if (counter > 2) {
                    counter = 0
                }
                BackChangeAnim()
            }, 5000);
        };
        window.onblur = ()=> {
            console.log('blur');
            clearInterval(welcomeAnimationInterval)
        };

        

        // first block gallery scroll
        $('#first_block_gallery').on('mouseenter', ()=>{
            $('body').css('overflow','hidden');
            $('#first_block_gallery').on('wheel',(e)=>{
                let pos = parseFloat($('#gallery_scroll').css('left')) - (e.originalEvent.deltaY / 2)
                let posPX = pos + 'px'
                if (pos >= (-936) && pos <= 0)
                $('#gallery_scroll').css('left', posPX)
            })
        })

        $('#first_block_gallery').on('mouseleave',()=>{
            console.log('mouseout');
            $('body').css('overflow','visible');
        })

        // advantages hover
        $('.all_advantages').on('mouseenter',(e)=>{
            $('#advantages_discription').css('display','none')
            let top;
            let pContent;
            if (e.target.tagName == 'H3') {
                for (let i = 0; i < e.target.parentElement.parentElement.children.length; i++) {
                    e.target.parentElement.parentElement.children[i].style.zIndex = '500';
                }
                top = e.target.parentElement.parentElement.offsetTop;
                e.target.parentElement.style.zIndex = '1500';
                e.target.parentElement.style.backgroundColor = 'transparent';
                e.target.parentElement.style.boxShadow = ' 0 0 0 transparent';
                pContent = e.target.parentElement.children[1].innerText;
            }
            else {
                for (let i = 0; i < e.target.parentElement.children.length; i++) {
                    e.target.parentElement.children[i].style.zIndex = '500';
                }
                top = e.target.offsetTop;
                e.target.style.zIndex = '1500'; 
                e.target.style.backgroundColor = 'transparent';
                e.target.style.boxShadow = '0 0 0 transparent';
                pContent = e.target.children[1].innerText;
                
            };
            let left = e.target.offsetLeft;
            $('#advantages_discription').css('display','block')
            $('#advantages_discription').css('top',top)
            $('#advantages_discription').css('left',left)
            setTimeout(()=>{
                $('#advantages_discription').css('opacity', '1')
            
                $('#advantages_discription').css('height', '')
                $('#advantages_discription').css('border-bottom-left-radius','10px')
                $('#advantages_discription').css('border-bottom-right-radius','10px')
                $('#advantages_discription').children().prop('innerText',pContent)
            },1)
        })
        $('.all_advantages').on('mouseleave',(e)=>{
            $('#advantages_discription').css('height', '200px')
            $('#advantages_discription').css('border-bottom-left-radius','100px')
            $('#advantages_discription').css('border-bottom-right-radius','100px')
            setTimeout(()=>{
                if (e.target.tagName == 'H3') {
                    e.target.parentElement.style.backgroundColor = 'rgba(216, 233, 232, 0.8)';
                    e.target.parentElement.style.boxShadow = '0 0 30px rgba(180, 151, 92, 0.9)';
                }
                else {
                    e.target.style.backgroundColor = 'rgba(216, 233, 232, 0.8)';
                    e.target.style.boxShadow = '0 0 30px rgba(180, 151, 92, 0.9)';
                };
            }, 200)
        })
    }



   
       
        let touchstart;
        $('#first_block_gallery').on('touchstart', (e)=>{
            console.log('touch start gallery');
            touchstart = e.touches[0].clientX;
            console.log(touchstart);
            $('body').css('overflow','hidden');
        })

        $('#first_block_gallery').on('touchmove', (e)=>{
            console.log('touch move gallery');
            let touchmove = e.touches[0].clientX;
            console.log(touchmove);

            let pos = parseFloat($('#gallery_scroll').css('left')) - (touchstart - touchmove)
            let posPX = pos + 'px'
            if (pos >= (-1836) && pos <= 0) {
                $('#gallery_scroll').css('left', posPX)
            }
            touchstart = touchmove

        })

        $('#first_block_gallery').on('touchend', (e)=>{
            console.log('touch end gallery');
            $('body').css('overflow','visible');
        })
 



})