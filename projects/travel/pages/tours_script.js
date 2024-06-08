jQuery(document).ready(function($){



    // filling from db without sort 
    var xhr = new XMLHttpRequest();
    let param = 'all'
    xhr.open('GET', '../server.php?param=' + param, true);
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                let response = xhr.responseText
                let responseArr = JSON.parse(response);
                for (let i = 0; i < 100; i++) {
                    let forInsert = '<div class="tour_box ' + responseArr[i].class_type + ' ' + responseArr[i].class_side + ' ' + responseArr[i].class_country + '" id="' + responseArr[i].id + '"><h3>' + responseArr[i].header + '</h3><img src="../img/tours_img/' + responseArr[i].photos.split(';')[0] + '" alt="image of tour"><p>' + responseArr[i].short_discription + '</p><p>$' + responseArr[i].price + '</p></div>'
                    $(forInsert).appendTo('#tours_container_right')
                }
            } 
            else {
                console.error('error: ' + xhr.status);
            }
            // filters
            let filtersArrType = [];
            let filtersArrPart = [];
            let filtersArrCountry = [];
            function Filter(add, filterName, attr) {
                console.log(add);
                console.log(filterName);
                console.log(attr);
                if (add == true) {
                    if (filterName == 'type') {
                        filtersArrType.push(attr)
                    }
                    else if (filterName == 'part') {
                        filtersArrPart.push(attr)
                    }
                    else if (filterName == 'country') {
                        filtersArrCountry.push(attr)
                    }
                }
                else {
                    if (filterName == 'type') {
                        let newArr = filtersArrType.filter((number) => number !== attr);
                        filtersArrType = newArr
                    }
                    else if (filterName == 'part') {
                        let newArr = filtersArrPart.filter((number) => number !== attr);
                        filtersArrPart = newArr
                    }
                    else if (filterName == 'country') {
                        let newArr = filtersArrCountry.filter((number) => number !== attr);
                        filtersArrCountry = newArr
                    }
                }
                if (filtersArrType.length > 0 || filtersArrPart.length > 0 || filtersArrCountry.length > 0) {
                    console.log('not empty');
                    $('#tours_container_right').children('div').css('display','none');
                    $('#tours_container_right').children('div').removeClass('visible');

                    if (filtersArrType.length > 0) {
                        for (let i = 0; i < filtersArrType.length; i++) {
                            let visibleClass = filtersArrType[i]
                            $('#tours_container_right').children('.' + visibleClass).addClass('visible');
                        }
                    }
                    if (filtersArrPart.length > 0) {
                        if (filtersArrType.length > 0) {
                            for (let i = 0; i < filtersArrPart.length; i++) {
                                let visibleClass = filtersArrPart[i]
                                $('#tours_container_right').children('.visible').filter('.' +visibleClass).addClass('visible2');
                            }
                            $('.visible').not('.visible2').removeClass('visible')
                            $('.visible2').removeClass('visible2')
                        }
                        else {
                            for (let i = 0; i < filtersArrPart.length; i++) {
                                let visibleClass = filtersArrPart[i]
                                $('#tours_container_right').children('.' + visibleClass).addClass('visible');
                            }
                        }
                    }
                    if (filtersArrCountry.length > 0) {
                        if (filtersArrType.length > 0) {
                            for (let i = 0; i < filtersArrCountry.length; i++) {
                                let visibleClass = filtersArrCountry[i]
                                $('#tours_container_right').children('.visible').filter('.' +visibleClass).addClass('visible3');
                            }
                            $('.visible').not('.visible3').removeClass('visible')
                            $('.visible3').removeClass('visible3')
                        }
                        if (filtersArrPart.length > 0) {
                            for (let i = 0; i < filtersArrCountry.length; i++) {
                                let visibleClass = filtersArrCountry[i]
                                $('#tours_container_right').children('.visible').filter('.' +visibleClass).addClass('visible4');
                            }
                            $('.visible').not('.visible4').removeClass('visible')
                            $('.visible4').removeClass('visible4')
                        }
                        if (filtersArrType.length == 0 && filtersArrPart.length == 0) {
                            for (let i = 0; i < filtersArrCountry.length; i++) {
                                let visibleClass = filtersArrCountry[i]
                                $('#tours_container_right').children('.' + visibleClass).addClass('visible');
                            }
                        }
                    }
                    $('#tours_container_right').children('.visible').css('display','grid');
                }
                else {
                    console.log('all filters is empty');
                    $('#tours_container_right').children('div').css('display','grid');
                }
            }












            $('input').prop('checked', false)

            let searchString = new URLSearchParams(window.location.search);
            let clicktype = searchString.get('type');
            if (clicktype !== null) {
                $('#tours_filter_type').children('input[name = ' + clicktype + ']').prop('checked', true)
                Filter(true, 'type', clicktype)
            }
        
            let clickCountry = searchString.get('country');
            if (clickCountry !== null) {
                $('#tours_filter_country').children('input[name = ' + clickCountry + ']').prop('checked', true)
                Filter(true, 'country', clickCountry)
            }

            $('#tours_filter_type').children('input').on('click',(e)=>{
                console.log(e.target.name);
                if (e.target.checked == true) {
                    Filter(true, 'type', e.target.name)
                }
                else {
                    Filter(false, 'type', e.target.name)
                }
            })

            $('#tours_filter_part').children('input').on('click',(e)=>{
                console.log(e.target.name);
                if (e.target.checked == true) {
                    Filter(true, 'part', e.target.name)
                }
                else {
                    Filter(false, 'part', e.target.name)
                }
            })

            $('#tours_filter_country').children('input').on('click',(e)=>{
                console.log(e.target.name);
                if (e.target.checked == true) {
                    Filter(true, 'country', e.target.name)
                }
                else {
                    Filter(false, 'country', e.target.name)
                }
            })
        
            // let firstClickOnFilter = true;
            // let firstClickOnFilterCountry = true;
            // let firstClickOnFilterType = true;

            // $('#tours_filter_type').children('input').on('click',(e)=>{
            //     console.log(e.target.name);
            //     if (e.target.checked == true) {
            //         if (firstClickOnFilterType == true) {
            //             $('#tours_container_right').children('div').not('.' + e.target.name + '').css('display','none');
            //             // $('#tours_filter_country').children('input').not('.' + e.target.name + '').prop('disabled',true);
            //             firstClickOnFilterType = false;
            //         }
            //         else {
            //             $('#tours_container_right').children('div .' + e.target.name + '').css('display','grid');
            //             // $('#tours_filter_country').children('.' + e.target.name + '').prop('disabled',false)
            //         }    
            //     }
            //     else {
            //         $('#tours_container_right').children('div .' + e.target.name + '').css('display','none');
            //         // $('#tours_filter_country').children('.' + e.target.name + '').prop('disabled',true)
            //         let lastFilter = true;
            //         for (let i = 0; i < $('#tours_filter_type').children('input').length && lastFilter == true; i++) {
            //             if ($('#tours_filter_type').children('input').eq(i).prop('checked') == true) {
            //                 lastFilter = false;
            //             }
            //         }
            //         for (let i = 0; i < $('#tours_filter_part').children('input').length && lastFilter == true; i++) {
            //             if ($('#tours_filter_part').children('input').eq(i).prop('checked') == true) {
            //                 lastFilter = false;
            //             }
            //         }
            //         for (let i = 0; i < $('#tours_filter_country').children('input').length && lastFilter == true; i++) {
            //             if ($('#tours_filter_country').children('input').eq(i).prop('checked') == true) {
            //                 lastFilter = false;
            //             }
            //         }
            //         if (lastFilter == true) {
            //             $('#tours_container_right').children('div').css('display','grid');
            //             // $('#tours_filter_country').children('input').prop('disabled',false);
            //             firstClickOnFilterType = true
            //         }
            //     }
            // })

            // $('#tours_filter_part').children('input').on('click',(e)=>{
            //     if (e.target.checked == true) {
            //         if (firstClickOnFilter == true) {
            //             $('#tours_container_right').children('div').not('.' + e.target.name + '').css('display','none');
            //             $('#tours_filter_country').children('input').not('.' + e.target.name + '').prop('disabled',true);
            //             firstClickOnFilter = false;
            //         }
            //         else {
            //             $('#tours_container_right').children('div .' + e.target.name + '').css('display','grid');
            //             $('#tours_filter_country').children('.' + e.target.name + '').prop('disabled',false)
            //         }    
            //     }
            //     else {
            //         $('#tours_container_right').children('div .' + e.target.name + '').css('display','none');
            //         $('#tours_filter_country').children('.' + e.target.name + '').prop('disabled',true)
            //         let lastFilter = true;
            //         for (let i = 0; i < $('#tours_filter_type').children('input').length && lastFilter == true; i++) {
            //             if ($('#tours_filter_type').children('input').eq(i).prop('checked') == true) {
            //                 lastFilter = false;
            //             }
            //         }
            //         for (let i = 0; i < $('#tours_filter_part').children('input').length && lastFilter == true; i++) {
            //             if ($('#tours_filter_part').children('input').eq(i).prop('checked') == true) {
            //                 lastFilter = false;
            //             }
            //         }
            //         for (let i = 0; i < $('#tours_filter_country').children('input').length && lastFilter == true; i++) {
            //             if ($('#tours_filter_country').children('input').eq(i).prop('checked') == true) {
            //                 lastFilter = false;
            //             }
            //         }
            //         if (lastFilter == true && firstClickOnFilterCountry == true) {
            //             $('#tours_container_right').children('div').css('display','grid');
            //             $('#tours_filter_country').children('input').prop('disabled',false);
            //             firstClickOnFilter = true
            //         }
            //     }
            // })
        
            
            // $('#tours_filter_country').children('input').on('click',(e)=>{
            //     if (e.target.checked == true) {
            //         if (firstClickOnFilterCountry == true) {
            //             $('#tours_container_right').children('div').not('.' + e.target.name + '').css('display','none');
            //             firstClickOnFilterCountry = false;
            //         }
            //         else {
            //             $('#tours_container_right').children('div .' + e.target.name + '').css('display','grid');
            //         }    
            //     }
            //     else {
            //         $('#tours_container_right').children('div .' + e.target.name + '').css('display','none');
            //         let lastFilter = true;
            //         for (let i = 0; i < $('#tours_filter_type').children('input').length && lastFilter == true; i++) {
            //             if ($('#tours_filter_type').children('input').eq(i).prop('checked') == true) {
            //                 lastFilter = false;
            //             }
            //         }
            //         for (let i = 0; i < $('#tours_filter_part').children('input').length && lastFilter == true; i++) {
            //             if ($('#tours_filter_part').children('input').eq(i).prop('checked') == true) {
            //                 lastFilter = false;
            //             }
            //         }
            //         for (let i = 0; i < $('#tours_filter_country').children('input').length && lastFilter == true; i++) {
            //             if ($('#tours_filter_country').children('input').eq(i).prop('checked') == true) {
            //                 lastFilter = false;
            //             }
            //         }
            //         if (lastFilter == true) {
            //             $('#tours_container_right').children('div').css('display','grid');
            //             firstClickOnFilterCountry = true;
            //         }
            //     }
            // })



















        
            // product page link generation
            $('.tour_box').on('click',(e)=>{
                let clickedProduct
                if (e.target.tagName !== 'DIV') {
                    clickedProduct = e.target.parentElement.id;
                }
                else {
                    clickedProduct = e.target.id;
                }
                let link =  'product.html?id=' + clickedProduct
                document.location = link
            })



        }
    };

    if (window.screen.width <= 1000) {
        $('#filters_icon').on('click',()=>{
            $('#tours_container_left').toggleClass('mobileDisplayNone')
            if ($('#tours_container_left').hasClass('mobileDisplayNone')) {
                $('body').css('overflow','visible')
            }
            else {
                $('body').css('overflow','hidden')
            }
        })
    }





})


