jQuery(document).ready(function($){
    let searchString = new URLSearchParams(window.location.search);
    let clickid = searchString.get('id');
    // console.log(clickid);


    var id = clickid; // Ваш ID, который вы хотите получить

    // Создаем объект XMLHttpRequest
    var xhr = new XMLHttpRequest();

    // Настраиваем запрос
    xhr.open('GET', '../server.php?id=' + id, true);

    // Отправляем запрос
    xhr.send();

    // Обрабатываем ответ
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                // Обработка успешного ответа
                // console.log(xhr.responseText);
                // console.log(xhr.responseText.length);
                // for
                let response = xhr.responseText
                let responseArr = JSON.parse(response);
                // console.log(responseArr);
                // console.log(responseArr.header);
                $('h2:not(".center")').text(responseArr.header);
                $('#product_short_discription').text(responseArr.short_discription)
                $('h3').text('$' + responseArr.price + '-')

                
                


            } else {
                // Обработка ошибки
                console.error('error: ' + xhr.status);
            }
        }
    };

    $('#product_gallery_next_img').on('click',()=>{
        let imgNow = $('#product_main_img').attr('src');
        let imgNowNum = imgNow.slice(19,20)
        let newImgNum;
        if (imgNowNum >= 5) {
            newImgNum = 1
        }
        else {
            newImgNum = Number(imgNowNum) + 1
        }
        let newImg = '../img/tours_img/1.' + newImgNum + '.jpg'
        $('#product_main_img').attr('src',newImg);
    })
    $('#product_gallery_prev_img').on('click',()=>{
        let imgNow = $('#product_main_img').attr('src');
        let imgNowNum = imgNow.slice(19,20)
        let newImgNum;
        if (imgNowNum <= 1) {
            newImgNum = 5
        }
        else {
            newImgNum = Number(imgNowNum) - 1
        }
        let newImg = '../img/tours_img/1.' + newImgNum + '.jpg'
        $('#product_main_img').attr('src',newImg);
    })

    let touchstart;
    let touchstartY;
    $('#product_main_img').on('touchstart', (e)=>{
        touchstart = e.touches[0].clientX;
        touchstartY = e.touches[0].clientY;
    })

    $('#product_main_img').on('touchend', (e)=>{
        let swipePX = e.changedTouches[0].clientX - touchstart;
        let swipeYPX = e.changedTouches[0].clientY - touchstartY;
        if (swipePX !== 0 && Math.abs(swipePX) > Math.abs(swipeYPX)) {
            let mainImageNow = $('#product_main_img').attr('src');
            let imgNowNum = mainImageNow.slice(19,20)
            let newImgNum;
            if (swipePX < 0) {
                if (imgNowNum >= 5) {
                    newImgNum = 1
                }
                else {
                    newImgNum = Number(imgNowNum) + 1
                }
            }
            else if (swipePX > 0) {
                if (imgNowNum <= 1) {
                    newImgNum = 5
                }
                else {
                    newImgNum = Number(imgNowNum) - 1
                }
            }
            let newImg = '../img/tours_img/1.' + newImgNum + '.jpg'
            $('#product_main_img').attr('src',newImg);
        }
        
    })


    // product book form
    $('#product_book_button').on('click',()=>{
        $('#send_button_form').removeClass('desctopDisplayNone')
        $('#send_button_form').removeClass('mobileDisplayNone')
        $('body').css('overflow','hidden')
    })
    $('#send_button_form_close_button').on('click',()=>{
        $('#send_button_form').addClass('desctopDisplayNone')
        $('#send_button_form').addClass('mobileDisplayNone')
        $('body').css('overflow','visible')

    })
    $('#send_button_form_send_button').on('click',()=>{
        $('#send_button_form').addClass('desctopDisplayNone')
        $('#send_button_form').addClass('mobileDisplayNone')
        $('body').css('overflow','visible')
        $('input').val('')
        $('#adult_counter').text('1')
        $('#children_counter').text('0')
    })

    $('#adult_minus').on('click',()=>{
        let before = $('#adult_counter').text()
        let after = Number(before)-1
        if (after < 0) {
            after = 0
        }
        $('#adult_counter').text(after)
    })

    $('#adult_plus').on('click',()=>{
        let before = $('#adult_counter').text()
        $('#adult_counter').text(Number(before)+1)
    })

    $('#children_minus').on('click',()=>{
        let before = $('#children_counter').text()
        let after = Number(before)-1
        if (after < 0) {
            after = 0
        }
        $('#children_counter').text(after)
    })

    $('#children_plus').on('click',()=>{
        let before = $('#children_counter').text()
        $('#children_counter').text(Number(before)+1)
    })


})