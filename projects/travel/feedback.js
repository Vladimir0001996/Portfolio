let animationInterval;
let messageInterval;
let welcomeText = 'Hello! How can I help you?'
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
CustomerServiceAnimation();

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
    $('#feedback_form').css('display', 'block')
})
$('#feedback_form_close_button').on('click', ()=>{
        $('#feedback_form').css('display', 'block')
})